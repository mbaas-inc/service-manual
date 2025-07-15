import React, { useState, useEffect } from 'react';
import './styles/common.css';

// 컴포넌트 import
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import TOC from './components/TOC';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('quick-start');
  const [sidebarSections, setSidebarSections] = useState({
    'getting-started': true, // 시작하기는 기본적으로 열림
    'member-management': false,
    'messaging': false,
    'payment': false,
    'content': false,
    'analytics': false,
    'settings': false,
    'help': false
  });

  // 사이드바 토글 함수
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 사이드바 섹션 토글 함수
  const toggleSidebarSection = (sectionKey) => {
    setSidebarSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  // 활성 섹션 변경 함수
  const setActiveLink = (sectionId) => {
    setActiveSection(sectionId);
  };

  // 화면 크기에 따른 사이드바 자동 닫기
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  return (
    <div className="App">
      {/* 헤더 */}
      <Header onToggleSidebar={toggleSidebar} />
      
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
          <MainContent activeSection={activeSection} />
          
          {/* 목차 (TOC) */}
          <TOC 
            activeSection={activeSection}
            onSetActive={setActiveLink}
          />
        </div>
      </div>
    </div>
  );
}

export default App;