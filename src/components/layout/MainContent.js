import React from 'react';
import { pageMapping } from '../../utils/pageMapping';

function MainContent({ activeSection }) {
  // 현재 활성 페이지 정보 가져오기
  const currentPage = pageMapping[activeSection] || pageMapping['quick-start'];
  const PageComponent = currentPage.component;

  // 브레드크럼 생성 함수
  const generateBreadcrumb = () => {
    const { category, subcategory, breadcrumb } = currentPage;
    
    const categoryNames = {
      'user-guide': '사용자 가이드',
      'developer': '개발자 문서', 
    };
    
    const subcategoryNames = {
      'getting-started': '시작하기',
      'authentication': '인증 관리',
      'member-management': '고객 관리',
      'messaging': '메시지 발송',
      'payment': '결제 관리',
      'board': '게시판 관리',
      'push': '푸시 관리',
      'settings': '설정',
      'api': 'API 문서',
      'sdk': 'SDK 가이드',
      'integration': '연동 가이드',
      'advanced': '고급 기능'
    };

    return {
      category: categoryNames[category] || '사용자 가이드',
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