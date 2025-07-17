import React, { useState } from 'react';

function DefaultPage({ title, description }) {
  const [userType, setUserType] = useState('user'); // 'user' 또는 'developer'

  // 사용자 유형별 콘텐츠 정의
  const getContentByUserType = () => {
    if (userType === 'developer') {
      return {
        description: description || '개발자를 위한 기술 문서와 API 가이드를 제공합니다.',
        features: [
          {
            icon: '🔧',
            title: 'API 문서',
            description: 'RESTful API 엔드포인트와 사용법을 확인하세요.',
            buttonText: 'API 보기',
            priority: 'high'
          },
          {
            icon: '📚',
            title: 'SDK 가이드',
            description: '다양한 언어별 SDK 설치 및 사용법을 안내합니다.',
            buttonText: 'SDK 다운로드',
            priority: 'high'
          },
          {
            icon: '🔗',
            title: '연동 가이드',
            description: '외부 서비스와의 연동 방법을 상세히 설명합니다.',
            buttonText: '연동하기',
            priority: 'medium'
          }
        ],
        quickStart: {
          title: '개발자 빠른 시작',
          steps: [
            '개발 환경 설정',
            'API 키 발급 받기',
            'SDK 설치 및 초기화',
            'Hello World 예제 실행'
          ]
        },
        resources: [
          { title: '📖 기술 문서', description: '상세한 기술 스펙과 구현 가이드' },
          { title: '💻 코드 예제', description: '실제 사용 가능한 샘플 코드' },
          { title: '🐛 디버깅 가이드', description: '일반적인 오류와 해결방법' }
        ]
      };
    } else {
      return {
        description: description || '비개발자도 쉽게 사용할 수 있는 단계별 가이드를 제공합니다.',
        features: [
          {
            icon: '📱',
            title: '앱 만들기',
            description: '코딩 없이도 앱을 만들 수 있는 방법을 안내합니다.',
            buttonText: '시작하기',
            priority: 'high'
          },
          {
            icon: '⚙️',
            title: '설정 관리',
            description: '대시보드에서 설정을 변경하는 방법을 알려드립니다.',
            buttonText: '설정하기',
            priority: 'high'
          },
          {
            icon: '📊',
            title: '데이터 분석',
            description: '사용 현황과 통계를 확인하는 방법을 설명합니다.',
            buttonText: '분석보기',
            priority: 'medium'
          }
        ],
        quickStart: {
          title: '사용자 빠른 시작',
          steps: [
            '계정 생성 및 로그인',
            '프로젝트 만들기',
            '기본 설정 완료',
            '첫 번째 기능 사용해보기'
          ]
        },
        resources: [
          { title: '🎥 동영상 가이드', description: '화면으로 보는 단계별 사용법' },
          { title: '❓ FAQ', description: '자주 묻는 질문과 답변' },
          { title: '💬 커뮤니티', description: '다른 사용자들과 정보 공유' }
        ]
      };
    }
  };

  const content = getContentByUserType();

  return (
    <>
      <section id="main-content">
        <h1>{title}</h1>
        
        {/* 🔥 사용자 유형 선택 버튼 */}
        <div className="user-type-selector">
          <div className="selector-header">
            <h3>어떤 유형의 사용자이신가요?</h3>
            <p>선택하신 유형에 맞는 맞춤형 가이드를 제공해드립니다.</p>
          </div>
          <div className="type-buttons">
            <button 
              className={`type-btn ${userType === 'user' ? 'active' : ''}`}
              onClick={() => setUserType('user')}
            >
              <div className="type-icon">👤</div>
              <div className="type-info">
                <div className="type-title">일반 사용자</div>
                <div className="type-desc">비개발자, 비즈니스 사용자</div>
              </div>
            </button>
            
            <button 
              className={`type-btn ${userType === 'developer' ? 'active' : ''}`}
              onClick={() => setUserType('developer')}
            >
              <div className="type-icon">👨‍💻</div>
              <div className="type-info">
                <div className="type-title">개발자</div>
                <div className="type-desc">개발자, 기술 담당자</div>
              </div>
            </button>
          </div>
        </div>

        {/* 동적 설명 */}
        <p className="main-description">{content.description}</p>

        <div className="alert alert-info">
          <strong>💡 {userType === 'developer' ? '개발자 팁' : '사용자 안내'}:</strong> 
          {userType === 'developer' 
            ? '기술 문서와 API 레퍼런스를 통해 빠르게 개발을 시작하세요.'
            : '단계별 가이드를 따라하시면 누구나 쉽게 사용할 수 있습니다.'
          }
        </div>

        <h2 id="overview">개요</h2>
        <div className="card">
          <div className="card-title">주요 기능</div>
          <p>{userType === 'developer' ? '개발자를 위한' : '사용자를 위한'} {title} 기능에 대해 자세히 알아보실 수 있습니다.</p>
          
          <div className="grid-container">
            {content.features.map((feature, index) => (
              <div key={index} className={`card feature-card ${feature.priority}`}>
                <div className="card-title">
                  <span className="feature-icon">{feature.icon}</span>
                  {feature.title}
                  {feature.priority === 'high' && <span className="priority-badge">추천</span>}
                </div>
                <p>{feature.description}</p>
                <button className="btn btn-primary">{feature.buttonText}</button>
              </div>
            ))}
          </div>
        </div>

        <h2 id="getting-started">{content.quickStart.title}</h2>
        <div className="card">
          <div className="card-title">
            {userType === 'developer' ? '개발 환경 설정' : '시작하기 전에'}
          </div>
          <p>{title} 기능을 사용하기 위한 단계별 가이드입니다.</p>
          
          <div className="step-content">
            <h3 id="step-1">단계별 가이드</h3>
            <ul className="checklist">
              {content.quickStart.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

          {userType === 'developer' && (
            <div className="code-example">
              <h4>🔧 코드 예제</h4>
              <div className="code-block">
                <pre><code>{`// ${title} 기본 사용 예제
import { mBaasSDK } from '@mbaas/sdk';

const client = new mBaasSDK({
  apiKey: 'your-api-key',
  projectId: 'your-project-id'
});

// 기본 기능 사용
await client.${title.toLowerCase().replace(/\s+/g, '')}.initialize();`}</code></pre>
              </div>
            </div>
          )}
        </div>

        <h2 id="resources">유용한 자료</h2>
        <div className="card">
          <div className="card-title">
            {userType === 'developer' ? '개발 리소스' : '학습 자료'}
          </div>
          <p>더 효과적으로 활용할 수 있는 자료들을 모았습니다.</p>
          
          <div className="resources-grid">
            {content.resources.map((resource, index) => (
              <div key={index} className="resource-item">
                <div className="resource-title">{resource.title}</div>
                <div className="resource-desc">{resource.description}</div>
                <button className="btn btn-secondary">보러가기</button>
              </div>
            ))}
          </div>
        </div>

        <h2 id="troubleshooting">문제 해결</h2>
        <div className="card">
          <div className="card-title">
            {userType === 'developer' ? '개발 관련 문제' : '자주 발생하는 문제'}
          </div>
          
          {userType === 'developer' ? (
            <>
              <div className="card">
                <div className="card-title">Q. API 호출이 실패합니다.</div>
                <p><strong>A.</strong> API 키와 엔드포인트 URL이 올바른지 확인하세요. 요청 헤더에 Content-Type이 올바르게 설정되어 있는지도 확인해보세요.</p>
              </div>
              <div className="card">
                <div className="card-title">Q. SDK 초기화 오류가 발생합니다.</div>
                <p><strong>A.</strong> 프로젝트 ID와 API 키가 올바른지 확인하고, 최신 버전의 SDK를 사용하고 있는지 확인하세요.</p>
              </div>
              <div className="card">
                <div className="card-title">Q. 인증 토큰이 만료됩니다.</div>
                <p><strong>A.</strong> refresh token을 사용하여 자동으로 토큰을 갱신하도록 구현하거나, 토큰 만료 시점을 체크하여 재인증하세요.</p>
              </div>
            </>
          ) : (
            <>
              <div className="card">
                <div className="card-title">Q. 기능이 정상적으로 작동하지 않아요.</div>
                <p><strong>A.</strong> 먼저 기본 설정이 올바른지 확인해보세요. 설정에 문제가 없다면 브라우저 새로고침 후 다시 시도해보세요.</p>
              </div>
              <div className="card">
                <div className="card-title">Q. 권한 오류가 발생합니다.</div>
                <p><strong>A.</strong> 관리자 권한이 필요한 기능일 수 있습니다. 계정 권한을 확인하거나 관리자에게 문의하세요.</p>
              </div>
              <div className="card">
                <div className="card-title">Q. 데이터가 표시되지 않습니다.</div>
                <p><strong>A.</strong> 데이터 로딩에 시간이 걸릴 수 있습니다. 잠시 후 다시 확인해보시거나, 필터 설정을 확인해보세요.</p>
              </div>
            </>
          )}
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">도움이 더 필요하신가요?</div>
          <p>위의 내용으로 해결되지 않는 문제가 있으시면 언제든 문의해주세요.</p>
          
          <div className="grid-container">
            {userType === 'developer' ? (
              <>
                <div className="card">
                  <div className="card-title">🔧 기술 지원</div>
                  <p>dev-support@mbaas.com</p>
                  <p>개발 관련 기술 문의</p>
                </div>
                <div className="card">
                  <div className="card-title">📚 개발자 포럼</div>
                  <p>developers.mbaas.com</p>
                  <p>개발자 커뮤니티 참여</p>
                </div>
                <div className="card">
                  <div className="card-title">🐛 버그 리포트</div>
                  <p>GitHub Issues</p>
                  <p>버그 신고 및 기능 요청</p>
                </div>
              </>
            ) : (
              <>
                <div className="card">
                  <div className="card-title">📞 전화 문의</div>
                  <p>02-1234-5678</p>
                  <p>평일 9:00 - 18:00</p>
                </div>
                <div className="card">
                  <div className="card-title">📧 이메일 문의</div>
                  <p>support@mbaas.com</p>
                  <p>24시간 접수 가능</p>
                </div>
                <div className="card">
                  <div className="card-title">💬 채팅 문의</div>
                  <p>실시간 채팅 지원</p>
                  <p>평일 9:00 - 18:00</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default DefaultPage;