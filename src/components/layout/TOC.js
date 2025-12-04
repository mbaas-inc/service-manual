import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function TOC({ activeSection, onSetActive, pageType = 'user-guide' }) {
  const { t } = useTranslation();
  const [tocItems, setTocItems] = useState([]);
  const [currentActive, setCurrentActive] = useState('');

  // 개발자 가이드용 TOC 생성 (card-title 포함)
  const generateDeveloperTocItems = () => {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return [];

    const items = [];
    let headingIndex = 0;

    // h1, h2, h3와 .card-title 모두 찾기
    const allElements = [
      ...mainContent.querySelectorAll('h1, h2, h3'),
      ...mainContent.querySelectorAll('.card-title')
    ];

    // DOM 순서대로 정렬
    const sortedElements = Array.from(allElements).sort((a, b) => {
      const position = a.compareDocumentPosition(b);
      return position & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });

    sortedElements.forEach((element) => {
      let id = element.id;
      let text = element.textContent || element.innerText;
      let level = 'h2'; // card-title의 기본 레벨

      // ID가 없으면 생성
      if (!id) {
        if (element.classList.contains('card-title')) {
          // card-title의 경우 텍스트 기반으로 ID 생성
          const cleanText = text.replace(/[^\w\s가-힣]/g, '').replace(/\s+/g, '-').toLowerCase();
          id = `card-${cleanText}-${headingIndex}`;
        } else {
          id = `heading-${headingIndex}`;
        }
        element.id = id;
        headingIndex++;
      }

      // 텍스트 정리
      if (element.classList.contains('step-title')) {
        text = text.replace(/^\d+\s*/, '');
      }
      
      // 이모지나 아이콘 텍스트 제거
      text = text.replace(/^[🚀📱⚙️📊👥💳📋📧💻🌐🔑⚠️✨🛡️⚡🔧]+\s*/, '');

      // 태그명에 따른 레벨 설정
      if (element.tagName) {
        level = element.tagName.toLowerCase();
      } else if (element.classList.contains('card-title')) {
        level = 'h2'; // card-title을 h2 레벨로 처리
      }

      items.push({
        id,
        text: text.trim(),
        level,
        element,
        isCardTitle: element.classList.contains('card-title')
      });
    });

    return items;
  };

  // 사용자 가이드용 TOC 생성 (기존 방식)
  const generateUserGuideTocItems = () => {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return [];

    const headings = mainContent.querySelectorAll('h1, h2, h3');
    const items = [];

    headings.forEach((heading, index) => {
      const tagName = heading.tagName.toLowerCase();
      let id = heading.id;
      
      if (!id) {
        id = `heading-${index}`;
        heading.id = id;
      }

      let text = heading.textContent || heading.innerText;
      
      if (heading.classList.contains('step-title')) {
        text = text.replace(/^\d+\s*/, '');
      }

      items.push({
        id,
        text: text.trim(),
        level: tagName,
        element: heading,
        isCardTitle: false
      });
    });

    return items;
  };

  // TOC 아이템 생성
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let items = [];
      
      if (pageType === 'developer' || pageType === 'api') {
        items = generateDeveloperTocItems();
      } else {
        items = generateUserGuideTocItems();
      }
      
      setTocItems(items);
      
      if (items.length > 0) {
        setCurrentActive(items[0].id);
      }
    }, 200); // 시간을 조금 더 늘려서 DOM이 완전히 렌더링될 때까지 대기

    return () => clearTimeout(timeoutId);
  }, [activeSection, pageType]);

  // 스크롤 위치에 따른 활성 섹션 자동 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // 헤더 높이 조정
      let currentActiveId = '';

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const element = document.getElementById(item.id);
        
        if (element) {
          // 실제 화면상의 위치를 getBoundingClientRect로 정확히 계산
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPos >= elementTop - 80) { // 여유분 조정
            currentActiveId = item.id;
            break;
          }
        }
      }

      if (currentActiveId && currentActiveId !== currentActive) {
        setCurrentActive(currentActiveId);
      }
    };

    // 초기 로드 시에도 실행
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems, currentActive]);

  const handleTocClick = (itemId, e) => {
    e.preventDefault();
    setCurrentActive(itemId);
    
    const element = document.getElementById(itemId);
    if (element) {
      // getBoundingClientRect로 정확한 위치 계산
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      
      window.scrollTo({
        top: elementTop - 80, // 헤더 높이 + 여유분
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
      <div className="toc-title">
        {pageType === 'developer' || pageType === 'api' ? t('toc.apiDocTitle') : t('toc.pageTitle')}
      </div>
      <ul className="toc-list">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`}
              className={`toc-link ${currentActive === item.id ? 'active' : ''} ${item.level} ${item.isCardTitle ? 'card-title-link' : ''}`}
              onClick={(e) => handleTocClick(item.id, e)}
              style={{
                // 제목 레벨에 따른 들여쓰기
                paddingLeft: item.level === 'h1' ? '12px' : 
                           item.level === 'h2' || item.isCardTitle ? '16px' : 
                           item.level === 'h3' ? '24px' : '16px',
                fontSize: item.level === 'h1' ? '0.95rem' : 
                         item.level === 'h2' || item.isCardTitle ? '0.9rem' : 
                         item.level === 'h3' ? '0.85rem' : '0.9rem',
                fontWeight: item.isCardTitle ? '500' : '500',
                color: item.level === 'h1' ? 'var(--text-primary)' : 
                       item.level === 'h2' || item.isCardTitle ? 'var(--text-secondary)' : 
                       item.level === 'h3' ? 'var(--text-muted)' : 'var(--text-secondary)',
                borderLeft: currentActive === item.id ? '3px solid var(--primary-color)' : 'none',
                backgroundColor: currentActive === item.id ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                marginLeft: currentActive === item.id ? '-3px' : '0',
                transition: 'all 0.2s ease',
                // 개발자 가이드에서는 링크 스타일 제거
                ...(pageType === 'developer' || pageType === 'api' ? {
                  textDecoration: 'none',
                  display: 'block',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  margin: '1px 0',
                  padding: '4px 16px'
                } : {}),
                // card-title 링크에 특별한 스타일 (사용자 가이드만)
                ...(item.isCardTitle && pageType !== 'developer' && pageType !== 'api' && {
                  borderRadius: '4px',
                  margin: '2px 0',
                  padding: '6px 16px',
                })
              }}
            >
              {/* card-title의 경우 아이콘 추가 (개발자 가이드 제외) */}
              {item.isCardTitle && pageType !== 'developer' && pageType !== 'api' && (
                <span style={{ marginRight: '6px', opacity: 0.7 }}>📋</span>
              )}
              {item.text}
            </a>
          </li>
        ))}
      </ul>

    </aside>
  );
}

export default TOC;