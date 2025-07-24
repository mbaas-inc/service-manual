import React from 'react';

function AuthLog() {
  return (
    <>
      <section id="main-content">
        <h1>접속 로그</h1>
        
        <p className="main-description">
          사용자의 로그인 기록과 접속 정보를 확인할 수 있습니다. 보안 관리와 사용자 활동 모니터링에 활용하세요.
        </p>

        <div className="alert alert-info">
          <strong>💡 안내:</strong> 접속 로그는 보안상의 이유로 90일간 보관되며, 이후 자동으로 삭제됩니다.
        </div>

        <h2 id="overview">접속 로그 개요</h2>
        <div className="card">
          <div className="card-title">확인 가능한 정보</div>
          <p>관리자 대시보드에서 사용자들의 접속 기록을 상세하게 확인할 수 있습니다.</p>
          
          <div className="grid-container">
            <div className="card feature-card high">
              <div className="card-title">
                <span className="feature-icon">👤</span>
                사용자 ID
                <span className="priority-badge">필수</span>
              </div>
              <p>로그인한 사용자의 고유 식별자를 확인할 수 있습니다.</p>
            </div>
            
            <div className="card feature-card high">
              <div className="card-title">
                <span className="feature-icon">🌐</span>
                IP 주소
              </div>
              <p>접속한 사용자의 IP 주소 정보를 통해 접속 위치를 파악할 수 있습니다.</p>
            </div>
            
            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">💻</span>
                User-Agent
              </div>
              <p>사용자가 접속한 브라우저, 운영체제, 기기 정보를 확인할 수 있습니다.</p>
            </div>
            
            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">⏰</span>
                접속 시간
              </div>
              <p>정확한 로그인 일시와 세션 지속 시간을 확인할 수 있습니다.</p>
            </div>
          </div>
        </div>

        <h2 id="access-guide">접속 로그 확인 방법</h2>
        <div className="card">
          <div className="card-title">단계별 접속 방법</div>
          <p>관리자 대시보드에서 접속 로그를 확인하는 방법을 안내합니다.</p>
          
          <div className="step-content">
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">1</span>
                인증 관리 메뉴 접속
              </div>
              <p>좌측 사이드바에서 <strong>인증 관리 &gt; 접속 로그</strong>를 클릭합니다.</p>
              <div className="screenshot">
                <img src="/images/auth-log-menu.png" alt="인증 관리 > 접속 로그 메뉴"/>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">2</span>
                접속 로그 목록 확인
              </div>
              <p>최근 접속 기록부터 시간순으로 정렬된 목록을 확인할 수 있습니다.</p>
              <div className="log-table-example">
                <h4>접속 로그 화면 예시</h4>
                <table className="log-table">
                  <thead>
                    <tr>
                      <th>사용자 ID</th>
                      <th>IP 주소</th>
                      <th>User-Agent</th>
                      <th>접속 시간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>user001</td>
                      <td>192.168.1.100</td>
                      <td>Chrome 120.0 (Windows)</td>
                      <td>2024-01-15 14:30:25</td>
                    </tr>
                    <tr>
                      <td>admin</td>
                      <td>10.0.0.5</td>
                      <td>Safari 17.0 (macOS)</td>
                      <td>2024-01-15 14:25:12</td>
                    </tr>
                    <tr>
                      <td>user002</td>
                      <td>203.255.123.45</td>
                      <td>Firefox 121.0 (Android)</td>
                      <td>2024-01-15 14:20:08</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">3</span>
                필터 및 검색 활용
              </div>
              <p>특정 사용자나 기간의 접속 기록을 찾기 위해 필터 기능을 사용합니다.</p>
              <div className="filter-options">
                <div className="filter-group">
                  <strong>검색 필터 옵션:</strong>
                  <ul>
                    <li><strong>사용자 ID</strong>: 특정 사용자의 접속 기록 검색</li>
                    <li><strong>IP 주소</strong>: 특정 IP에서의 접속 시도 확인</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">4</span>
                상세 정보 확인
              </div>
              <p>각 로그 항목을 클릭하면 더 자세한 접속 정보를 확인할 수 있습니다.</p>
            </div>
          </div>
        </div>

        <h2 id="log-information">로그 정보 해석</h2>
        
        <div className="card">
          <div className="card-title">각 항목별 상세 설명</div>
          
          <div className="log-info-guide">
            <div className="info-item">
              <h3>사용자 ID</h3>
              <div className="info-content">
                <p>로그인을 시도한 사용자의 고유 식별자입니다.</p>
                <ul>
                  <li><strong>성공적인 로그인</strong>: 실제 가입된 사용자 ID 표시</li>
                  <li><strong>실패한 로그인</strong>: 시도한 ID 그대로 표시 (존재하지 않는 ID도 포함)</li>
                  <li><strong>익명 접속</strong>: 'anonymous' 또는 'guest'로 표시</li>
                </ul>
              </div>
            </div>
            
            <div className="info-item">
              <h3>IP 주소</h3>
              <div className="info-content">
                <p>사용자가 접속한 네트워크의 IP 주소 정보입니다.</p>
                <div className="ip-examples">
                  <div className="ip-type">
                    <strong>사설 IP (내부 네트워크)</strong>
                    <ul>
                      <li>192.168.x.x</li>
                      <li>10.x.x.x</li>
                      <li>172.16.x.x ~ 172.31.x.x</li>
                    </ul>
                  </div>
                  <div className="ip-type">
                    <strong>공인 IP (외부 접속)</strong>
                    <ul>
                      <li>실제 인터넷 상의 고유 주소</li>
                      <li>지역별 ISP에서 할당</li>
                      <li>보안 모니터링에 중요</li>
                    </ul>
                  </div>
                </div>
                
                <div className="alert alert-warning">
                  <strong>⚠️ 보안 주의:</strong> 동일한 사용자 ID가 여러 IP에서 동시에 접속하거나, 평소와 다른 지역의 IP에서 접속하는 경우 계정 탈취 가능성을 검토해보세요.
                </div>
              </div>
            </div>
            
            <div className="info-item">
              <h3>User-Agent</h3>
              <div className="info-content">
                <p>사용자의 브라우저, 기기, 운영체제 정보를 담고 있습니다.</p>
                <div className="useragent-examples">
                  <h4>User-Agent 정보 해석 예시</h4>
                  <div className="ua-example">
                    <div className="ua-string">
                      Chrome 120.0 (Windows 10)
                    </div>
                    <div className="ua-breakdown">
                      <span className="ua-part browser">Chrome 120.0</span>: 브라우저 종류 및 버전
                      <span className="ua-part os">Windows 10</span>: 운영체제
                    </div>
                  </div>
                  <div className="ua-example">
                    <div className="ua-string">
                      Safari 17.0 (iPhone iOS 17.2)
                    </div>
                    <div className="ua-breakdown">
                      <span className="ua-part browser">Safari 17.0</span>: 모바일 브라우저
                      <span className="ua-part os">iPhone iOS 17.2</span>: 모바일 기기 및 OS
                    </div>
                  </div>
                </div>
                
                <div className="ua-benefits">
                  <h4>활용 방법</h4>
                  <ul>
                    <li><strong>호환성 체크</strong>: 특정 브라우저에서 문제 발생 시 원인 파악</li>
                    <li><strong>사용 통계</strong>: 사용자들이 주로 사용하는 환경 분석</li>
                    <li><strong>보안 분석</strong>: 평소와 다른 기기/브라우저 접속 감지</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="info-item">
              <h3>접속 시간</h3>
              <div className="info-content">
                <p>정확한 로그인 시도 시각과 세션 정보입니다.</p>
                <div className="time-info">
                  <div className="time-format">
                    <strong>시간 표시 형식:</strong> YYYY-MM-DD HH:MM:SS
                  </div>
                  <div className="time-example">
                    <strong>예시:</strong> 2024-01-15 14:30:25 (2024년 1월 15일 오후 2시 30분 25초)
                  </div>
                </div>
                
                <div className="session-info">
                  <h4>세션 관련 정보</h4>
                  <ul>
                    <li><strong>로그인 시간</strong>: 인증이 성공한 정확한 시각</li>
                    <li><strong>세션 지속시간</strong>: 로그아웃까지의 활성 시간</li>
                    <li><strong>마지막 활동</strong>: 최종 페이지 접근 시간</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="security-monitoring">보안 모니터링</h2>
        <div className="card">
          <div className="card-title">접속 로그를 통한 보안 관리</div>
          
          <div className="security-guide">
            <div className="security-item">
              <h3>🚨 주의해야 할 접속 패턴</h3>
              <div className="security-patterns">
                <div className="pattern-item warning">
                  <h4>무차별 대입 공격 (Brute Force)</h4>
                  <p>동일한 IP에서 짧은 시간 내에 여러 사용자 ID로 반복 로그인 시도</p>
                  <div className="pattern-example">
                    <strong>패턴 예시:</strong>
                    <ul>
                      <li>203.255.123.45 - admin (실패)</li>
                      <li>203.255.123.45 - root (실패)</li>
                      <li>203.255.123.45 - user1 (실패)</li>
                      <li>203.255.123.45 - test (실패)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="pattern-item danger">
                  <h4>계정 탈취 의심</h4>
                  <p>동일 사용자가 평소와 다른 지역이나 기기에서 접속</p>
                  <div className="pattern-example">
                    <strong>패턴 예시:</strong>
                    <ul>
                      <li>user001 - 평소: 192.168.1.100 (서울, Chrome/Windows)</li>
                      <li>user001 - 의심: 125.209.45.123 (부산, Firefox/Linux)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="pattern-item info">
                  <h4>비정상적인 접속 시간</h4>
                  <p>업무 시간 외 또는 휴일에 관리자 계정 접속</p>
                </div>
              </div>
            </div>
            
            <div className="security-item">
              <h3>🛡️ 보안 대응 방법</h3>
              <div className="security-actions">
                <div className="action-item">
                  <h4>즉시 대응</h4>
                  <ul>
                    <li>의심스러운 IP 주소 차단</li>
                    <li>해당 사용자 계정 임시 잠금</li>
                    <li>사용자에게 비밀번호 변경 안내</li>
                    <li>2단계 인증 활성화 권장</li>
                  </ul>
                </div>
                
                <div className="action-item">
                  <h4>예방 조치</h4>
                  <ul>
                    <li>로그인 시도 횟수 제한 설정</li>
                    <li>강력한 비밀번호 정책 적용</li>
                    <li>정기적인 접속 로그 모니터링</li>
                    <li>사용자 보안 교육 실시</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="best-practices">모범 사례</h2>
        <div className="card">
          <div className="card-title">효과적인 접속 로그 관리</div>
          
          <div className="best-practices">
            <div className="practice-item">
              <h4>✅ 정기적인 모니터링</h4>
              <p>매일 한 번씩 접속 로그를 확인하여 비정상적인 패턴을 조기에 발견하세요. 자동 알림 설정을 통해 실시간 모니터링도 가능합니다.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 로그 분석 자동화</h4>
              <p>반복되는 의심 IP나 실패 패턴을 자동으로 감지하도록 설정하면 보안 담당자의 업무 효율성을 높일 수 있습니다.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 사용자 교육</h4>
              <p>정기적으로 사용자들에게 보안 접속 방법을 교육하고, 의심스러운 접속 시도가 있을 때 신고하도록 안내하세요.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 로그 보관 정책</h4>
              <p>법적 요구사항이나 내부 보안 정책에 따라 필요한 로그는 별도로 백업하여 보관하세요.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 통합 보안 관리</h4>
              <p>접속 로그와 함께 방화벽 로그, 애플리케이션 로그 등을 종합적으로 분석하여 보안 상황을 파악하세요.</p>
            </div>
          </div>
        </div>

        <h2 id="troubleshooting">자주 묻는 질문</h2>
        <div className="card">
          <div className="card-title">접속 로그 관련 FAQ</div>
          
          <div className="faq-list">
            <div className="card">
              <div className="card-title">Q. 로그가 표시되지 않아요.</div>
              <p><strong>A.</strong> 브라우저를 새로고침하거나, 날짜 필터 설정을 확인해보세요. 최근 90일 이내의 로그만 확인할 수 있습니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. IP 주소가 실제 위치와 다르게 표시됩니다.</div>
              <p><strong>A.</strong> VPN, 프록시 서버, 또는 회사 네트워크를 통한 접속의 경우 실제 위치와 다르게 표시될 수 있습니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 동일한 사용자가 여러 기기에서 동시 접속이 가능한가요?</div>
              <p><strong>A.</strong> 네, 가능합니다. 하지만 보안상 평소와 다른 환경에서의 접속은 주의 깊게 모니터링하는 것이 좋습니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 접속 실패 로그가 많이 발생합니다.</div>
              <p><strong>A.</strong> 무차별 대입 공격의 가능성이 있습니다. 해당 IP를 차단하거나 로그인 시도 제한을 설정하세요.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 로그를 90일 이상 보관할 수 있나요?</div>
              <p><strong>A.</strong> 시스템에서는 90일까지만 보관됩니다. 장기 보관이 필요한 경우 정기적으로 내보내기 기능을 사용하여 별도 보관하세요.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 관리자 계정의 접속 로그도 기록되나요?</div>
              <p><strong>A.</strong> 네, 모든 계정의 접속 로그가 기록됩니다. 관리자 계정은 더욱 주의 깊게 모니터링하는 것이 좋습니다.</p>
            </div>
          </div>
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">도움이 필요하신가요?</div>
          <p>접속 로그 관리나 보안 관련 문의사항이 있으시면 언제든 연락주세요.</p>
          
          <div className="grid-container">
            <div className="card">
              <div className="card-title">📧 기술 지원</div>
              <p>support@mbaas.com</p>
              <p>일반적인 기술 문의</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AuthLog;