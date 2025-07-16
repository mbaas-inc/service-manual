import React from 'react';

function Sidebar({ isOpen, sections, activeSection, onToggleSection, onSetActive }) {
  // 사이드바 메뉴 데이터
  const menuSections = [
    {
      key: 'getting-started',
      title: '시작하기',
      items: [
        { id: 'quick-start', label: '빠른 시작 가이드' },
        { id: 'account-setup', label: '계정 생성하기' },
        { id: 'dashboard-overview', label: '대시보드 둘러보기' }
      ]
    },
    {
      key: 'member-management',
      title: '회원 관리',
      items: [
        { id: 'member-overview', label: '회원 관리 개요' },
        { id: 'member-registration', label: '회원 가입 설정' },
        { id: 'member-list', label: '회원 목록 보기' },
        { id: 'member-profile', label: '회원 정보 관리' },
        { id: 'member-permissions', label: '권한 설정하기' },
        { id: 'member-export', label: '회원 데이터 내보내기' }
      ]
    },
    {
      key: 'messaging',
      title: '메시지 발송',
      items: [
        { id: 'message-overview', label: '메시지 서비스 개요' },
        { id: 'send-email', label: '이메일 보내기' },
        { id: 'send-sms', label: 'SMS 발송하기' },
        { id: 'push-notifications', label: '푸시 알림 보내기' },
        { id: 'message-templates', label: '메시지 템플릿 만들기' },
        { id: 'bulk-messaging', label: '대량 메시지 발송' },
        { id: 'message-history', label: '발송 내역 확인' }
      ]
    },
    {
      key: 'payment',
      title: '결제 관리',
      items: [
        { id: 'payment-setup', label: '결제 시스템 설정' },
        { id: 'payment-methods', label: '결제 수단 관리' },
        { id: 'payment-history', label: '결제 내역 조회' },
        { id: 'refund-management', label: '환불 처리하기' },
        { id: 'payment-reports', label: '결제 리포트 보기' }
      ]
    },
    {
      key: 'content',
      title: '콘텐츠 관리',
      items: [
        { id: 'content-overview', label: '콘텐츠 관리 개요' },
        { id: 'board-management', label: '게시판 만들기' },
        { id: 'post-management', label: '게시글 관리하기' },
        { id: 'comment-moderation', label: '댓글 관리하기' },
        { id: 'file-management', label: '파일 업로드 관리' }
      ]
    },
    {
      key: 'analytics',
      title: '통계 및 분석',
      items: [
        { id: 'analytics-overview', label: '통계 대시보드' },
        { id: 'user-analytics', label: '사용자 분석' },
        { id: 'usage-statistics', label: '사용량 통계' },
        { id: 'reports-export', label: '리포트 내보내기' }
      ]
    },
    {
      key: 'settings',
      title: '설정',
      items: [
        { id: 'general-settings', label: '일반 설정' },
        { id: 'security-settings', label: '보안 설정' },
        { id: 'notification-settings', label: '알림 설정' },
        { id: 'billing-settings', label: '요금 및 결제 설정' }
      ]
    }
  ];

  const handleSectionClick = (sectionKey) => {
    onToggleSection(sectionKey);
  };

  const handleItemClick = (itemId, e) => {
    e.preventDefault();
    onSetActive(itemId);
    
    // 해당 섹션으로 스크롤 이동
    const element = document.getElementById(itemId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      {menuSections.map((section) => (
        <div key={section.key} className="sidebar-section">
          {/* 섹션 제목 */}
          <div 
            className={`sidebar-title ${!sections[section.key] ? 'collapsed' : ''}`}
            onClick={() => handleSectionClick(section.key)}
          >
            <span>{section.title}</span>
            <span 
              className="toggle-icon"
              style={{
                transform: sections[section.key] ? 'rotate(0deg)' : 'rotate(-90deg)'
              }}
            >
              ▼
            </span>
          </div>
          
          {/* 섹션 메뉴 */}
          <ul className={`sidebar-menu ${!sections[section.key] ? 'collapsed' : ''}`}>
            {section.items.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => handleItemClick(item.id, e)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;