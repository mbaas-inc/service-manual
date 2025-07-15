import React, { useEffect, useState } from 'react';

function TOC({ activeSection, onSetActive }) {
  const [tocItems] = useState([
    { id: 'quick-start', label: '빠른 시작 가이드' },
    { id: 'next-steps', label: '다음 단계' },
    { id: 'common-questions', label: '자주 묻는 질문' },
    { id: 'additional-help', label: '추가 도움말' }
  ]);

  const handleTocClick = (sectionId, e) => {
    e.preventDefault();
    onSetActive(sectionId);
    
    // 해당 섹션으로 스크롤 이동
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // 헤더 높이 고려
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // 스크롤 위치에 따른 활성 섹션 자동 감지
  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < bottom) {
          onSetActive(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems, onSetActive]);

  return (
    <aside className="toc">
      <div className="toc-title">이 페이지의 목차</div>
      <ul className="toc-list">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`}
              className={`toc-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleTocClick(item.id, e)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default TOC;