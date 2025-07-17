import React from 'react';

function LoginSettings({ title = "로그인 설정", description }) {
  
  // 일반 사용자를 위한 콘텐츠
  const content = {
    description: description || '코딩 지식 없이도 간편하게 소셜로그인을 설정할 수 있는 단계별 가이드를 제공합니다.',
    features: [
      {
        icon: '📱',
        title: '네이버 로그인',
        description: '네이버 개발자센터에서 앱을 등록하고 로그인 기능을 활성화하세요.',
        buttonText: '네이버 설정',
        priority: 'high'
      },
      {
        icon: '💬',
        title: '카카오 로그인',
        description: '카카오 개발자센터에서 앱 키를 발급받아 로그인을 설정하세요.',
        buttonText: '카카오 설정',
        priority: 'high'
      },
      {
        icon: '🌍',
        title: '구글 로그인',
        description: 'Google Cloud Console에서 OAuth 클라이언트를 생성하여 설정하세요.',
        buttonText: '구글 설정',
        priority: 'high'
      },
      {
        icon: '📘',
        title: '페이스북 로그인',
        description: 'Facebook 개발자센터에서 앱 ID를 발급받아 로그인을 활성화하세요.',
        buttonText: '페이스북 설정',
        priority: 'medium'
      },
      {
        icon: '💚',
        title: '라인 로그인',
        description: 'LINE 개발자센터에서 채널을 생성하고 로그인 기능을 설정하세요.',
        buttonText: '라인 설정',
        priority: 'medium'
      },
      {
        icon: '🍎',
        title: '애플 로그인',
        description: 'Apple Developer에서 Sign in with Apple을 설정하세요.',
        buttonText: '애플 설정',
        priority: 'medium'
      }
    ],
    quickStart: {
      title: '소셜로그인 설정 시작하기',
      steps: [
        '원하는 소셜로그인 플랫폼 선택',
        '해당 플랫폼 개발자센터에서 앱 등록',
        'mBaaS 대시보드에서 연동 설정',
        '테스트 및 로그인 기능 활성화'
      ]
    },
    resources: [
      { title: '🎥 설정 동영상 가이드', description: '화면으로 보는 소셜로그인 설정 방법' },
      { title: '📋 체크리스트', description: '설정 완료를 위한 필수 확인 사항' },
      { title: '💡 모범 사례', description: '효과적인 소셜로그인 활용 전략' }
    ]
  };

  return (
    <>
      <section id="main-content">
        <h1>{title}</h1>
        
        {/* 동적 설명 */}
        <p>{content.description}</p>

        <div className="alert alert-info">
          <strong>💡 사용자 안내:</strong> 
          소셜로그인을 활성화하면 사용자가 별도 회원가입 없이 기존 소셜계정으로 간편하게 로그인할 수 있습니다.
        </div>

        <h2 id="overview">지원 플랫폼</h2>
        <div className="card">
          <div className="card-title">소셜로그인 플랫폼</div>
          <p>mBaaS에서 지원하는 주요 소셜로그인 플랫폼들을 확인하고 설정해보세요.</p>
          
          <div className="grid-container">
            {content.features.map((feature, index) => (
              <div key={index} className={`card feature-card ${feature.priority}`}>
                <div className="card-title">
                  <span className="feature-icon">{feature.icon}</span>
                  {feature.title}
                  {feature.priority === 'high' && <span className="priority-badge">인기</span>}
                </div>
                <p>{feature.description}</p>
                <button className="btn btn-primary">{feature.buttonText}</button>
              </div>
            ))}
          </div>
        </div>

        <h2 id="getting-started">{content.quickStart.title}</h2>
        <div className="card">
          <div className="card-title">설정 단계</div>
          <p>소셜로그인을 설정하기 위한 단계별 가이드입니다.</p>
          
          <div className="step-content">
            <h3 id="step-1">단계별 가이드</h3>
            <ul className="checklist">
              {content.quickStart.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 id="platform-guides">플랫폼별 상세 설정 가이드</h2>
        <div className="card">
          <div className="card-title">소셜로그인 플랫폼별 설정 방법</div>
          <p>각 플랫폼의 개발자센터에서 앱을 등록하고 키를 발급받는 방법을 안내합니다.</p>
          
          <div className="platform-guides">
            <div className="platform-card">
              <div className="platform-header">
                <span className="platform-icon">📱</span>
                <h4>네이버 로그인 설정</h4>
              </div>
              <div className="platform-steps">
                <ol>
                  <li><strong>네이버 개발자센터</strong> (developers.naver.com) 접속</li>
                  <li><strong>애플리케이션 등록</strong> 메뉴에서 새 앱 생성</li>
                  <li><strong>서비스 URL</strong> 및 <strong>Callback URL</strong> 설정</li>
                  <li><strong>Client ID</strong>와 <strong>Client Secret</strong> 확인</li>
                  <li>mBaaS 대시보드에서 발급받은 키 입력</li>
                </ol>
                <div className="important-note">
                  <strong>📌 중요:</strong> Callback URL은 반드시 <code>https://your-domain.com/auth/naver/callback</code> 형태로 설정하세요.
                </div>
              </div>
            </div>

            <div className="platform-card">
              <div className="platform-header">
                <span className="platform-icon">💬</span>
                <h4>카카오 로그인 설정</h4>
              </div>
              <div className="platform-steps">
                <ol>
                  <li><strong>카카오 개발자센터</strong> (developers.kakao.com) 접속</li>
                  <li><strong>내 애플리케이션</strong>에서 앱 추가</li>
                  <li><strong>카카오 로그인</strong> 활성화 및 동의항목 설정</li>
                  <li><strong>Redirect URI</strong> 등록</li>
                  <li><strong>REST API 키</strong> 복사하여 mBaaS에 입력</li>
                </ol>
                <div className="important-note">
                  <strong>📌 중요:</strong> 개인정보 수집 항목은 서비스에 필요한 최소한의 정보만 요청하세요.
                </div>
              </div>
            </div>

            <div className="platform-card">
              <div className="platform-header">
                <span className="platform-icon">🌍</span>
                <h4>구글 로그인 설정</h4>
              </div>
              <div className="platform-steps">
                <ol>
                  <li><strong>Google Cloud Console</strong> (console.cloud.google.com) 접속</li>
                  <li><strong>새 프로젝트 생성</strong> 또는 기존 프로젝트 선택</li>
                  <li><strong>Google+ API</strong> 활성화</li>
                  <li><strong>OAuth 2.0 클라이언트 ID</strong> 생성</li>
                  <li><strong>승인된 리디렉션 URI</strong> 추가</li>
                </ol>
                <div className="important-note">
                  <strong>📌 중요:</strong> 도메인 소유권 확인이 필요할 수 있습니다.
                </div>
              </div>
            </div>

            <div className="platform-card">
              <div className="platform-header">
                <span className="platform-icon">📘</span>
                <h4>페이스북 로그인 설정</h4>
              </div>
              <div className="platform-steps">
                <ol>
                  <li><strong>Facebook 개발자센터</strong> (developers.facebook.com) 접속</li>
                  <li><strong>내 앱</strong>에서 새 앱 만들기</li>
                  <li><strong>Facebook 로그인</strong> 제품 추가</li>
                  <li><strong>유효한 OAuth 리디렉션 URI</strong> 설정</li>
                  <li><strong>앱 ID</strong>와 <strong>앱 시크릿</strong> 확인</li>
                </ol>
                <div className="important-note">
                  <strong>📌 중요:</strong> 앱 검수 과정이 필요할 수 있습니다.
                </div>
              </div>
            </div>

            <div className="platform-card">
              <div className="platform-header">
                <span className="platform-icon">💚</span>
                <h4>라인 로그인 설정</h4>
              </div>
              <div className="platform-steps">
                <ol>
                  <li><strong>LINE 개발자센터</strong> (developers.line.biz) 접속</li>
                  <li><strong>새 채널 생성</strong> (LINE Login 선택)</li>
                  <li><strong>앱 타입</strong> 및 <strong>권한</strong> 설정</li>
                  <li><strong>Callback URL</strong> 등록</li>
                  <li><strong>Channel ID</strong>와 <strong>Channel Secret</strong> 확인</li>
                </ol>
              </div>
            </div>

            <div className="platform-card">
              <div className="platform-header">
                <span className="platform-icon">🍎</span>
                <h4>애플 로그인 설정</h4>
              </div>
              <div className="platform-steps">
                <ol>
                  <li><strong>Apple Developer</strong> (developer.apple.com) 접속</li>
                  <li><strong>Identifier</strong>에서 새 App ID 생성</li>
                  <li><strong>Sign in with Apple</strong> 기능 활성화</li>
                  <li><strong>Service ID</strong> 생성 및 도메인 설정</li>
                  <li><strong>Key</strong> 생성 및 다운로드</li>
                </ol>
                <div className="important-note">
                  <strong>📌 중요:</strong> iOS 앱의 경우 App Store 정책에 따라 Sign in with Apple 제공이 필수입니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="troubleshooting">자주 묻는 질문</h2>
        <div className="card">
          <div className="card-title">소셜로그인 설정 FAQ</div>
          
          <div className="card">
            <div className="card-title">Q. 소셜로그인 버튼이 작동하지 않아요.</div>
            <p><strong>A.</strong> 브라우저의 팝업 차단 설정을 확인해보세요. 또한 해당 소셜로그인이 mBaaS 대시보드에서 활성화되어 있는지 확인하세요.</p>
          </div>
          <div className="card">
            <div className="card-title">Q. 개발자센터에서 앱 등록이 안 됩니다.</div>
            <p><strong>A.</strong> 각 플랫폼별로 필수 입력 정보가 다릅니다. 사업자등록증, 개인정보처리방침 URL 등이 필요할 수 있으니 해당 플랫폼의 가이드를 확인하세요.</p>
          </div>
          <div className="card">
            <div className="card-title">Q. 콜백 URL 설정을 어떻게 해야 하나요?</div>
            <p><strong>A.</strong> mBaaS 대시보드의 로그인 설정 페이지에서 자동 생성된 콜백 URL을 복사하여 각 플랫폼의 개발자센터에 등록하세요.</p>
          </div>
          <div className="card">
            <div className="card-title">Q. 테스트는 어떻게 하나요?</div>
            <p><strong>A.</strong> mBaaS 대시보드의 '로그인 테스트' 메뉴에서 실제 로그인 플로우를 테스트할 수 있습니다. 각 플랫폼별로 테스트 계정을 만들어 확인해보세요.</p>
          </div>
          <div className="card">
            <div className="card-title">Q. 여러 소셜로그인을 동시에 사용할 수 있나요?</div>
            <p><strong>A.</strong> 네, 모든 플랫폼을 동시에 활성화할 수 있습니다. 사용자는 원하는 플랫폼을 선택하여 로그인할 수 있어요.</p>
          </div>
          <div className="card">
            <div className="card-title">Q. 사용자 정보는 어떻게 관리되나요?</div>
            <p><strong>A.</strong> 소셜로그인으로 가입한 사용자 정보는 mBaaS 회원 관리 시스템에서 통합 관리됩니다. 개인정보처리방침에 따라 안전하게 보관됩니다.</p>
          </div>
        </div>

        <h2 id="best-practices">모범 사례</h2>
        <div className="card">
          <div className="card-title">소셜로그인 구현 시 고려사항</div>
          
          <div className="best-practices-content">
            <div className="practice-item">
              <h4>🔐 보안 강화</h4>
              <p>• <strong>HTTPS 필수:</strong> 모든 인증 관련 통신은 HTTPS로 진행<br/>
              • <strong>정기 점검:</strong> 각 플랫폼의 보안 정책 변경사항 확인<br/>
              • <strong>권한 최소화:</strong> 필요한 최소한의 권한만 요청</p>
            </div>
            <div className="practice-item">
              <h4>👥 사용자 경험</h4>
              <p>• <strong>명확한 안내:</strong> 로그인 과정에서 사용자에게 명확한 안내 제공<br/>
              • <strong>오류 처리:</strong> 로그인 실패시 이해하기 쉬운 오류 메시지<br/>
              • <strong>다양한 선택지:</strong> 여러 소셜로그인 옵션 제공</p>
            </div>
            <div className="practice-item">
              <h4>📊 개인정보 처리</h4>
              <p>• <strong>최소 수집:</strong> 서비스에 필요한 최소한의 정보만 수집<br/>
              • <strong>투명한 고지:</strong> 수집하는 정보와 용도를 명확히 안내<br/>
              • <strong>안전한 관리:</strong> 수집된 정보의 안전한 저장 및 관리</p>
            </div>
            <div className="practice-item">
              <h4>🔄 운영 관리</h4>
              <p>• <strong>정기 점검:</strong> 각 플랫폼의 정책 변경사항 모니터링<br/>
              • <strong>사용 통계:</strong> 소셜로그인 이용 현황 분석<br/>
              • <strong>지속적 개선:</strong> 사용자 피드백 반영하여 개선</p>
            </div>
            <div className="practice-item">
              <h4>🎯 효과적인 활용</h4>
              <p>• <strong>회원가입 간소화:</strong> 복잡한 회원가입 과정 대신 간편 로그인 제공<br/>
              • <strong>사용자 유입 증대:</strong> 로그인 장벽을 낮춰 더 많은 사용자 유치<br/>
              • <strong>개인화 서비스:</strong> 소셜계정 정보를 활용한 맞춤 서비스 제공</p>
            </div>
            <div className="practice-item">
              <h4>📱 플랫폼별 특성</h4>
              <p>• <strong>네이버/카카오:</strong> 한국 사용자에게 친숙하고 높은 이용률<br/>
              • <strong>구글:</strong> 글로벌 서비스 시 필수, 안드로이드 사용자 편의<br/>
              • <strong>애플:</strong> iOS 앱 출시시 필수, 프라이버시 중시 사용자</p>
            </div>
          </div>
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">소셜로그인 설정 도움이 필요하신가요?</div>
          <p>설정 과정에서 궁금한 점이나 문제가 있으시면 언제든 문의해주세요.</p>
          
          <div className="grid-container">
            <div className="card">
              <div className="card-title">📧 이메일 문의</div>
              <p>support@mbaas.com</p>
              <p>대시보드 관련 모든 문의</p>
            </div>
            <div className="card">
              <div className="card-title">💬 1:1 문의하기</div>
              <p>1:1 문의하기를 남겨 질의해주세요.</p>
              <p>문의하러 가기</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginSettings;