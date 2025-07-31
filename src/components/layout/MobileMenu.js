import React, { useState } from 'react';

function MobileMenu({ isOpen, onClose, onCategoryNavigation, onSetActive, currentCategory }) {
  const [expandedSection, setExpandedSection] = useState(null);

  // 사용자 가이드 메뉴 구조
  const userGuideMenus = [
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
        { id: 'auth-log', label: '접속 로그' }
      ]
    },
    {
      key: 'member-management',
      title: '고객 관리',
      items: [
        { id: 'member-list', label: '고객 정보 관리' },
        { id: 'member-permissions', label: '고객 권한 설정하기' }
      ]
    },
    {
      key: 'payment',
      title: '결제 관리',
      items: [
        { id: 'payment-setup', label: 'PG 결제 설정' },
        { id: 'payment-history', label: '결제 내역 조회' }
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
      key: 'push',
      title: '푸시 관리',
      items: [
        { id: 'push-key', label: 'Firebase key 업로드' },
        { id: 'push-device', label: '디바이스 목록' },
        { id: 'push-topic', label: '토픽 관리' }
      ]
    }
  ];

  // 개발자 문서 메뉴 구조
  const developerMenus = [
    {
      key: 'api-docs',
      title: 'API 문서',
      items: [
        { id: 'api-account', label: 'Account API' }
      ]
    }
  ];

  // 카테고리별 메뉴 선택
  const getMenusByCategory = (category) => {
    switch (category) {
      case 'user-guide':
        return userGuideMenus;
      case 'developer':
        return developerMenus;
      default:
        return userGuideMenus;
    }
  };

  // 섹션 토글
  const handleSectionToggle = (sectionKey) => {
    setExpandedSection(expandedSection === sectionKey ? null : sectionKey);
  };

  // 메뉴 아이템 클릭
  const handleItemClick = (itemId) => {
    onSetActive(itemId);
    onClose();
  };

  // 카테고리 변경
  const handleCategoryClick = (category) => {
    onCategoryNavigation(category);
    setExpandedSection(null); // 카테고리 변경 시 펼쳐진 섹션 초기화
  };

  // 오버레이 클릭 시 메뉴 닫기
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay" onClick={handleOverlayClick}>
      <div className="mobile-menu">
        {/* 메뉴 헤더 */}
        <div className="mobile-menu-header">
          <h3>메뉴</h3>
          <button className="close-btn" onClick={onClose} aria-label="메뉴 닫기">
            ✕
          </button>
        </div>

        {/* 카테고리 선택 */}
        <div className="mobile-category-nav">
          <button 
            className={`category-btn ${currentCategory === 'user-guide' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('user-guide')}
          >
            📚 사용자 가이드
          </button>
          <button 
            className={`category-btn ${currentCategory === 'developer' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('developer')}
          >
            💻 개발자 문서
          </button>
        </div>

        {/* 메뉴 콘텐츠 */}
        <div className="mobile-menu-content">
          {getMenusByCategory(currentCategory).map((section) => (
            <div key={section.key} className="mobile-menu-section">
              {/* 섹션 제목 */}
              <button 
                className={`mobile-section-title ${expandedSection === section.key ? 'expanded' : ''}`}
                onClick={() => handleSectionToggle(section.key)}
              >
                <span>{section.title}</span>
                <span className="toggle-icon">
                  {expandedSection === section.key ? '▼' : '▶'}
                </span>
              </button>

              {/* 섹션 메뉴 아이템들 */}
              <div className={`mobile-section-items ${expandedSection === section.key ? 'expanded' : ''}`}>
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    className="mobile-menu-item"
                    onClick={() => handleItemClick(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;