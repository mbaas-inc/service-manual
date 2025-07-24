import React from 'react';

function MemberList() {
  return (
    <>
      <section id="main-content">
        <h1>고객 정보 관리</h1>
        
        <p className="main-description">
          가입한 고객들의 목록을 확인하고 관리하는 방법을 설명합니다. 검색, 정보 확인, 개별 관리 기능을 활용하세요.
        </p>

        <div className="alert alert-info">
          <strong>💡 안내:</strong> 고객 정보는 개인정보보호법에 따라 안전하게 관리됩니다. 정당한 목적 없이 개인정보를 열람하거나 처리하지 마세요.
        </div>

        <h2 id="overview">고객 관리 개요</h2>
        <div className="card">
          <div className="card-title">주요 기능</div>
          <p>관리자 대시보드에서 고객 정보를 체계적으로 관리할 수 있습니다.</p>
          
          <div className="grid-container">
            <div className="card feature-card high">
              <div className="card-title">
                <span className="feature-icon">🔍</span>
                고객 검색
                <span className="priority-badge">핵심</span>
              </div>
              <p>아이디, 이름, 연락처로 빠르게 원하는 고객을 찾을 수 있습니다.</p>
            </div>
            
            <div className="card feature-card high">
              <div className="card-title">
                <span className="feature-icon">📋</span>
                정보 확인
              </div>
              <p>고객의 기본 정보, 권한, 접속 기록 등을 한눈에 확인할 수 있습니다.</p>
            </div>
            
            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">💬</span>
                메시지 발송
              </div>
              <p>개별 고객에게 이메일이나 SMS를 직접 발송할 수 있습니다.</p>
            </div>
            
            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">⚙️</span>
                정보 관리
              </div>
              <p>고객 정보 수정 및 계정 삭제 등의 관리 작업을 수행할 수 있습니다.</p>
            </div>
          </div>
        </div>

        <h2 id="access-guide">고객 목록 접근 방법</h2>
        <div className="card">
          <div className="card-title">고객 관리 화면 접속</div>
          <p>관리자 대시보드에서 고객 목록에 접근하는 방법을 안내합니다.</p>
          
          <div className="step-content">
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">1</span>
                고객 관리 메뉴 접속
              </div>
              <p>좌측 사이드바에서 <strong>고객 관리 &gt; 고객 정보 관리</strong>를 클릭합니다.</p>
              <div className="screenshot">
                <img src="/images/member-menu.png" alt="고객 관리 메뉴 스크린샷" />
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">2</span>
                고객 목록 화면 확인
              </div>
              <p>등록된 모든 고객의 목록이 표시됩니다. 기본적으로 최신 가입순으로 정렬됩니다.</p>
              <div className="member-table-example">
                <h4>고객 목록 화면 예시</h4>
                <table className="member-table">
                  <thead>
                    <tr>
                      <th>이름</th>
                      <th>아이디</th>
                      <th>권한</th>
                      <th>연락처</th>
                      <th>최근접속</th>
                      <th>가입일자</th>
                      <th>관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>홍길동</td>
                      <td>hong123</td>
                      <td><span className="permission-user">일반회원</span></td>
                      <td>010-1234-5678</td>
                      <td>2024-01-15 14:30</td>
                      <td>2023-12-01</td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-action message">메시지</button>
                          <button className="btn-action edit">수정</button>
                          <button className="btn-action delete">삭제</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>이관리</td>
                      <td>admin_lee</td>
                      <td><span className="permission-admin">관리자</span></td>
                      <td>010-5555-7777</td>
                      <td>2024-01-15 16:45</td>
                      <td>2023-10-01</td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-action message">메시지</button>
                          <button className="btn-action edit">수정</button>
                          <button className="btn-action delete" disabled>삭제</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <h2 id="search-function">고객 검색 기능</h2>
        <div className="card">
          <div className="card-title">빠른 고객 찾기</div>
          <p>다양한 조건으로 원하는 고객을 빠르게 검색할 수 있습니다.</p>
          
          <div className="search-guide">
            <div className="search-option">
              <h3>검색 옵션</h3>
              <div className="search-methods">
                <div className="search-method">
                  <div className="method-header">
                    <span className="method-icon">🆔</span>
                    <strong>아이디로 검색</strong>
                  </div>
                  <p>고객의 로그인 ID로 검색합니다. 정확한 아이디를 입력하거나 일부만 입력해도 검색 가능합니다.</p>
                  <div className="search-example">
                    <strong>예시:</strong> "hong" 입력 → "hong123", "hong_user" 등 관련 계정 검색
                  </div>
                </div>
                
                <div className="search-method">
                  <div className="method-header">
                    <span className="method-icon">👤</span>
                    <strong>이름으로 검색</strong>
                  </div>
                  <p>고객의 실명으로 검색합니다. 한글, 영문 모두 지원하며 부분 검색도 가능합니다.</p>
                  <div className="search-example">
                    <strong>예시:</strong> "홍" 입력 → "홍길동", "홍영수" 등 관련 이름 검색
                  </div>
                </div>
                
                <div className="search-method">
                  <div className="method-header">
                    <span className="method-icon">📞</span>
                    <strong>연락처로 검색</strong>
                  </div>
                  <p>등록된 전화번호로 검색합니다. 숫자만 입력하면 되며, 하이픈(-) 없이도 검색 가능합니다.</p>
                  <div className="search-example">
                    <strong>예시:</strong> "01012345678" 또는 "010-1234-5678" 모두 검색 가능
                  </div>
                </div>
              </div>
            </div>
            
            <div className="search-tips">
              <h3>검색 팁</h3>
              <div className="tips-list">
                <div className="tip-item">
                  <strong>✅ 부분 검색 활용</strong>
                  <p>전체 정보를 기억하지 못해도 일부만 입력하면 관련 결과를 모두 찾아줍니다.</p>
                </div>
                <div className="tip-item">
                  <strong>✅ 대소문자 구분 없음</strong>
                  <p>영문 검색 시 대소문자를 구분하지 않으므로 편리하게 검색할 수 있습니다.</p>
                </div>
                <div className="tip-item">
                  <strong>✅ 실시간 검색</strong>
                  <p>입력하는 즉시 결과가 나타나므로 빠르게 원하는 고객을 찾을 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="customer-info">고객 정보 확인</h2>
        <div className="card">
          <div className="card-title">표시되는 정보 항목</div>
          
          <div className="info-fields">
            <div className="field-section">
              <h3>기본 정보</h3>
              <div className="field-list">
                <div className="field-item">
                  <div className="field-header">
                    <span className="field-icon">👤</span>
                    <strong>이름</strong>
                  </div>
                  <p>고객의 실명입니다. 회원가입 시 입력한 정보로 표시됩니다.</p>
                </div>
                
                <div className="field-item">
                  <div className="field-header">
                    <span className="field-icon">🆔</span>
                    <strong>아이디</strong>
                  </div>
                  <p>로그인에 사용되는 고유 식별자입니다. 중복될 수 없으며 변경이 불가능합니다.</p>
                </div>
                
                <div className="field-item">
                  <div className="field-header">
                    <span className="field-icon">📞</span>
                    <strong>연락처</strong>
                  </div>
                  <p>고객의 휴대폰 번호입니다. SMS 발송이나 본인 확인 시 사용됩니다.</p>
                </div>
              </div>
            </div>
            
            <div className="field-section">
              <h3>계정 상태</h3>
              <div className="field-list">
                <div className="field-item">
                  <div className="field-header">
                    <span className="field-icon">🏷️</span>
                    <strong>권한</strong>
                  </div>
                  <p>고객의 권한 등급을 표시합니다.</p>
                  <div className="permission-types">
                    <div className="permission-example">
                      <span className="permission-admin">관리자</span>
                      <span className="permission-desc">시스템 전체 관리 권한</span>
                    </div>
                    <div className="permission-example">
                      <span className="permission-user">일반회원</span>
                      <span className="permission-desc">기본 서비스 이용 권한</span>
                    </div>
                  </div>
                </div>
                
                <div className="field-item">
                  <div className="field-header">
                    <span className="field-icon">⏰</span>
                    <strong>최근 접속시간</strong>
                  </div>
                  <p>고객이 마지막으로 로그인한 일시를 표시합니다.</p>
                  <div className="time-format">
                    <strong>형식:</strong> YYYY-MM-DD HH:MM (예: 2024-01-15 14:30)
                  </div>
                </div>
                
                <div className="field-item">
                  <div className="field-header">
                    <span className="field-icon">📅</span>
                    <strong>가입일자</strong>
                  </div>
                  <p>고객이 처음 회원가입한 날짜를 표시합니다.</p>
                  <div className="date-info">
                    <p>가입일로부터 경과된 기간을 통해 고객의 충성도나 활동 패턴을 파악할 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="management-actions">고객 관리 기능</h2>
        <div className="card">
          <div className="card-title">개별 고객 관리</div>
          <p>각 고객에 대해 다양한 관리 작업을 수행할 수 있습니다.</p>
          
          <div className="management-functions">
            <div className="function-item">
              <div className="function-header">
                <span className="function-icon">💬</span>
                <h3>메시지 보내기</h3>
              </div>
              <div className="function-content">
                <p>선택한 고객에게 개별 메시지를 발송할 수 있습니다.</p>
                
                <div className="message-options">
                  <div className="message-type">
                    <strong>📧 이메일 발송</strong>
                    <ul>
                      <li>중요한 공지사항 전달</li>
                      <li>개인화된 안내 메시지</li>
                      <li>이벤트 및 프로모션 안내</li>
                    </ul>
                  </div>
                  
                  <div className="message-type">
                    <strong>📱 SMS 발송</strong>
                    <ul>
                      <li>긴급한 알림 전달</li>
                      <li>인증번호 재발송</li>
                      <li>간단한 안내 메시지</li>
                    </ul>
                  </div>
                </div>
                
                <div className="alert alert-info">
                  <strong>💡 팁:</strong> 메시지 발송 전에 고객의 수신 동의 여부를 확인하세요. 스팸으로 신고될 수 있습니다.
                </div>
              </div>
            </div>
            
            <div className="function-item">
              <div className="function-header">
                <span className="function-icon">✏️</span>
                <h3>정보 수정하기</h3>
              </div>
              <div className="function-content">
                <p>고객의 정보를 수정하거나 업데이트할 수 있습니다.</p>
                
                <div className="editable-fields">
                  <div className="editable-section">
                    <strong>수정 가능한 항목:</strong>
                    <ul>
                      <li><strong>이름</strong>: 실명 변경 시 (신분증 확인 필요)</li>
                      <li><strong>연락처</strong>: 전화번호 변경 시</li>
                      <li><strong>권한</strong>: 고객 등급 변경</li>
                      <li><strong>상태</strong>: 계정 활성화/비활성화</li>
                    </ul>
                  </div>
                  
                  <div className="editable-section">
                    <strong>수정 불가능한 항목:</strong>
                    <ul>
                      <li><strong>아이디</strong>: 시스템 무결성을 위해 변경 불가</li>
                      <li><strong>가입일자</strong>: 이력 관리를 위해 변경 불가</li>
                    </ul>
                  </div>
                </div>
                
                <div className="alert alert-warning">
                  <strong>⚠️ 주의:</strong> 고객 정보 수정 시 반드시 정당한 사유가 있어야 하며, 가능하면 고객 본인의 동의를 받으세요.
                </div>
              </div>
            </div>
            
            <div className="function-item">
              <div className="function-header">
                <span className="function-icon">🗑️</span>
                <h3>계정 삭제하기</h3>
              </div>
              <div className="function-content">
                <p>고객의 계정을 완전히 삭제할 수 있습니다. 매우 신중하게 사용해야 하는 기능입니다.</p>
                
                <div className="deletion-info">
                  <div className="deletion-types">
                    <div className="deletion-type">
                      <strong>🔒 일시 정지</strong>
                      <p>계정을 비활성화하되 데이터는 보관합니다. 추후 복구 가능합니다.</p>
                    </div>
                    
                    <div className="deletion-type">
                      <strong>🗑️ 완전 삭제</strong>
                      <p>계정과 모든 관련 데이터를 영구적으로 삭제합니다. 복구가 불가능합니다.</p>
                    </div>
                  </div>
                  
                  <div className="deletion-cautions">
                    <h4>삭제 시 주의사항</h4>
                    <ul>
                      <li>관리자 계정은 삭제할 수 없습니다</li>
                      <li>진행 중인 결제나 주문이 있는 계정은 삭제 전 처리 필요</li>
                      <li>법적 보관 의무가 있는 데이터는 별도 보관</li>
                      <li>삭제 전 반드시 백업 및 확인 절차 진행</li>
                    </ul>
                  </div>
                </div>
                
                <div className="alert alert-danger">
                  <strong>🚨 경고:</strong> 계정 삭제는 되돌릴 수 없는 작업입니다. 삭제 전 반드시 충분히 검토하고 필요시 상급자 승인을 받으세요.
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="best-practices">모범 사례</h2>
        <div className="card">
          <div className="card-title">효과적인 고객 관리</div>
          
          <div className="best-practices">
            <div className="practice-item">
              <h4>✅ 정기적인 고객 정보 검증</h4>
              <p>주기적으로 고객 정보의 정확성을 확인하고, 연락처 변경이나 이름 변경 등을 업데이트하세요.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 개인정보 보호 준수</h4>
              <p>개인정보보호법에 따라 고객 정보 접근을 최소화하고, 필요한 경우에만 열람하세요.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 고객 세분화 관리</h4>
              <p>권한이나 활동 수준에 따라 고객을 세분화하여 맞춤형 서비스를 제공하세요.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 고객 소통 기록</h4>
              <p>고객과의 메시지 발송 내역이나 문의 응답 기록을 체계적으로 관리하세요.</p>
            </div>
          </div>
        </div>

        <h2 id="troubleshooting">자주 묻는 질문</h2>
        <div className="card">
          <div className="card-title">고객 관리 FAQ</div>
          
          <div className="faq-list">
            <div className="card">
              <div className="card-title">Q. 고객 정보가 검색되지 않아요.</div>
              <p><strong>A.</strong> 검색어의 철자를 확인하고, 부분 검색을 시도해보세요. 고객이 탈퇴했거나 계정이 삭제된 경우 검색되지 않습니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 관리자 계정을 삭제할 수 없어요.</div>
              <p><strong>A.</strong> 시스템 보안을 위해 관리자 계정은 삭제가 제한됩니다. 권한을 먼저 변경한 후 삭제하거나, 최고 관리자에게 문의하세요.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 메시지 발송이 실패합니다.</div>
              <p><strong>A.</strong> 고객의 연락처 정보가 정확한지 확인하고, 수신 동의 여부를 체크하세요. SMS의 경우 발송 크레딧이 부족할 수 있습니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 고객 목록이 너무 많아서 관리가 어려워요.</div>
              <p><strong>A.</strong> 검색과 필터 기능을 적극 활용하세요. 권한별, 접속 상태별로 필터링하거나 페이지당 표시 개수를 조정할 수 있습니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 실수로 고객 정보를 잘못 수정했어요.</div>
              <p><strong>A.</strong> 관리 로그를 확인하여 이전 정보를 파악하고, 가능한 한 빨리 올바른 정보로 복구하세요. 필요시 고객에게 직접 확인하세요.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 중복 계정이 있는 것 같아요.</div>
              <p><strong>A.</strong> 이름과 연락처로 검색하여 중복 계정을 확인하고, 고객과 상담 후 불필요한 계정을 정리하세요.</p>
            </div>
          </div>
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">도움이 필요하신가요?</div>
          <p>고객 관리와 관련하여 추가 도움이 필요하시면 언제든 연락주세요.</p>
          
          <div className="grid-container">
            <div className="card">
              <div className="card-title">📧 기술 지원</div>
              <p>support@mbaas.com</p>
              <p>고객 관리 기능 문의</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MemberList;