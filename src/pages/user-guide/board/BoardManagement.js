import React from 'react';

function BoardManagement({ title = "게시판 관리", description }) {
  // 사용자 매뉴얼 콘텐츠 정의
  const content = {
    description: description || '게시판을 쉽게 만들고, 수정하고, 삭제하는 방법을 단계별로 안내합니다.',
    features: [
      {
        icon: '➕',
        title: '게시판 만들기',
        description: '새로운 게시판을 생성하고 기본 설정을 완료하는 방법을 안내합니다.',
        buttonText: '만들기 시작',
        priority: 'high'
      },
      {
        icon: '✏️',
        title: '게시판 수정',
        description: '기존 게시판의 설정, 권한, 레이아웃을 수정하는 방법을 설명합니다.',
        buttonText: '수정하기',
        priority: 'high'
      },
      {
        icon: '🗑️',
        title: '게시판 삭제',
        description: '더 이상 사용하지 않는 게시판을 안전하게 삭제하는 방법을 안내합니다.',
        buttonText: '삭제하기',
        priority: 'medium'
      }
    ],
    quickStart: {
      title: '게시판 관리 시작하기',
      steps: [
        '관리자 계정으로 로그인',
        '게시판 관리 메뉴 접근',
        '새 게시판 생성하기',
        '게시판 설정 및 권한 관리'
      ]
    }
  };

  return (
    <>
      <section id="main-content">
        <h1>{title}</h1>
        
        <p className="main-description">{content.description}</p>

        <div className="alert alert-info">
          <strong>💡 사용자 안내:</strong> 
          단계별 가이드를 따라하시면 누구나 쉽게 게시판을 관리할 수 있습니다.
        </div>

        <h2 id="overview">개요</h2>
        <div className="card">
          <div className="card-title">주요 기능</div>
          <p>게시판 관리 기능에 대해 자세히 알아보실 수 있습니다.</p>
          
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
          <div className="card-title">시작하기 전에</div>
          <p>게시판 관리 기능을 사용하기 위한 단계별 가이드입니다.</p>
          
          <div className="step-content">
            <h3 id="step-1">단계별 가이드</h3>
            <ul className="checklist">
              {content.quickStart.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* 게시판 만들기 섹션 */}
        <h2 id="create-board" className="board-section-title">게시판 만들기</h2>
        <div className="card board-management-card">
          <div className="card-title">새 게시판 생성하기</div>
          <p>새로운 게시판을 생성하고 기본 설정을 완료하는 방법을 안내합니다.</p>
          
          <div className="step-content">
            <h3>1단계: 게시판 기본 정보 입력</h3>
            <div className="step-detail">
              <ul className="checklist">
                <li><strong>게시판명:</strong> 사용자에게 표시될 게시판의 제목을 입력하세요</li>
                <li><strong>게시판 설명:</strong> 게시판의 목적과 용도를 간단히 설명하세요</li>
                <li><strong>게시판 유형:</strong> 일반형, 갤러리형, Q&A형 등 게시판 형태를 선택하세요</li>
              </ul>
            </div>

            <h3>2단계: 접근 권한 설정</h3>
            <div className="step-detail">
              <ul className="checklist">
                <li><strong>읽기 권한:</strong> 게시글 조회 가능한 사용자 범위를 설정</li>
                <li><strong>쓰기 권한:</strong> 게시글 작성 가능한 사용자 범위를 설정</li>
                <li><strong>관리 권한:</strong> 게시판 관리 가능한 관리자를 지정</li>
              </ul>
            </div>

            <h3>3단계: 기능 설정</h3>
            <div className="step-detail">
              <ul className="checklist">
                <li><strong>댓글 허용:</strong> 게시글에 댓글 작성 기능을 활성화/비활성화</li>
                <li><strong>파일첨부 허용:</strong> 파일 업로드 기능을 활성화/비활성화</li>
                <li><strong>게시판 활성화:</strong> 게시판 사용 여부를 설정 (비활성화 시 접근 불가)</li>
              </ul>
            </div>
          </div>

        </div>

        {/* 게시판 수정 섹션 */}
        <h2 id="edit-board" className="board-section-title">게시판 수정</h2>
        <div className="card board-management-card">
          <div className="card-title">기존 게시판 수정하기</div>
          <p>생성된 게시판의 설정을 변경하고 관리하는 방법을 설명합니다.</p>
          
          <div className="step-content">
            <h3>기본 정보 수정</h3>
            <div className="step-detail">
              <p>게시판 목록에서 수정하고자 하는 게시판을 선택한 후 다음 항목들을 변경할 수 있습니다:</p>
              <ul className="checklist">
                <li>게시판 이름 및 설명 변경</li>
                <li>카테고리 재분류</li>
                <li>공개 범위 조정</li>
                <li>작성 및 댓글 권한 수정</li>
              </ul>
            </div>

            <h3>레이아웃 및 디자인 변경</h3>
            <div className="step-detail">
              <ul className="checklist">
                <li><strong>헤더 설정:</strong> 게시판 상단 배너 및 안내문구 설정</li>
                <li><strong>목록 형태:</strong> 리스트형, 갤러리형, 카드형 등 선택</li>
                <li><strong>컬러 테마:</strong> 게시판만의 고유한 색상 테마 적용</li>
                <li><strong>정렬 옵션:</strong> 기본 정렬 방식 설정 (최신순, 조회순, 추천순)</li>
              </ul>
            </div>

            <h3>고급 설정</h3>
            <div className="step-detail">
              <ul className="checklist">
                <li><strong>자동 태그:</strong> 특정 키워드 자동 태그 기능</li>
                <li><strong>승인 시스템:</strong> 글 작성 시 관리자 승인 필요 여부</li>
                <li><strong>스팸 필터:</strong> 자동 스팸 감지 및 차단 설정</li>
              </ul>
            </div>
          </div>

        </div>

        {/* 게시판 삭제 섹션 */}
        <h2 id="delete-board" className="board-section-title">게시판 삭제</h2>
        <div className="card board-management-card">
          <div className="card-title">게시판 안전하게 삭제하기</div>
          <p>더 이상 사용하지 않는 게시판을 안전하게 삭제하는 방법을 안내합니다.</p>
          
          <div className="alert alert-warning">
            <strong>⚠️ 주의사항:</strong> 게시판을 삭제하면 해당 게시판의 모든 게시글, 댓글, 첨부파일이 함께 삭제됩니다. 삭제 후에는 복구가 불가능하니 신중하게 결정하세요.
          </div>

          <div className="step-content">
            <h3>삭제 전 준비사항</h3>
            <div className="step-detail">
              <ul className="checklist">
                <li><strong>데이터 백업:</strong> 중요한 게시글이나 첨부파일이 있다면 미리 백업</li>
                <li><strong>사용자 안내:</strong> 게시판 사용자들에게 삭제 예정을 미리 공지</li>
                <li><strong>관련 링크 확인:</strong> 다른 페이지에서 해당 게시판으로 연결되는 링크 정리</li>
              </ul>
            </div>

            <h3>삭제 과정</h3>
            <div className="step-detail">
              <div className="delete-steps">
                <div className="delete-step">
                  <span className="step-number">1</span>
                  <div className="step-content">
                    <strong>게시판 목록에서 삭제할 게시판 선택</strong>
                    <p>관리자 페이지의 게시판 목록에서 삭제하고자 하는 게시판을 찾습니다.</p>
                  </div>
                </div>
                <div className="delete-step">
                  <span className="step-number">2</span>
                  <div className="step-content">
                    <strong>삭제 버튼 클릭</strong>
                    <p>게시판 설정 메뉴에서 '게시판 삭제' 버튼을 클릭합니다.</p>
                  </div>
                </div>
                <div className="delete-step">
                  <span className="step-number">3</span>
                  <div className="step-content">
                    <strong>확인 절차</strong>
                    <p>게시판명을 직접 타이핑하여 삭제 의사를 확인합니다.</p>
                  </div>
                </div>
                <div className="delete-step">
                  <span className="step-number">4</span>
                  <div className="step-content">
                    <strong>최종 삭제 실행</strong>
                    <p>'영구 삭제' 버튼을 클릭하여 삭제를 완료합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <h2 id="troubleshooting">문제 해결</h2>
        <div className="card">
          <div className="card-title">자주 발생하는 문제</div>
          
          <div className="card">
            <div className="card-title">Q. 게시판을 만들었는데 목록에 나타나지 않아요.</div>
            <p><strong>A.</strong> 게시판 생성 후 공개 설정이 '비공개'로 되어 있거나, 특정 사용자 그룹에만 공개로 설정되어 있을 수 있습니다. 게시판 설정에서 공개 범위를 확인해보세요.</p>
          </div>
          <div className="card">
            <div className="card-title">Q. 게시판 수정 권한이 없다고 나옵니다.</div>
            <p><strong>A.</strong> 게시판 수정은 관리자 권한이 필요합니다. 계정이 관리자 권한을 가지고 있는지 확인하거나, 슈퍼 관리자에게 권한 부여를 요청하세요.</p>
          </div>
          <div className="card">
            <div className="card-title">Q. 게시판을 삭제했는데 복구할 수 있나요?</div>
            <p><strong>A.</strong> 게시판 삭제는 영구적이며 복구가 불가능합니다. 다만, 관리자가 정기적으로 백업을 수행하고 있다면 백업 데이터를 통한 복구가 가능할 수 있으니 관리자에게 문의하세요.</p>
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

export default BoardManagement;