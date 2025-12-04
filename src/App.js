import React, { useState, useEffect } from 'react';
import './styles/variables.css';
import './styles/common.css';
import './styles/components/header.css';
import './styles/components/sidebar.css';
import './styles/components/TOC.css';

//  import 경로 
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import TOC from './components/layout/TOC';
import MobileMenu from './components/layout/MobileMenu';

// 페이지 매핑 import
import { pageMapping, getDefaultPage } from './utils/pageMapping';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('api-account');
  const [sidebarSections, setSidebarSections] = useState({
    'getting-started': false, // 시작하기는 기본적으로 열림
    'member-management': false,
    'messaging': false,
    'payment': false,
    'board': false,
    'push': false,
    'analytics': false,
    'settings': false,
    'api-docs': true, // 개발자 문서 API가 기본적으로 열림
    'developer': false,
    'help': false
  });

  // 사이드바 토글 함수
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 모바일 메뉴 토글 함수
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 모바일 메뉴 닫기 함수
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // 🔥 개선된 사이드바 섹션 토글 함수 (하나만 열리게)
  const toggleSidebarSection = (sectionKey) => {
    setSidebarSections(prev => {
      const newSections = {};
      
      // 모든 섹션을 일단 닫기
      Object.keys(prev).forEach(key => {
        newSections[key] = false;
      });
      
      // 클릭한 섹션만 토글 (현재 상태의 반대로)
      newSections[sectionKey] = !prev[sectionKey];
      
      return newSections;
    });
  };

  // 🔥 개선된 활성 섹션 변경 함수 (상단 스크롤 추가)
  const setActiveLink = (sectionId) => {
    setActiveSection(sectionId);
    
    // 페이지 상단으로 부드럽게 스크롤
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 🔥 헤더 네비게이션 처리 - 카테고리별 기본 페이지로 이동
  const handleCategoryNavigation = (category) => {
    const defaultPage = getDefaultPage(category);
    setActiveLink(defaultPage);
    
    // 해당 카테고리의 사이드바 섹션 열기
    if (category === 'user-guide') {
      setSidebarSections(prev => ({
        ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
        'getting-started': true
      }));
    } else if (category === 'developer') {
      setSidebarSections(prev => ({
        ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
        'api-docs': true
      }));
    } else if (category === 'help') {
      setSidebarSections(prev => ({
        ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
        'help': true
      }));
    }
  };

  // 현재 페이지의 카테고리 정보 가져오기
  const getCurrentPageCategory = () => {
    const currentPage = pageMapping[activeSection];
    return currentPage ? currentPage.category : 'user-guide';
  };

  // 화면 크기에 따른 사이드바/모바일메뉴 자동 닫기
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // body 스크롤 제어 (모바일 메뉴 열렸을 때)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // 사이드바 외부 클릭 시 닫기
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (window.innerWidth <= 768 && 
          isSidebarOpen && 
          !e.target.closest('.sidebar') && 
          !e.target.closest('.mobile-menu-btn')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isSidebarOpen]);

  // activeSection이 변경될 때마다 상단으로 스크롤 (추가 안전장치)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activeSection]);

  return (
    <div className="App">
      {/* 헤더 */}
      <Header 
        onToggleSidebar={toggleSidebar}
        onToggleMobileMenu={toggleMobileMenu}
        activeSection={activeSection}
        onCategoryNavigation={handleCategoryNavigation}
        currentCategory={getCurrentPageCategory()}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      {/* 메인 레이아웃 */}
      <div className="main-layout">
        {/* 사이드바 */}
        <Sidebar 
          isOpen={isSidebarOpen}
          sections={sidebarSections}
          activeSection={activeSection}
          onToggleSection={toggleSidebarSection}
          onSetActive={setActiveLink}
        />
        
        {/* 콘텐츠 영역 */}
        <div className="content-area">
          {/* 메인 콘텐츠 */}
          <MainContent 
            activeSection={activeSection} 
            data-category={getCurrentPageCategory()}
          />
          
          {/* 목차 (TOC) */}
          <TOC 
            activeSection={activeSection}
            onSetActive={setActiveLink}
            pageType={getCurrentPageCategory()} 
            key={activeSection} // activeSection이 변경될 때마다 TOC 재생성
          />
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        onCategoryNavigation={handleCategoryNavigation}
        onSetActive={setActiveLink}
        currentCategory={getCurrentPageCategory()}
      />
    </div>
  );
}

export default App;