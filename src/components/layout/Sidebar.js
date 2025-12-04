import React from 'react';
import { useTranslation } from 'react-i18next';

function Sidebar({ isOpen, sections, activeSection, onToggleSection, onSetActive, isEmbed }) {
  const { t } = useTranslation();
  
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
      'message-group','send-email', 'send-sms', 'send-talk', 'message-templates', 'bulk-messaging', 'message-history',
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
          title: t('sidebar.gettingStarted.title'),
          items: [
            { id: 'quick-start', label: t('sidebar.gettingStarted.quickStart') },
            { id: 'account-setup', label: t('sidebar.gettingStarted.accountSetup') },
            { id: 'dashboard-overview', label: t('sidebar.gettingStarted.dashboardOverview') }
          ]
        },
        {
          key: 'authentication',
          title: t('sidebar.authentication.title'),
          items: [
            { id: 'auth-login', label: t('sidebar.authentication.authLogin') },
            { id: 'auth-join', label: t('sidebar.authentication.authJoin') },
            { id: 'auth-log', label: t('sidebar.authentication.authLog') }
          ]
        },
        {
          key: 'member-management',
          title: t('sidebar.memberManagement.title'),
          items: [
            { id: 'member-list', label: t('sidebar.memberManagement.memberList') },
            { id: 'member-permissions', label: t('sidebar.memberManagement.memberPermissions') },
          ]
        },
        {
          key: 'payment',
          title: t('sidebar.payment.title'),
          items: [
            { id: 'payment-setup', label: t('sidebar.payment.paymentSetup') },
            { id: 'payment-history', label: t('sidebar.payment.paymentHistory') },
            // { id: 'refund-management', label: '환불 처리하기' },
          ]
        },
        {
          key: 'board',
          title: t('sidebar.board.title'),
          items: [
            { id: 'board-management', label: t('sidebar.board.boardManagement') },
            { id: 'post-management', label: t('sidebar.board.postManagement') },
            { id: 'comment-moderation', label: t('sidebar.board.commentModeration') }
          ]
        },
        {
          key: 'messaging',
          title: t('sidebar.messaging.title'),
          items: [
            { id: 'message-group', label: t('sidebar.messaging.messageGroup') },
            { id: 'send-sms', label: t('sidebar.messaging.sendSms') },
            { id: 'send-talk', label: t('sidebar.messaging.sendTalk') },
            { id: 'message-templates', label: t('sidebar.messaging.messageTemplates') },
            { id: 'message-history', label: t('sidebar.messaging.messageHistory') }
          ]
        },
        {
          key: 'push',
          title: t('sidebar.push.title'),
          items: [
            { id: 'push-key', label: t('sidebar.push.pushKey') },
            { id: 'push-device', label: t('sidebar.push.pushDevice') },
            { id: 'push-topic', label: t('sidebar.push.pushTopic') }
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
          title: t('sidebar.apiDocs.title'),
          items: [
            { id: 'api-account', label: t('sidebar.apiDocs.accountApi') }
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
    <aside className={`sidebar ${isOpen ? 'active' : ''} ${isEmbed ? 'embed-mode' : ''}`}>

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