import React from 'react';

function Sidebar({ isOpen, sections, activeSection, onToggleSection, onSetActive }) {
  
  // 현재 섹션의 카테고리 파악
  const getCurrentCategory = () => {
    // 홈페이지
    if (activeSection === 'home') return 'home';
    
    // 사용자 가이드 섹션들
    const userGuideSections = [
      'quick-start', 'account-setup', 'dashboard-overview',
      'auth-login', 'auth-join', 'auth-log',
      'member-list', 'member-profile', 'member-permissions', 'member-export',
      'payment-setup', 'payment-methods', 'payment-history', 'refund-management', 'payment-reports',
      'send-email', 'send-sms', 'message-templates', 'bulk-messaging', 'message-history',
      'board-management', 'post-management', 'comment-moderation',
      'push-key', 'push-device', 'push-topic',
      'general-settings', 'security-settings', 'notification-settings'
    ];
    
    // 개발자 문서 섹션들
    const developerSections = [
      'api-account'
    ];
    
    // 도움말 섹션들
    const helpSections = [
      'faq-common', 'faq-technical', 'faq-billing',
      'contact-support'
    ];
    
    if (userGuideSections.includes(activeSection)) return 'user-guide';
    if (developerSections.includes(activeSection)) return 'developer';
    if (helpSections.includes(activeSection)) return 'help';
    
    return 'home';
  };

  // 카테고리별 메뉴 데이터
  const getMenuSections = () => {
    const currentCategory = getCurrentCategory();
    
    // 홈페이지는 메뉴 없음
    if (currentCategory === 'home') {
      return [];
    }
    
    // 🔥 사용자 가이드 메뉴
    if (currentCategory === 'user-guide') {
      return [
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
            { id: 'member-permissions', label: '고객 권한 설정하기' },
          ]
        },
        {
          key: 'payment',
          title: '결제 관리',
          items: [
            { id: 'payment-setup', label: 'PG 결제 설정' },
            { id: 'payment-history', label: '결제 내역 조회' },
            // { id: 'refund-management', label: '환불 처리하기' },
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
        },
        // {
        //   key: 'settings',
        //   title: '설정',
        //   items: [
        //     { id: 'general-settings', label: '일반 설정' },
        //     { id: 'security-settings', label: '보안 설정' },
        //     { id: 'notification-settings', label: '알림 설정' }
        //   ]
        // }
      ];
    }
    
    // 🔥 개발자 문서 메뉴
    if (currentCategory === 'developer') {
      return [
        {
          key: 'api-docs',
          title: 'API 문서',
          items: [
            { id: 'api-account', label: 'Account API' }
          ]
        },
        // {
        //   key: 'sdk-guide',
        //   title: 'SDK 가이드',
        //   items: [
        //     { id: 'sdk-overview', label: 'SDK 개요' },
        //     { id: 'sdk-installation', label: '설치 가이드' },
        //     { id: 'sdk-quickstart', label: '빠른 시작' },
        //     { id: 'code-examples', label: '코드 예제' }
        //   ]
        // },
        // {
        //   key: 'integration',
        //   title: '연동 가이드',
        //   items: [
        //     { id: 'webhook-setup', label: '웹훅 설정' },
        //     { id: 'third-party-integration', label: '외부 서비스 연동' },
        //     { id: 'database-setup', label: '데이터베이스 설정' },
        //     { id: 'deployment-guide', label: '배포 가이드' }
        //   ]
        // }
      ];
    }
    
    // 🔥 도움말 메뉴
    // if (currentCategory === 'help') {
    //   return [
    //     {
    //       key: 'faq',
    //       title: 'FAQ',
    //       items: [
    //         { id: 'faq-common', label: '자주 묻는 질문' },
    //         { id: 'faq-technical', label: '기술 관련 FAQ' },
    //         { id: 'faq-billing', label: '요금 관련 FAQ' }
    //       ]
    //     }, 
    //     {
    //       key: 'support',
    //       title: '고객 지원',
    //       items: [
    //         { id: 'contact-support', label: '고객 지원 문의' }
    //       ]
    //     }
    //   ];
    // }
    
    return [];
  };

  const menuSections = getMenuSections();
  const currentCategory = getCurrentCategory();

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

  // 홈페이지일 때는 사이드바 숨김
  if (currentCategory === 'home') {
    return null;
  }

  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>

      {/* 메뉴 섹션들 */}
      <div className="sidebar-content">
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
      </div>
    </aside>
  );
}

export default Sidebar;