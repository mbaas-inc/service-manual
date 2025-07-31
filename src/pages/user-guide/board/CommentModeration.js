import React, { useState } from 'react';

function CommentModeration({ title = "댓글 관리", description }) {
  const [userType, setUserType] = useState('admin'); // 'admin' 또는 'moderator'
  
  // 사용자 유형별 콘텐츠 정의
  const getContentByUserType = () => {
    if (userType === 'moderator') {
      return {
        description: description || '모더레이터를 위한 댓글 검토, 신고 처리, 스팸 필터링 등의 댓글 관리 업무를 안내합니다.',
        features: [
          {
            icon: '🔍',
            title: '댓글 검토',
            description: '새로 작성된 댓글을 검토하고 승인/차단 처리합니다.',
            priority: 'high'
          },
          {
            icon: '🚫',
            title: '부적절한 댓글 차단',
            description: '욕설, 스팸, 부적절한 댓글을 신속하게 차단합니다.',
            priority: 'high'
          },
          {
            icon: '📊',
            title: '댓글 통계',
            description: '댓글 현황과 모더레이션 통계를 확인합니다.',
            priority: 'medium'
          }
        ],
        quickStart: {
          title: '모더레이터 빠른 시작',
          steps: [
            '모더레이터 권한으로 로그인',
            '신고된 댓글 목록 확인',
            '댓글 내용 검토 및 판단',
            '적절한 조치 및 사용자 안내'
          ]
        }
      };
    } else {
      return {
        description: description || '관리자를 위한 댓글 시스템 설정 등을 안내합니다.',
        features: [
          {
            icon: '⚙️',
            title: '댓글 시스템 설정',
            description: '댓글 기능의 전반적인 설정과 정책을 관리합니다.',
            buttonText: '설정하기',
            priority: 'high'
          },
          {
            icon: '👥',
            title: '사용자 관리',
            description: '댓글 작성자의 권한과 제재 상태를 관리합니다.',
            buttonText: '사용자관리',
            priority: 'medium'
          }
        ],
        quickStart: {
          title: '댓글 관리 시작하기',
          steps: [
            '관리자 권한으로 로그인',
            '댓글 정책 및 필터 설정',
            '모더레이터 권한 부여',
          ]
        }
      };
    }
  };

  const content = getContentByUserType();

  return (
    <>
      <section id="main-content">
        <h1>{title}</h1>

        <p className="main-description">
          {description || '관리자를 위한 댓글 시스템 설정 등을 안내합니다.'}
        </p>

        <div className="alert alert-info">
          <strong>💡관리자 팁 :</strong> 
           체계적인 댓글 관리 시스템으로 건전한 소통 문화를 조성하세요.
        </div>

        <h2 id="overview">개요</h2>
        <div className="card">
          <div className="card-title">주요 기능</div>
          <p>{userType === 'admin' ? '관리자를 위한' : '모더레이터를 위한'} 댓글 관리 기능에 대해 자세히 알아보실 수 있습니다.</p>
          
          <div className="grid-container">
            {content.features.map((feature, index) => (
              <div key={index} className={`card feature-card ${feature.priority}`}>
                <div className="card-title">
                  <span className="feature-icon">{feature.icon}</span>
                  {feature.title}
                  {feature.priority === 'high' && <span className="priority-badge">추천</span>}
                </div>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 id="getting-started">{content.quickStart.title}</h2>
        <div className="card">
          <div className="card-title">시작하기 전에</div>
          <p>댓글 관리 기능을 사용하기 위한 단계별 가이드입니다.</p>
          
          <div className="step-content">
            <h3 id="step-1">단계별 가이드</h3>
            <ul className="checklist">
              {content.quickStart.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* 댓글 시스템 개요 */}
        <h2 id="comment-system" className="comment-section-title">댓글 시스템 개요</h2>
        <div className="card comment-management-card">
          <div className="card-title">댓글 관리 체계 이해하기</div>
          <p>효과적인 댓글 관리를 위해 먼저 시스템 구조를 이해해보세요.</p>
          
          <div className="step-content">
            <h3>댓글 생명주기</h3>
            <div className="step-detail">
              <div className="step-content">
                <div className="step-item">
                  <div className="step-title">
                    <span className="step-number">1</span>
                    댓글 작성
                  </div>
                  <div className="step-content">
                    <p>사용자가 게시글에 댓글을 작성합니다.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-title">
                    <span className="step-number">2</span>
                    검토 단계
                  </div>
                  <div className="step-content">
                    <p>수동 검토를 거칩니다.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-title">
                    <span className="step-number">3</span>
                    게시/차단
                  </div>
                  <div className="step-content">
                    <p>최종적으로 게시되거나 차단됩니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 관리자 전용 섹션 */}
        {userType === 'admin' && (
          <>
            <h2 id="system-settings" className="comment-section-title">댓글 시스템 설정</h2>
            <div className="card comment-management-card">
              <div className="card-title">댓글 시스템 기본 설정</div>
              <p>댓글 기능의 전반적인 정책과 동작 방식을 설정합니다.</p>
              
              <div className="step-content">
                <h3>기본 정책 설정</h3>
                <div className="step-detail">
                  <div className="grid-container">
                    <div className="card">
                      <div className="card-title">🔐 권한 설정</div>
                      <ul className="checklist">
                        <li><strong>댓글 작성 권한:</strong> 회원, 비회원, 특정 등급 이상</li>
                        <li><strong>대댓글 허용:</strong> 댓글에 대한 댓글 작성 가능 여부</li>
                        <li><strong>수정/삭제 권한:</strong> 작성자 본인만 또는 시간 제한</li>
                      </ul>
                    </div>
                    
                    <div className="card">
                      <div className="card-title">📝 작성 규칙</div>
                      <ul className="checklist">
                        <li><strong>첨부 파일:</strong> 이미지, 링크 첨부 허용 여부</li>
                        <li><strong>멘션 기능:</strong> @사용자명으로 멘션 가능</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <h3>자동 필터링 설정</h3>
                <div className="step-detail">
                  <div className="alert alert-warning">
                    <strong>⚠️ 주의:</strong> 필터링 설정이 너무 엄격하면 정상적인 댓글도 차단될 수 있습니다. 단계적으로 강도를 조절하며 테스트해보세요.
                  </div>
                  
                  <ul className="checklist">
                    <li><strong>욕설 필터:</strong> 부적절한 언어 자동 감지 및 차단</li>
                    <li><strong>스팸 감지:</strong> 반복적인 내용이나 광고성 댓글 차단</li>
                    <li><strong>링크 제한:</strong> 외부 링크 포함 댓글 검토 대상으로 분류</li>
                    <li><strong>키워드 필터:</strong> 특정 키워드 포함 댓글 자동 차단</li>
                    <li><strong>이미지 검증:</strong> 부적절한 이미지 자동 감지</li>
                  </ul>
                </div> */}

                <h3>알림 및 이메일 설정</h3>
                <div className="step-detail">
                  <ul className="checklist">
                    <li><strong>실시간 알림:</strong> 새 댓글 작성 시 게시글 작성자에게 알림</li>
                    <li><strong>관리자 알림:</strong> 신고된 댓글이나 검토 필요 댓글 알림</li>
                    <li><strong>모바일 푸시:</strong> 앱 사용자 대상 댓글 알림</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* 댓글 관리 모범 사례 */}
        <h2 id="best-practices">댓글 관리 모범 사례</h2>
        <div className="card">
          <div className="card-title">건전한 댓글 문화 조성하기</div>
          
          <h3 id="community-guidelines">📋 커뮤니티 가이드라인 수립</h3>
          <div className="grid-container">
            <div className="card">
              <div className="card-title">명확한 규칙</div>
              <ul>
                <li>- 구체적이고 이해하기 쉬운 규칙 작성</li>
                <li>- 예시를 들어 설명</li>
                <li>- 정기적인 규칙 업데이트</li>
                <li>- 사용자 피드백 반영</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-title">투명한 처리</div>
              <ul>
                <li>- 차단 사유 명시</li>
                <li>- 이의제기 절차 마련</li>
                <li>- 처리 결과 공개</li>
                <li>- 일관된 기준 적용</li>
              </ul>
            </div>
          </div>

          <h3 id="positive-engagement">🌟 긍정적인 참여 유도</h3>
          <ul className="checklist">
            <li><strong>관리자 참여:</strong> 관리자가 직접 댓글을 작성하여 분위기 조성</li>
            <li><strong>건설적인 토론 장려:</strong> 서로 다른 의견 존중하는 문화 조성</li>
            <li><strong>정기적인 이벤트:</strong> 댓글 
            이벤트를 통한 활발한 참여 유도</li>
          </ul>

          <h3 id="continuous-improvement">🔄 지속적인 개선</h3>
          <ul className="checklist">
            <li><strong>정기적인 정책 검토:</strong> 월 1회 댓글 정책과 처리 현황 검토</li>
            <li><strong>사용자 만족도 조사:</strong> 댓글 시스템에 대한 사용자 의견 수집</li>
            <li><strong>교육 및 훈련:</strong> 모더레이터 대상 정기 교육 실시</li>
          </ul>

          <div className="alert alert-success">
            <strong>🎯 성공적인 댓글 관리의 핵심:</strong> 기술적인 도구도 중요하지만, 무엇보다 사용자들이 자발적으로 건전한 댓글을 작성하고 서로를 존중하는 문화를 만드는 것이 가장 중요합니다.
          </div>
        </div>

        <h2 id="troubleshooting">문제 해결</h2>
        <div className="card">
          <div className="card-title">자주 발생하는 문제</div>
          
          <div className="card">
            <div className="card-title">Q. 댓글 신고가 처리되지 않아요.</div>
            <p><strong>A.</strong> 신고 처리 대기열을 확인해보세요. 신고량이 많을 때는 처리 시간이 지연될 수 있습니다. 우선순위를 조정하거나 추가 모더레이터를 배치하는 것을 고려해보세요.</p>
          </div>
          <div className="card">
            <div className="card-title">Q. 사용자가 댓글 차단에 대해 항의해요.</div>
            <p><strong>A.</strong> 차단 사유를 명확히 설명하고, 커뮤니티 가이드라인을 안내하세요. 정당한 항의라면 이의제기 절차를 통해 재검토할 수 있음을 알려주세요.</p>
          </div>
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">도움이 더 필요하신가요?</div>
          <p>위의 내용으로 해결되지 않는 문제가 있으시면 언제든 문의해주세요.</p>
          <div className="grid-container">
            <div className="card">
              <div className="card-title">📧 이메일 문의</div>
              <p>support@mbaas.com</p>
              <p>24시간 접수 가능</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CommentModeration;