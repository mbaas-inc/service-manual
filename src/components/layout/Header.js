import React from 'react';

function Header({ onToggleSidebar, onToggleMobileMenu, onCategoryNavigation, currentCategory, isMobileMenuOpen }) {
  
  // 현재 카테고리 정보를 props에서 받아서 사용
  const currentActiveNav = currentCategory || 'user-guide';

  // 네비게이션 메뉴 클릭 핸들러 (카테고리 네비게이션 함수 사용)
  const handleNavClick = (navType, e) => {
    e.preventDefault(); // 기본 링크 동작 방지
    
    // App.js의 handleCategoryNavigation 함수 호출
    onCategoryNavigation(navType);
  };

  // 모바일 메뉴 클릭 핸들러
  const handleMobileMenuClick = () => {
    onToggleMobileMenu();
  };

  return (
    <header className="header">
      <div className="logo">AiApp 문서</div>
      
      {/* 모바일 햄버거 메뉴 버튼 */}
      <button 
        className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={handleMobileMenuClick}
        aria-label="모바일 메뉴 열기/닫기"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {/* 데스크톱 네비게이션 메뉴 */}
      <nav className="desktop-nav">
        <ul className="nav-menu">
          {/* 사용자 가이드 임시 주석처리
          <li className="nav-item">
            <a 
              href="#user-guide"
              className={currentActiveNav === 'user-guide' ? 'active' : ''}
              onClick={(e) => handleNavClick('user-guide', e)}
            >
              사용자 가이드
            </a>
          </li>
          */}
          <li className="nav-item">
            <a 
              href="#developer"
              className={currentActiveNav === 'developer' ? 'active' : ''}
              onClick={(e) => handleNavClick('developer', e)}
            >
              개발자 문서
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
