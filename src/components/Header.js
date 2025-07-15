import React from 'react';

function Header({ onToggleSidebar }) {
  return (
    <header className="header">
      <div className="logo">mBaaS 사용자 가이드</div>
      
      {/* 모바일 메뉴 버튼 */}
      <button className="mobile-menu-btn" onClick={onToggleSidebar}>
        ☰
      </button>
      
      {/* 네비게이션 메뉴 */}
      <nav>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#user-guide">사용 가이드</a>
          </li>
          <li className="nav-item">
            <a href="#dev-docs">개발 문서</a>
          </li>
          <li className="nav-item">
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;