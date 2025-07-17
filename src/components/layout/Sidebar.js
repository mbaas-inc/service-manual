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
      key: 'authentication',
      title: '인증 관리',
      items: [
        { id: 'auth-login', label: '로그인 설정' },
        { id: 'auth-join', label: '회원가입 설정' },
        { id: 'auth-log', label: '접속 로그' },
      ]
    },
    {
      key: 'member-management',
      title: '고객 관리',
      items: [
        { id: 'member-list', label: '회원 목록 보기' },
        { id: 'member-profile', label: '회원 정보 관리' },
        { id: 'member-permissions', label: '권한 설정하기' },
        { id: 'member-export', label: '회원 데이터 내보내기' }
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
      key: 'messaging',
      title: '메시지 발송',
      items: [
        { id: 'send-email', label: '이메일 보내기' },
        { id: 'send-sms', label: 'SMS 발송하기' },
        { id: 'message-templates', label: '메시지 템플릿 만들기' },
        { id: 'bulk-messaging', label: '대량 메시지 발송' },
        { id: 'message-history', label: '발송 내역 확인' }
      ]
    },
    {
      key: 'board',
      title: '게시판 관리',
      items: [
        { id: 'board-management', label: '게시판 만들기' },
        { id: 'post-management', label: '게시글 관리하기' },
        { id: 'comment-moderation', label: '댓글 관리하기' }
      ]
    },
    {
      key: 'push',
      title: '푸시 관리',
      items: [
        { id: 'push-key', label: 'Firebase key 업로드' },
        { id: 'push-device', label: '디바이스 목록' },
        { id: 'push-topic', label: '토픽 관리' }
      ]
    },
    {
      key: 'settings',
      title: '설정',
      items: [
        { id: 'general-settings', label: '일반 설정' },
        { id: 'security-settings', label: '보안 설정' },
        { id: 'notification-settings', label: '알림 설정' }
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