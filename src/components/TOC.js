import React, { useEffect, useState } from 'react';

function TOC({ activeSection, onSetActive }) {
  const [tocItems, setTocItems] = useState([]);
  const [currentActive, setCurrentActive] = useState('');

  // 현재 페이지의 제목들을 동적으로 추출하는 함수
  const generateTocItems = () => {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return [];

    // h2, h3 태그들을 찾아서 TOC 아이템 생성
    const headings = mainContent.querySelectorAll('h1, h2, h3');
    const items = [];

    headings.forEach((heading, index) => {
      const tagName = heading.tagName.toLowerCase();
      let id = heading.id;
      
      // id가 없으면 텍스트 기반으로 생성
      if (!id) {
        id = `heading-${index}`;
        heading.id = id;
      }

      // 제목 텍스트 추출 (step-number 같은 요소 제외)
      let text = heading.textContent || heading.innerText;
      
      // step-title 클래스가 있는 경우 숫자 부분 제거
      if (heading.classList.contains('step-title')) {
        text = text.replace(/^\d+\s*/, ''); // 앞의 숫자 제거
      }

      items.push({
        id,
        text: text.trim(),
        level: tagName,
        element: heading
      });
    });

    return items;
  };

  // activeSection이 변경될 때마다 TOC 아이템 재생성
  useEffect(() => {
    // 컴포넌트가 렌더링된 후 잠시 기다린 후 TOC 생성
    const timeoutId = setTimeout(() => {
      const items = generateTocItems();
      setTocItems(items);
      
      // 첫 번째 아이템을 기본 활성 상태로 설정
      if (items.length > 0) {
        setCurrentActive(items[0].id);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [activeSection]);

  // 스크롤 위치에 따른 활성 섹션 자동 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // 헤더 높이 고려
      let currentActiveId = '';

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const element = document.getElementById(item.id);
        
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPos >= offsetTop) {
            currentActiveId = item.id;
            break;
          }
        }
      }

      if (currentActiveId && currentActiveId !== currentActive) {
        setCurrentActive(currentActiveId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems, currentActive]);

  const handleTocClick = (itemId, e) => {
    e.preventDefault();
    setCurrentActive(itemId);
    
    // 해당 섹션으로 스크롤 이동
    const element = document.getElementById(itemId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // 헤더 높이 고려
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // TOC 아이템이 없으면 렌더링하지 않음
  if (tocItems.length === 0) {
    return null;
  }

  return (
    <aside className="toc">
      <div className="toc-title">이 페이지의 목차</div>
      <ul className="toc-list">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`}
              className={`toc-link ${currentActive === item.id ? 'active' : ''} ${item.level}`}
              onClick={(e) => handleTocClick(item.id, e)}
              style={{
                // 제목 레벨에 따른 들여쓰기
                paddingLeft: item.level === 'h1' ? '12px' : 
                           item.level === 'h2' ? '20px' : 
                           item.level === 'h3' ? '28px' : '12px',
                fontSize: item.level === 'h1' ? '0.95rem' : 
                         item.level === 'h2' ? '0.9rem' : 
                         item.level === 'h3' ? '0.85rem' : '0.9rem',
                color: item.level === 'h1' ? 'var(--text-primary)' : 
                       item.level === 'h2' ? 'var(--text-secondary)' : 
                       item.level === 'h3' ? 'var(--text-muted)' : 'var(--text-secondary)'
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default TOC;