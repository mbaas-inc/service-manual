import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function MobileMenu({ isOpen, onClose, onCategoryNavigation, onSetActive, currentCategory }) {
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState(null);

  // 사용자 가이드 메뉴 구조
  const userGuideMenus = [
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
        { id: 'member-permissions', label: t('sidebar.memberManagement.memberPermissions') }
      ]
    },
    {
      key: 'payment',
      title: t('sidebar.payment.title'),
      items: [
        { id: 'payment-setup', label: t('sidebar.payment.paymentSetup') },
        { id: 'payment-history', label: t('sidebar.payment.paymentHistory') }
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
        { id: 'send-email', label: t('mobileMenu.sendEmail') },
        { id: 'send-sms', label: t('mobileMenu.sendSms') },
        { id: 'message-templates', label: t('sidebar.messaging.messageTemplates') },
        { id: 'bulk-messaging', label: t('mobileMenu.bulkMessaging') },
        { id: 'message-history', label: t('mobileMenu.messageHistory') }
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
    }
  ];

  // 개발자 문서 메뉴 구조
  const developerMenus = [
    {
      key: 'api-docs',
      title: t('sidebar.apiDocs.title'),
      items: [
        { id: 'api-account', label: t('sidebar.apiDocs.accountApi') }
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
          <h3>{t('mobileMenu.title')}</h3>
          <button className="close-btn" onClick={onClose} aria-label={t('nav.menuClose')}>
            ✕
          </button>
        </div>

        {/* 카테고리 선택 */}
        <div className="mobile-category-nav">
          <button 
            className={`category-btn ${currentCategory === 'user-guide' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('user-guide')}
          >
            {t('mobileMenu.userGuide')}
          </button>
          <button 
            className={`category-btn ${currentCategory === 'developer' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('developer')}
          >
            {t('mobileMenu.developer')}
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