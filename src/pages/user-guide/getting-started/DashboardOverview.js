import React from 'react';

function DashboardOverview({ title = "대시보드 둘러보기", description }) {
  
  // 일반 사용자를 위한 콘텐츠
  const content = {
    description: description || '메시지 관리 대시보드의 모든 기능을 쉽게 이해하고 활용할 수 있도록 안내합니다.',
    features: [
      {
        icon: '📊',
        title: '발송량 통계',
        description: '일일, 주간, 월별 메시지 발송량을 한눈에 확인하세요.',
        buttonText: '통계 보기',
        priority: 'high'
      },
      {
        icon: '✅',
        title: '발송 성공률',
        description: '메시지 전송 성공률과 실패 원인을 분석해보세요.',
        buttonText: '성공률 확인',
        priority: 'high'
      },
      {
        icon: '📈',
        title: '발송 트렌드',
        description: '일별 발송 패턴과 트렌드를 그래프로 확인하세요.',
        buttonText: '트렌드 분석',
        priority: 'high'
      },
      {
        icon: '📱',
        title: '발송 유형별 분석',
        description: 'SMS, 이메일, 푸시 알림별 발송 현황을 비교해보세요.',
        buttonText: '유형별 보기',
        priority: 'medium'
      },
      {
        icon: '🕒',
        title: '최근 활동 내역',
        description: '최근 메시지 발송 내역과 상태를 실시간으로 확인하세요.',
        buttonText: '활동 내역',
        priority: 'medium'
      },
      {
        icon: '⚙️',
        title: '대시보드 설정',
        description: '나에게 맞는 대시보드 레이아웃과 표시 옵션을 설정하세요.',
        buttonText: '설정하기',
        priority: 'medium'
      }
    ],
    quickStart: {
      title: '대시보드 시작하기',
      steps: [
        '대시보드 메인 화면 둘러보기',
        '통계 그래프 읽는 방법 익히기',
        '필터와 기간 설정 사용법',
        '내보내기 및 리포트 기능 활용'
      ]
    },
    resources: [
      { title: '🎥 대시보드 사용법 동영상', description: '화면으로 보는 대시보드 활용 가이드' },
      { title: '📋 데이터 해석 가이드', description: '통계 수치와 그래프를 올바르게 읽는 방법' },
      { title: '💡 효과적인 분석 팁', description: '데이터를 활용한 메시지 최적화 전략' }
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
          대시보드의 모든 데이터는 실시간으로 업데이트되며, 필터를 활용해 원하는 기간의 데이터를 확인할 수 있습니다.
        </div>

        <h2 id="overview">대시보드 주요 영역</h2>
        <div className="card">
          <div className="card-title">메시지 관리 대시보드 구성 요소</div>
          <p>메시지 관리 대시보드의 핵심 기능들을 하나씩 살펴보세요.</p>
          
          <div className="grid-container">
            {content.features.map((feature, index) => (
              <div key={index} className={`card feature-card ${feature.priority}`}>
                <div className="card-title">
                  <span className="feature-icon">{feature.icon}</span>
                  {feature.title}
                  {feature.priority === 'high' && <span className="priority-badge">필수</span>}
                </div>
                <p>{feature.description}</p>
                <button className="btn btn-primary">{feature.buttonText}</button>
              </div>
            ))}
          </div>
        </div>

        <h2 id="getting-started">{content.quickStart.title}</h2>
        <div className="card">
          <div className="card-title">대시보드 활용 단계</div>
          <p>대시보드를 효과적으로 활용하기 위한 단계별 가이드입니다.</p>
          
          <div className="step-content">
            <h3 id="step-1">단계별 가이드</h3>
            <ul className="checklist">
              {content.quickStart.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

            <div className="screenshot">
              <p>대시보드 스크린샷 영역</p>
            </div>
        </div>

        <h2 id="dashboard-sections">대시보드 세부 영역 설명</h2>
        <div className="card">
          <div className="card-title">각 영역별 상세 기능</div>
          <p>대시보드의 각 섹션이 제공하는 정보와 활용 방법을 알아보세요.</p>
          
          <div className="accordion-content">
            <div className="card">
              <div className="card-title">📊 발송량 통계 영역</div>
              <div className="feature-details">
                <p><strong>위치:</strong> 대시보드 상단</p>
                <p><strong>기능:</strong></p>
                <ul>
                  <li>• 실시간 오늘 발송량 표시</li>
                  <li>• 주간/월간 누적 발송량</li>
                  <li>• 전일/전주/전월 대비 증감률</li>
                  <li>• 발송 유형별(SMS/이메일/푸시) 구분 표시</li>
                </ul>
                <div className="usage-tip">
                  <strong>💡 활용 팁:</strong> 증감률이 급격히 변화했다면 마케팅 캠페인이나 시스템 이슈를 확인해보세요.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">✅ 발송 성공률 영역</div>
              <div className="feature-details">
                <p><strong>위치:</strong> 대시보드 우측 상단</p>
                <p><strong>기능:</strong></p>
                <ul>
                  <li>• 전체 발송 성공률 퍼센티지</li>
                  <li>• 실패 원인별 분류 (잘못된 번호, 차단, 시스템 오류 등)</li>
                  <li>• 유형별 성공률 비교</li>
                  <li>• 성공률 추이 미니 그래프</li>
                </ul>
                <div className="usage-tip">
                  <strong>💡 활용 팁:</strong> 성공률이 90% 이하로 떨어지면 수신자 리스트 정리가 필요할 수 있습니다.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">📈 일별 발송률 그래프</div>
              <div className="feature-details">
                <p><strong>위치:</strong> 대시보드 중앙</p>
                <p><strong>기능:</strong></p>
                <ul>
                  <li>• 최근 7일간 일별 발송량 추이</li>
                  <li>• 시간대별 발송 패턴 분석</li>
                  <li>• 요일별 발송 패턴 확인</li>
                  <li>• 그래프 확대/축소 및 구간 선택</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-title">📱 발송 유형별 분석</div>
              <div className="feature-details">
                <p><strong>위치:</strong> 대시보드 좌측 하단</p>
                <p><strong>기능:</strong></p>
                <ul>
                  <li>• SMS, 이메일, 푸시 알림별 발송량 비교</li>
                  <li>• 파이 차트 또는 막대 그래프로 시각화</li>
                  <li>• 각 유형별 비용 및 효율성 지표</li>
                  <li>• 클릭률, 열람률 등 상호작용 지표</li>
                </ul>
                <div className="usage-tip">
                  <strong>💡 활용 팁:</strong> 유형별 효율성을 비교하여 예산 배분과 전략을 수립하세요.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">🕒 최근 활동 내역</div>
              <div className="feature-details">
                <p><strong>위치:</strong> 대시보드 우측 하단</p>
                <p><strong>기능:</strong></p>
                <ul>
                  <li>• 최근 24시간 발송 내역 실시간 표시</li>
                  <li>• 발송 상태별 색상 구분 (성공/실패/대기)</li>
                  <li>• 발송 시간, 수신자, 메시지 유형 정보</li>
                  <li>• 상세 로그 확인 링크</li>
                </ul>
                <div className="usage-tip">
                  <strong>💡 활용 팁:</strong> 실패한 발송 건을 클릭하여 실패 원인을 확인하고 재발송 여부를 결정하세요.
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="troubleshooting">자주 묻는 질문</h2>
        <div className="card">
          <div className="card-title">대시보드 사용 FAQ</div>
          <div className="card">
            <div className="card-title">Q. 그래프가 표시되지 않아요.</div>
            <p><strong>A.</strong> 브라우저를 새로고침하거나, 다른 브라우저에서 접속해보세요. 광고 차단 프로그램이 있다면 해제해보세요.</p>
          </div>
          <div className="card">
            <div className="card-title">Q. 모바일에서도 대시보드를 볼 수 있나요?</div>
            <p><strong>A.</strong> 네, 반응형으로 제작되어 모바일에서도 최적화된 화면으로 확인할 수 있습니다.</p>
          </div>
        </div>

        <h2 id="tips">효과적인 대시보드 활용 팁</h2>
        <div className="card">
          <div className="card-title">비즈니스 인사이트 도출 팁</div>
          
          <div className="grid-container">
            <div className="card">
              <h4>📈 데이터 분석 노하우</h4>
              <p>• 발송량 증감의 패턴을 찾아 마케팅 전략 수립<br/>
              • 성공률이 낮은 시간대나 유형을 파악하여 개선<br/>
              • 경쟁사 대비 우리의 위치 파악</p>
            </div>
            <div className="card">
              <h4>⏰ 최적 발송 시간 찾기</h4>
              <p>• 일별 그래프에서 높은 피크 시간대 확인<br/>
              • 타겟 고객층의 활동 패턴 분석<br/>
              • A/B 테스트로 최적 시간 검증</p>
            </div>
            <div className="card">
              <h4>💰 비용 효율성 분석</h4>
              <p>• 유형별 발송 비용 대비 효과 측정<br/>
              • ROI가 높은 채널에 예산 집중<br/>
              • 정기적인 성과 리뷰 및 전략 조정</p>
            </div>
            <div className="card">
              <h4>🎯 개인화 전략</h4>
              <p>• 고객 세그먼트별 반응률 차이 분석<br/>
              • 메시지 유형별 선호도 파악<br/>
              • 개인화 메시지의 성과 측정</p>
            </div>
          </div>
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">대시보드 관련 도움이 필요하신가요?</div>
          <p>대시보드 사용 중 궁금한 점이나 문제가 있으시면 언제든 문의해주세요.</p>
          
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

export default DashboardOverview;