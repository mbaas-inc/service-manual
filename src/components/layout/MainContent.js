import React from 'react';
import { useTranslation } from 'react-i18next';
import { pageMapping } from '../../utils/pageMapping';

function MainContent({ activeSection }) {
  const { t } = useTranslation();
  // 현재 활성 페이지 정보 가져오기
  const currentPage = pageMapping[activeSection] || pageMapping['quick-start'];
  const PageComponent = currentPage.component;

  // 브레드크럼 생성 함수
  const generateBreadcrumb = () => {
    const { category, subcategory, breadcrumb } = currentPage;
    
    const categoryNames = {
      'user-guide': t('categories.userGuide'),
      'developer': t('categories.developer'), 
    };
    
    const subcategoryNames = {
      'getting-started': t('subcategories.gettingStarted'),
      'authentication': t('subcategories.authentication'),
      'member-management': t('subcategories.memberManagement'),
      'messaging': t('subcategories.messaging'),
      'payment': t('subcategories.payment'),
      'board': t('subcategories.board'),
      'push': t('subcategories.push'),
      'settings': t('subcategories.settings'),
      'api': t('subcategories.api'),
      'sdk': t('subcategories.sdk'),
      'integration': t('subcategories.integration'),
      'advanced': t('subcategories.advanced')
    };

    return {
      category: categoryNames[category] || t('categories.userGuide'),
      subcategory: subcategoryNames[subcategory] || '',
      current: breadcrumb
    };
  };

  const breadcrumbData = generateBreadcrumb();

  return (
    <main className="main-content" data-category={currentPage.category}>
      {/* 🔥 개선된 브레드크럼 */}
      <nav className="breadcrumb">
        <a href={`#${currentPage.category}`} className="breadcrumb-link">
          {breadcrumbData.category}
        </a>
        <span className="separator">/</span>
        
        {breadcrumbData.subcategory && (
          <>
            <a href={`#${currentPage.category}-${currentPage.subcategory}`} className="breadcrumb-link">
              {breadcrumbData.subcategory}
            </a>
            <span className="separator">/</span>
          </>
        )}
        
        <span className="breadcrumb-current">{breadcrumbData.current}</span>
      </nav>

      {/* 동적 페이지 컴포넌트 렌더링 */}
      {/* 🔥 DefaultPage에는 추가 props 전달, 다른 페이지는 기본 렌더링 */}
      {currentPage.component.name === 'DefaultPage' ? (
        <PageComponent 
          title={currentPage.title}
          description={currentPage.description}
          category={currentPage.category}
          subcategory={currentPage.subcategory}
        />
      ) : (
        <PageComponent />
      )}
    </main>
  );
}

export default MainContent;