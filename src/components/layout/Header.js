import React from 'react';

function Header({ onToggleSidebar, onCategoryNavigation, currentCategory }) {
  
  // 🔥 현재 카테고리 정보를 props에서 받아서 사용
  const currentActiveNav = currentCategory || 'user-guide';

  // 🔥 네비게이션 메뉴 클릭 핸들러 (카테고리 네비게이션 함수 사용)
  const handleNavClick = (navType, e) => {
    e.preventDefault(); // 기본 링크 동작 방지
    
    // App.js의 handleCategoryNavigation 함수 호출
    onCategoryNavigation(navType);
  };

  return (
    <header className="header">
      <div className="logo">mBaaS 서비스 매뉴얼</div>
      
      {/* 모바일 메뉴 버튼 */}
      <button className="mobile-menu-btn" onClick={onToggleSidebar}>
        ☰
      </button>
      
      {/* 네비게이션 메뉴 */}
      <nav>
        <ul className="nav-menu">
          <li className="nav-item">
            <a 
              href="#user-guide"
              className={currentActiveNav === 'user-guide' ? 'active' : ''}
              onClick={(e) => handleNavClick('user-guide', e)}
            >
              사용자 가이드
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#developer"
              className={currentActiveNav === 'developer' ? 'active' : ''}
              onClick={(e) => handleNavClick('developer', e)}
            >
              개발자 문서
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#help"
              className={currentActiveNav === 'help' ? 'active' : ''}
              onClick={(e) => handleNavClick('help', e)}
            >
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;