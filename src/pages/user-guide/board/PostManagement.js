import React from 'react';

function PostManagement({ title = "게시글 관리", description }) {

  return (
    <>
      <section id="main-content">
        <h1>{title}</h1>
        
        <p className="main-description">
          {description || '게시글의 생성, 수정, 삭제부터 신고 처리까지 효율적으로 관리하는 방법을 안내합니다. 필터 기능을 활용하여 원하는 게시글을 빠르게 찾고, 체계적인 관리로 건전한 커뮤니티를 만들어보세요.'}
        </p>

        <div className="alert alert-info">
          <strong>💡 관리자 팁:</strong> 체계적인 게시글 관리로 건전한 커뮤니티를 만들어보세요. 정기적인 모니터링과 신속한 신고 처리가 핵심입니다.
        </div>

        <h2 id="overview">개요</h2>
        <div className="card">
          <div className="card-title">게시글 관리 시스템</div>
          <p>게시글의 생성부터 삭제까지 모든 과정을 효율적으로 관리할 수 있는 통합 관리 시스템입니다.</p>
          
          <div className="grid-container">
            <div className="card feature-card high">
              <div className="card-title">
                <span className="feature-icon">📋</span>
                게시글 목록 관리
                <span className="priority-badge">필수</span>
              </div>
              <p>게시글 검색, 필터링, 일괄 작업 등 효율적인 목록 관리 기능</p>
            </div>
            
            <div className="card feature-card high">
              <div className="card-title">
                <span className="feature-icon">🔍</span>
                필터 및 검색
                <span className="priority-badge">필수</span>
              </div>
              <p>날짜, 게시판, 상태별 필터링과 키워드 검색으로 원하는 게시글 빠르게 찾기</p>
            </div>
            
            <div className="card feature-card medium">
              <div className="card-title">
                <span className="feature-icon">🚨</span>
                신고 처리
              </div>
              <p>사용자 신고 접수, 검토 및 조치 처리를 통한 건전한 커뮤니티 관리</p>
            </div>
            
            <div className="card feature-card medium">
              <div className="card-title">
                <span className="feature-icon">✏️</span>
                게시글 편집
              </div>
              <p>게시글 추가, 수정, 삭제 및 상태 변경 등 포괄적인 편집 기능</p>
            </div>
          </div>
        </div>

        <h2 id="post-list">게시글 목록 관리</h2>
        <div className="card">
          <div className="card-title">📋 게시글 목록 및 필터 기능</div>
          <p>등록된 모든 게시글을 효율적으로 조회하고 관리할 수 있는 종합적인 관리 도구입니다.</p>
          
          <h3 id="post-list-overview">목록에서 확인할 수 있는 정보</h3>
          <div className="grid-container">
            <div className="card">
              <div className="card-title">📄 게시글 기본 정보</div>
              <ul className="checklist">
                <li><strong>제목:</strong> 게시글의 제목 (클릭 시 상세 보기)</li>
                <li><strong>작성자:</strong> 게시글을 작성한 사용자 정보</li>
                <li><strong>게시판:</strong> 게시글이 속한 게시판 분류</li>
                <li><strong>작성일:</strong> 게시글이 최초 작성된 날짜와 시간</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-title">📊 게시글 통계</div>
              <ul className="checklist">
                <li><strong>조회수:</strong> 게시글이 조회된 총 횟수</li>
                <li><strong>댓글:</strong> 게시글에 달린 댓글의 개수</li>
                <li><strong>신고:</strong> 해당 게시글에 대한 신고 접수 건수</li>
                <li><strong>상태:</strong> 게시글의 현재 상태 (정상/신고됨/숨김)</li>
              </ul>
            </div>
          </div>

          <h3 id="filter-options">필터 옵션</h3>
          <div className="step-content">
            <div className="card">
              <div className="card-title">🔍 검색 및 필터 설정</div>
              
              <div className="filter-options">
                <div className="filter-group">
                  <strong>📅 날짜 필터</strong>
                  <ul>
                    <li><strong>시작일:</strong> 검색할 게시글의 시작 날짜 설정</li>
                    <li><strong>종료일:</strong> 검색할 게시글의 종료 날짜 설정</li>
                    <li><strong>빠른 설정:</strong> 오늘, 이번 주, 이번 달, 지난 3개월 등</li>
                  </ul>
                </div>

                <div className="filter-group">
                  <strong>📋 게시판 필터</strong>
                  <ul>
                    <li><strong>전체 게시판:</strong> 모든 게시판의 게시글 조회</li>
                    <li><strong>특정 게시판:</strong> 선택한 게시판의 게시글만 조회</li>
                  </ul>
                </div>

                <div className="filter-group">
                  <strong>🏷️ 상태 필터</strong>
                  <ul>
                    <li><strong>정상:</strong> 정상적으로 게시된 상태의 게시글</li>
                    <li><strong>신고됨:</strong> 사용자 신고가 접수된 게시글</li>
                    <li><strong>숨김:</strong> 관리자에 의해 숨김 처리된 게시글</li>
                  </ul>
                </div>

                <div className="filter-group">
                  <strong>🔎 추가 검색 옵션</strong>
                  <ul>
                    <li><strong>키워드 검색:</strong> 제목, 내용, 작성자명으로 검색</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="alert alert-info">
              <strong>💡 필터 활용 팁:</strong>
              <ul>
                <li>- 여러 필터를 조합하여 더 정확한 검색 결과를 얻을 수 있습니다</li>
                <li>- 자주 사용하는 필터 조합은 '즐겨찾기'로 저장하여 재사용하세요</li>
                <li>- 대량의 데이터 조회 시에는 날짜 범위를 제한하여 성능을 향상시키세요</li>
                <li>- 검색 결과를 CSV 또는 Excel 파일로 내보낼 수 있습니다</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 게시글 관리 작업 섹션 */}
        <h2 id="post-actions">게시글 관리 작업</h2>
        <div className="card">
          <div className="card-title">⚡ 게시글 추가, 수정, 삭제 및 관리</div>
          <p>게시글에 대한 모든 관리 작업을 효율적으로 수행할 수 있습니다.</p>
          
          <div className="grid-container">
            <div className="card">
              <div className="card-title">➕ 게시글 추가</div>
              <ul className="checklist">
                <li><strong>신규 작성:</strong> 관리자가 직접 새로운 게시글 작성</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-title">✏️ 게시글 수정</div>
              <ul className="checklist">
                <li><strong>내용 편집:</strong> 제목, 본문, 이미지 등 내용 수정</li>
                <li><strong>상태 변경:</strong> 게시글의 공개/비공개 상태 변경</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-title">🗑️ 게시글 삭제</div>
              <ul className="checklist">
                <li><strong>단일 삭제:</strong> 선택한 게시글 개별 삭제</li>
                <li><strong>일괄 삭제:</strong> 여러 게시글 동시 삭제</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-title">🔧 상태 관리</div>
              <ul className="checklist">
                <li><strong>숨김 처리:</strong> 부적절한 게시글을 사용자에게 숨김</li>
                <li><strong>고정 설정:</strong> 중요한 공지사항을 상단에 고정</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 신고 처리 섹션 */}
        <h2 id="report-management">신고 처리 관리</h2>
        <div className="card">
          <div className="card-title">🚨 게시글 신고 처리 시스템</div>
          <p>사용자가 신고한 게시글을 체계적으로 검토하고 적절한 조치를 취하는 방법을 안내합니다.</p>
          
          <h3 id="report-process">신고 처리 프로세스</h3>
          <div className="step-content">
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">1</span>
                신고 접수 및 분류
              </div>
              <div className="card">
                <div className="card-title">신고 접수 현황</div>
                <ul className="checklist">
                  <li><strong>신고 유형:</strong> 스팸, 욕설, 부적절한 내용, 저작권 침해 등</li>
                  <li><strong>신고자 정보:</strong> 신고한 사용자 정보 및 신고 사유</li>
                </ul>
              </div>
            </div>

            <div className="step-item">
              <div className="step-title">
                <span className="step-number">2</span>
                신고 내용 검토
              </div>
              <div className="card">
                <div className="card-title">검토 기준 및 방법</div>
                <ul className="checklist">
                  <li><strong>커뮤니티 가이드라인:</strong> 기존 정책 및 규정 준수 여부 확인</li>
                  <li><strong>증거 수집:</strong> 스크린샷, 로그 등 관련 증거 수집</li>
                </ul>
              </div>
            </div>

            <div className="step-item">
              <div className="step-title">
                <span className="step-number">3</span>
                조치 결정 및 실행
              </div>
              <div className="card">
                <div className="card-title">가능한 조치 방안</div>
                <div className="grid-container">
                  <div className="card">
                    <div className="card-title">✅ 신고 기각</div>
                    <ul>
                      <li>- 가이드라인 위반 사항 없음</li>
                      <li>- 정당한 의견 표현으로 판단</li>
                      <li>- 신고자에게 기각 사유 안내</li>
                    </ul>
                  </div>
                  
                  <div className="card">
                    <div className="card-title">⚠️ 경고 조치</div>
                    <ul>
                      <li>- 경미한 가이드라인 위반</li>
                      <li>- 작성자에게 경고 및 수정 요청</li>
                      <li>- 추가 위반 시 강화 조치 예고</li>
                    </ul>
                  </div>
                  
                  <div className="card">
                    <div className="card-title">🔒 게시글 숨김</div>
                    <ul>
                      <li>- 부적절한 내용으로 판단</li>
                      <li>- 사용자에게 노출 차단</li>
                      <li>- 작성자에게 숨김 사유 통보</li>
                    </ul>
                  </div>
                  
                  <div className="card">
                    <div className="card-title">🗑️ 게시글 삭제</div>
                    <ul>
                      <li>- 심각한 가이드라인 위반</li>
                      <li>- 법적 문제 소지 있는 내용</li>
                      <li>- 완전 삭제 및 증거 보관</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-item">
              <div className="step-title">
                <span className="step-number">4</span>
                결과 통보 및 기록
              </div>
              <div className="card">
                <div className="card-title">사후 관리</div>
                <ul className="checklist">
                  <li><strong>신고자 통보:</strong> 신고 처리 결과를 신고자에게 안내</li>
                  <li><strong>작성자 통보:</strong> 조치 내용과 사유를 작성자에게 설명</li>
                  <li><strong>처리 기록:</strong> 모든 신고 처리 과정을 시스템에 기록</li>
                  <li><strong>통계 관리:</strong> 신고 유형별 통계 및 트렌드 분석</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="alert alert-warning">
            <strong>⚠️ 신고 처리 시 주의사항:</strong>
            <ul>
              <li>- 모든 신고는 공정하고 일관된 기준으로 처리해야 합니다</li>
              <li>- 개인적인 감정이나 편견을 배제하고 객관적으로 판단하세요</li>
              <li>- 법적 쟁점이 있는 경우 반드시 전문가와 상의하세요</li>
              <li>- 처리 과정과 결과는 투명하게 기록하고 보관하세요</li>
            </ul>
          </div>
        </div>

        {/* 게시글 목록 화면 예제 */}
        <h2 id="screen-example">게시글 목록 화면 예제</h2>
        <div className="card">
          <div className="card-title">📱 실제 관리 화면 구성</div>
          <p>게시글 관리 페이지에서 실제로 보게 될 화면 구성과 기능들을 미리 확인해보세요.</p>
          
          <div className="table-example">
            <h4>게시글 목록 테이블 예제</h4>
            <table className="api-table">
              <thead>
                <tr>
                  <th>선택</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>게시판</th>
                  <th>작성일</th>
                  <th>조회수</th>
                  <th>댓글</th>
                  <th>신고</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>☐</td>
                  <td><strong>모바일 앱 업데이트 안내</strong></td>
                  <td>관리자</td>
                  <td>공지사항</td>
                  <td>2024-01-15<br/>14:30</td>
                  <td>1,245</td>
                  <td>23</td>
                  <td>0</td>
                  <td><span className="status-success">정상</span></td>
                </tr>
                <tr>
                  <td>☐</td>
                  <td>개발자 API 사용법 질문</td>
                  <td>user123</td>
                  <td>Q&A</td>
                  <td>2024-01-14<br/>16:22</td>
                  <td>89</td>
                  <td>7</td>
                  <td><span style={{color: '#dc2626', fontWeight: '600'}}>2</span></td>
                  <td><span className="status-failed">신고됨</span></td>
                </tr>
                <tr>
                  <td>☐</td>
                  <td>커뮤니티 이벤트 참여 후기</td>
                  <td>eventlover</td>
                  <td>자유게시판</td>
                  <td>2024-01-13<br/>09:15</td>
                  <td>456</td>
                  <td>15</td>
                  <td>0</td>
                  <td><span className="status-success">정상</span></td>
                </tr>
                <tr>
                  <td>☐</td>
                  <td style={{color: '#6b7280', textDecoration: 'line-through'}}>부적절한 광고성 게시글</td>
                  <td>spammer01</td>
                  <td>자유게시판</td>
                  <td>2024-01-12<br/>22:48</td>
                  <td>12</td>
                  <td>0</td>
                  <td>5</td>
                  <td><span style={{backgroundColor: '#fee2e2', color: '#dc2626', padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600'}}>숨김</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="alert alert-info">
            <strong>💡 테이블 사용 팁:</strong>
            <ul>
              <li>- 컬럼 헤더를 클릭하면 해당 항목으로 정렬할 수 있습니다</li>
              <li>- 체크박스를 이용해 여러 게시글을 선택하여 일괄 작업이 가능합니다</li>
              <li>- 상태별 색상 구분으로 한눈에 게시글 상태를 파악할 수 있습니다</li>
              <li>- 페이지네이션을 통해 많은 게시글을 효율적으로 탐색할 수 있습니다</li>
            </ul>
          </div>
        </div>

        {/* 실전 사용 가이드 섹션 */}
        <h2 id="practical-guide">실전 사용 가이드</h2>
        <div className="card">
          <div className="card-title">🎯 실무에서 자주 사용하는 작업들</div>
          <p>게시글 관리에서 가장 자주 수행하게 되는 실제 작업들을 단계별로 안내합니다.</p>
          
          <div className="step-content">
            <h3 id="daily-tasks">일상적인 관리 작업</h3>
            <div className="grid-container">
              <div className="card">
                <div className="card-title">📅 매일 해야 할 일</div>
                <ul className="checklist">
                  <li>신규 신고 건 확인 및 처리</li>
                  <li>스팸성 게시글 점검</li>
                  <li>커뮤니티 활동 현황 모니터링</li>
                  <li>주요 게시글 통계 확인</li>
                </ul>
              </div>
              
              <div className="card">
                <div className="card-title">📊 주간 관리 작업</div>
                <ul className="checklist">
                  <li>게시글 품질 평가 및 개선 방안 검토</li>
                  <li>인기 게시글 분석 및 트렌드 파악</li>
                  <li>사용자 피드백 수집 및 반영</li>
                  <li>커뮤니티 가이드라인 점검</li>
                </ul>
              </div>
              
              <div className="card">
                <div className="card-title">🗓️ 월간 관리 작업</div>
                <ul className="checklist">
                  <li>전체 게시글 통계 분석</li>
                  <li>커뮤니티 운영 정책 검토</li>
                  <li>우수 게시글/작성자 선정</li>
                  <li>시스템 성능 및 개선사항 점검</li>
                </ul>
              </div>
            </div>

            <h3 id="emergency-response">긴급 상황 대응</h3>
            <div className="card">
              <div className="card-title">🚨 긴급 상황별 대응 방법</div>
              
              <div className="security-patterns">
                <div className="pattern-item danger">
                  <h4>🔥 대량 스팸 공격</h4>
                  <div className="pattern-example">
                    <strong>대응 절차:</strong>
                    <ul>
                      <li>1. 즉시 해당 사용자 계정 정지</li>
                      <li>2. 스팸 게시글 일괄 삭제</li>
                      <li>3. IP 차단 및 보안 필터 강화</li>
                      <li>4. 사용자 공지사항 게시</li>
                    </ul>
                  </div>
                </div>

                <div className="pattern-item warning">
                  <h4>⚠️ 민감한 내용 게시</h4>
                  <div className="pattern-example">
                    <strong>대응 절차:</strong>
                    <ul>
                      <li>1. 즉시 해당 게시글 숨김 처리</li>
                      <li>2. 법무팀 또는 전문가 자문</li>
                      <li>3. 필요시 관련 기관 신고</li>
                      <li>4. 사후 관리 및 모니터링 강화</li>
                    </ul>
                  </div>
                </div>

                <div className="pattern-item info">
                  <h4>💬 집단 분쟁 발생</h4>
                  <div className="pattern-example">
                    <strong>대응 절차:</strong>
                    <ul>
                      <li>1. 관련 게시글 및 댓글 모니터링</li>
                      <li>2. 중재 메시지 게시</li>
                      <li>3. 필요시 임시 댓글 기능 제한</li>
                      <li>4. 당사자들과 개별 소통</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 게시글 작성 섹션 */}
        <h2 id="create-post" className="post-section-title">게시글 작성</h2>
        <div className="card post-management-card">
          <div className="card-title">새 게시글 작성하기</div>
          <p>효과적인 게시글을 작성하고 발행하는 방법을 안내합니다.</p>
          
          <div className="step-content">
            <h3>1단계: 게시글 기본 정보 입력</h3>
            <div className="step-detail">
              <ul className="checklist">
                <li><strong>제목:</strong> 독자의 관심을 끌 수 있는 명확하고 간결한 제목을 작성하세요</li>
                <li><strong>카테고리:</strong> 게시글 내용에 맞는 적절한 카테고리를 선택하세요</li>
                <li><strong>태그:</strong> 검색과 분류에 도움이 되는 관련 태그를 추가하세요</li>
                <li><strong>공개 범위:</strong> 전체 공개, 회원 전용, 특정 그룹 등 공개 범위를 설정하세요</li>
              </ul>
            </div>

            <h3>2단계: 본문 작성</h3>
            <div className="step-detail">
              <ul className="checklist">
                <li><strong>에디터 사용:</strong> 리치 텍스트 에디터를 활용해 다양한 서식을 적용하세요</li>
                <li><strong>이미지 첨부:</strong> 내용과 관련된 이미지를 첨부하여 가독성을 높이세요</li>
                <li><strong>파일 업로드:</strong> 필요한 경우 첨부 파일을 업로드하세요</li>
                <li><strong>미리보기:</strong> 발행 전 미리보기를 통해 최종 확인하세요</li>
              </ul>
            </div>

            <h3>3단계: 발행 설정</h3>
            <div className="step-detail">
              <ul className="checklist">
                <li><strong>즉시 발행:</strong> 작성 완료 후 바로 게시하기</li>
                <li><strong>예약 발행:</strong> 특정 날짜와 시간에 자동 게시되도록 설정</li>
                <li><strong>임시 저장:</strong> 작성 중인 내용을 임시로 저장하고 나중에 완성</li>
                <li><strong>검토 요청:</strong> 다른 관리자의 검토를 거쳐 발행하기</li>
              </ul>
            </div>
          </div>

          <div className="alert alert-success">
            <strong>✅ 작성 팁:</strong> 
            <ul>
              <li>- 제목은 20-50자 사이로 작성하는 것이 가장 효과적입니다</li>
              <li>- 첫 문단에서 핵심 내용을 요약해서 제시하세요</li>
              <li>- 단락을 나누고 소제목을 활용해 읽기 쉽게 구성하세요</li>
              <li>- 이미지는 적절한 크기로 최적화해서 업로드하세요</li>
            </ul>
          </div>
        </div>

        {/* 게시글 수정 섹션 */}
        <h2 id="edit-post" className="post-section-title">게시글 수정</h2>
        <div className="card post-management-card">
          <div className="card-title">기존 게시글 수정하기</div>
          <p>발행된 게시글의 내용을 수정하고 업데이트하는 방법을 설명합니다.</p>
          
          <div className="alert alert-warning">
            <strong>⚠️ 수정 시 주의사항:</strong> 게시글을 수정하면 기존 댓글이나 반응에 영향을 줄 수 있습니다. 중요한 내용 변경 시에는 수정 사유를 명시하는 것을 권장합니다.
          </div>

          <div className="step-content">
            <h3>수정 가능한 항목</h3>
            <div className="step-detail">
              <div className="grid-container">
                <div className="card">
                  <div className="card-title">📝 내용 수정</div>
                  <ul className="checklist">
                    <li>제목 및 본문 내용 변경</li>
                    <li>이미지 추가/삭제/교체</li>
                    <li>첨부파일 관리</li>
                    <li>서식 및 레이아웃 조정</li>
                  </ul>
                </div>
                
                <div className="card">
                  <div className="card-title">🏷️ 메타 정보</div>
                  <ul className="checklist">
                    <li>카테고리 재분류</li>
                    <li>태그 추가/제거/수정</li>
                    <li>공개 범위 변경</li>
                    <li>댓글 허용 여부 설정</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>수정 이력 관리</h3>
            <div className="step-detail">
              <ul className="checklist">
                <li><strong>버전 관리:</strong> 수정 전 버전이 자동으로 백업됩니다</li>
                <li><strong>수정 로그:</strong> 수정 일시와 수정자 정보가 기록됩니다</li>
                <li><strong>변경 사항 표시:</strong> 독자가 수정되었음을 알 수 있도록 표시됩니다</li>
                <li><strong>이전 버전 복구:</strong> 필요시 이전 버전으로 되돌릴 수 있습니다</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 게시글 삭제 섹션 */}
        <h2 id="delete-post" className="post-section-title">게시글 삭제</h2>
        <div className="card post-management-card">
          <div className="card-title">게시글 안전하게 삭제하기</div>
          <p>부적절하거나 불필요한 게시글을 삭제하는 방법을 안내합니다.</p>
          
          <div className="alert alert-danger">
            <strong>🚨 삭제 주의사항:</strong> 게시글을 삭제하면 해당 게시글의 모든 댓글, 좋아요, 통계 데이터가 함께 삭제됩니다. 삭제 후에는 복구가 어려우니 신중하게 결정하세요.
          </div>

          <div className="step-content">
            <h3>삭제 유형</h3>
            <div className="step-detail">
              <div className="grid-container">
                <div className="card">
                  <div className="card-title">🗑️ 임시 삭제</div>
                  <p>게시글을 숨김 처리하되 완전히 삭제하지는 않습니다.</p>
                  <ul className="checklist">
                    <li>사용자에게는 보이지 않음</li>
                    <li>관리자는 복구 가능</li>
                    <li>30일 후 자동 완전 삭제</li>
                    <li>데이터 백업 유지</li>
                  </ul>
                </div>
                
                <div className="card">
                  <div className="card-title">💀 완전 삭제</div>
                  <p>게시글과 관련된 모든 데이터를 영구적으로 삭제합니다.</p>
                  <ul className="checklist">
                    <li>즉시 완전 삭제</li>
                    <li>복구 불가능</li>
                    <li>모든 관련 데이터 삭제</li>
                    <li>법적 보관 의무 확인 필수</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>삭제 절차</h3>
            <div className="step-detail">
              <div className="step-content">
                <div className="step-item">
                  <div className="step-title">
                    <span className="step-number">1</span>
                    게시글 선택 및 삭제 사유 확인
                  </div>
                  <div className="step-content">
                    <p>삭제할 게시글을 선택하고 삭제 사유를 명확히 확인합니다.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-title">
                    <span className="step-number">2</span>
                    삭제 유형 선택
                  </div>
                  <div className="step-content">
                    <p>임시 삭제 또는 완전 삭제 중 적절한 방법을 선택합니다.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-title">
                    <span className="step-number">3</span>
                    사용자 알림 (선택사항)
                  </div>
                  <div className="step-content">
                    <p>필요한 경우 작성자에게 삭제 사유를 안내합니다.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-title">
                    <span className="step-number">4</span>
                    삭제 실행
                  </div>
                  <div className="step-content">
                    <p>최종 확인 후 삭제를 실행합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* 게시글 관리 모범 사례 */}
        <h2 id="best-practices">게시글 관리 모범 사례</h2>
        <div className="card">
          <div className="card-title">효과적인 게시글 관리 방법</div>
          
          <h3 id="content-quality">📝 콘텐츠 품질 관리</h3>
          <div className="grid-container">
            <div className="card">
              <div className="card-title">제목 작성법</div>
              <ul className="checklist">
                <li>핵심 키워드 포함</li>
                <li>감정을 자극하는 단어 활용</li>
                <li>궁금증을 유발하는 구조</li>
                <li>정확하고 구체적인 표현</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-title">본문 구성</div>
              <ul className="checklist">
                <li>도입-전개-결론 구조</li>
                <li>적절한 단락 나누기</li>
                <li>시각적 요소 활용</li>
                <li>독자 친화적 언어 사용</li>
              </ul>
            </div>
          </div>

          <h3 id="community-building">🏘️ 커뮤니티 활성화</h3>
          <ul className="checklist">
            <li><strong>정기적인 소통:</strong> 관리자가 직접 게시글을 작성하여 커뮤니티 분위기를 이끌어가세요</li>
            <li><strong>이벤트 기획:</strong> 다양한 이벤트를 통해 사용자 참여를 유도하세요</li>
            <li><strong>피드백 수집:</strong> 사용자 의견을 적극적으로 수집하고 반영하세요</li>
            <li><strong>우수 게시글 추천:</strong> 질 좋은 게시글을 추천하여 다른 사용자들에게 모범을 보여주세요</li>
          </ul>

          <div className="alert alert-success">
            <strong>🎯 성공 팁:</strong> 게시글 관리는 단순한 기술적 작업이 아닙니다. 사용자와의 소통, 커뮤니티 문화 형성, 지속적인 개선을 통해 건전하고 활발한 커뮤니티를 만들어가는 것이 목표입니다.
          </div>
        </div>

        <h2 id="troubleshooting">문제 해결</h2>
        <div className="card">
          <div className="card-title">자주 발생하는 문제 및 해결 방법</div>
          
          <div className="troubleshooting-list">
            <div className="trouble-item">
              <div className="trouble-header">
                <span className="trouble-icon">❓</span>
                <h4>게시글 목록에서 필터가 작동하지 않아요</h4>
              </div>
              <div className="trouble-content">
                <div className="trouble-causes">
                  <h5>가능한 원인:</h5>
                  <ul>
                    <li>날짜 범위가 너무 좁게 설정됨</li>
                    <li>여러 필터가 동시에 적용되어 결과가 없음</li>
                    <li>브라우저 캐시 문제</li>
                  </ul>
                </div>
                <div className="trouble-solutions">
                  <h5>해결 방법:</h5>
                  <ol>
                    <li>필터를 초기화하고 다시 설정해보세요</li>
                    <li>날짜 범위를 더 넓게 설정해보세요</li>
                    <li>페이지를 새로고침하거나 브라우저 캐시를 삭제하세요</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="trouble-item">
              <div className="trouble-header">
                <span className="trouble-icon">🚫</span>
                <h4>신고 처리 권한이 없다고 나옵니다</h4>
              </div>
              <div className="trouble-content">
                <div className="trouble-causes">
                  <h5>가능한 원인:</h5>
                  <ul>
                    <li>관리자 권한이 부족함</li>
                    <li>해당 게시판에 대한 관리 권한이 없음</li>
                    <li>세션이 만료됨</li>
                  </ul>
                </div>
                <div className="trouble-solutions">
                  <h5>해결 방법:</h5>
                  <ol>
                    <li>계정의 권한 레벨을 확인하세요</li>
                    <li>다시 로그인하여 세션을 갱신하세요</li>
                    <li>상위 관리자에게 권한 부여를 요청하세요</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="trouble-item">
              <div className="trouble-header">
                <span className="trouble-icon">⚠️</span>
                <h4>일괄 삭제 시 오류가 발생해요</h4>
              </div>
              <div className="trouble-content">
                <div className="trouble-causes">
                  <h5>가능한 원인:</h5>
                  <ul>
                    <li>선택한 게시글 수가 너무 많음</li>
                    <li>삭제할 수 없는 상태의 게시글이 포함됨</li>
                    <li>서버 타임아웃 발생</li>
                  </ul>
                </div>
                <div className="trouble-solutions">
                  <h5>해결 방법:</h5>
                  <ol>
                    <li>선택한 게시글 수를 줄여서 다시 시도하세요 (50개 이하 권장)</li>
                    <li>각 게시글의 상태를 확인하고 삭제 가능한 것만 선택하세요</li>
                    <li>시간을 두고 여러 번에 나누어 삭제하세요</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="trouble-item">
              <div className="trouble-header">
                <span className="trouble-icon">🔍</span>
                <h4>검색 결과가 정확하지 않아요</h4>
              </div>
              <div className="trouble-content">
                <div className="trouble-causes">
                  <h5>가능한 원인:</h5>
                  <ul>
                    <li>검색어가 너무 일반적이거나 모호함</li>
                    <li>검색 대상 범위가 잘못 설정됨</li>
                    <li>특수문자나 띄어쓰기 문제</li>
                  </ul>
                </div>
                <div className="trouble-solutions">
                  <h5>해결 방법:</h5>
                  <ol>
                    <li>더 구체적인 키워드를 사용하세요</li>
                    <li>검색 범위를 제목만으로 제한해보세요</li>
                    <li>따옴표("")를 사용하여 정확한 문구를 검색하세요</li>
                    <li>여러 키워드를 공백으로 구분하여 검색하세요</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="trouble-item">
              <div className="trouble-header">
                <span className="trouble-icon">📊</span>
                <h4>통계나 조회수가 정확하지 않는 것 같아요</h4>
              </div>
              <div className="trouble-content">
                <div className="trouble-causes">
                  <h5>가능한 원인:</h5>
                  <ul>
                    <li>통계 업데이트에 시간이 걸림 (실시간이 아님)</li>
                    <li>봇이나 중복 조회 필터링</li>
                    <li>시간대 설정 차이</li>
                  </ul>
                </div>
                <div className="trouble-solutions">
                  <h5>해결 방법:</h5>
                  <ol>
                    <li>통계는 보통 1-2시간 후에 정확히 반영됩니다</li>
                    <li>중복 조회나 봇 트래픽은 자동으로 필터링됩니다</li>
                    <li>정확한 통계가 필요하면 다음날 확인해보세요</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="alert alert-info">
            <strong>💡 추가 도움이 필요하시면:</strong>
            <ul>
              <li>- 문제가 지속되면 브라우저를 완전히 종료한 후 다시 접속해보세요</li>
              <li>- 다른 브라우저에서도 같은 문제가 발생하는지 확인해보세요</li>
              <li>- 문제 발생 시점과 상황을 자세히 기록해두시면 해결에 도움이 됩니다</li>
              <li>- 시스템 점검 시간(새벽 2-4시)에는 일부 기능이 제한될 수 있습니다</li>
            </ul>
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

export default PostManagement;