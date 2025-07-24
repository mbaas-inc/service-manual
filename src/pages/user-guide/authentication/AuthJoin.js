import React from 'react';

function AuthJoin() {
  return (
    <>
      <section id="main-content">
        <h1>회원가입 설정</h1>
        
        <p className="main-description">
          앱/웹 내 회원가입에서 수집할 항목과 필수 입력 여부, 추가 설정을 관리할 수 있습니다.
        </p>

        <div className="alert alert-info">
          <strong>💡 안내:</strong> 회원가입 설정을 변경하면 즉시 적용되며, 이미 가입한 회원에게는 영향을 주지 않습니다.
        </div>

        <h2 id="overview">회원가입 설정 개요</h2>
        <div className="card">
          <div className="card-title">설정 가능한 항목</div>
          <p>회원가입 시 수집할 정보와 인증 방법을 자유롭게 구성할 수 있습니다.</p>
          
          <div className="grid-container">
            <div className="card feature-card high">
              <div className="card-title">
                <span className="feature-icon">📋</span>
                필수 항목 관리
                <span className="priority-badge">중요</span>
              </div>
              <p>아이디, 비밀번호, 이메일, 이름 등 회원가입 시 반드시 입력해야 하는 항목들을 관리합니다.</p>
            </div>
            
            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">✔️</span>
                선택 항목 설정
              </div>
              <p>영문 이름, 연락처 등 선택적으로 수집할 수 있는 추가 정보를 설정합니다.</p>
            </div>
            
            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">🔐</span>
                비밀번호 정책
              </div>
              <p>비밀번호 복잡도, 변경 주기 등 보안 정책을 설정합니다.</p>
            </div>
            
            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">📧</span>
                인증 수단 관리
              </div>
              <p>이메일, SMS 인증 사용 여부와 인증 방식을 설정합니다.</p>
            </div>
          </div>
        </div>

        <h2 id="getting-started">설정 방법</h2>
        <div className="card">
          <div className="card-title">회원가입 설정 단계</div>
          <p>관리자 대시보드에서 회원가입 설정을 변경하는 방법입니다.</p>
          
          <div className="step-content">
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">1</span>
                인증 관리 메뉴 접속
              </div>
              <p>좌측 사이드바에서 <strong>인증 관리 &gt; 회원가입 설정</strong>을 클릭합니다.</p>
              <div className='screenshot'>
                <img src="/images/auth-menu.png" alt="인증 관리 메뉴 스크린샷"/>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">2</span>
                필수 항목 확인
              </div>
              <p>기본 필수 항목들을 확인하고 각 항목의 세부 설정을 조정합니다.</p>
              <div className="sub-steps">
                <div className="sub-step">
                  <strong>• 아이디</strong>: 중복 체크, 형식 제한 설정
                </div>
                <div className="sub-step">
                  <strong>• 비밀번호</strong>: 복잡도 규칙, 변경 주기 설정
                </div>
                <div className="sub-step">
                  <strong>• 이메일</strong>: 인증 사용 여부 설정
                </div>
                <div className="sub-step">
                  <strong>• 이름</strong>: 실명 확인 방식 설정
                </div>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">3</span>
                선택 항목 활성화
              </div>
              <p>필요에 따라 추가 정보 수집 항목을 활성화합니다.</p>
              <div className="checkbox-list">
                <label className="checkbox-item">
                  <input type="checkbox" disabled />
                  <span>영문 이름 수집</span>
                </label>
                <label className="checkbox-item">
                  <input type="checkbox"  disabled />
                  <span>연락처 수집 (SMS 인증 가능)</span>
                </label>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">4</span>
                설정 저장
              </div>
              <p>모든 설정을 완료한 후 <strong>저장</strong> 버튼을 클릭하여 변경사항을 적용합니다.</p>
            </div>
          </div>
        </div>

        <h2 id="field-settings">항목별 상세 설정</h2>
        
        <div className="card">
          <div className="card-title">필수 입력 항목</div>
          
          <div className="field-guide">
            <h3>아이디 (Username)</h3>
            <div className="field-content">
              <p>사용자의 고유 식별자로 사용됩니다.</p>
              <ul>
                <li><strong>- 중복 불가</strong>: 시스템에서 자동으로 중복 체크</li>
                <li><strong>- 변경 불가</strong>: 가입 후 변경할 수 없음</li>
                <li><strong>- 형식 제한</strong>: 영문, 숫자 허용</li>
                <li><strong>- 길이 제한</strong>: 최소 4자, 최대 20자</li>
              </ul>
            </div>
          </div>
          
          <div className="field-guide">
            <h3>비밀번호 (Password)</h3>
            <div className="field-content">
              <p>계정 보안을 위한 비밀번호 설정입니다.</p>
              
              <div className="password-policy-box">
                <h4>비밀번호 정책 옵션</h4>
                <table className="policy-table">
                  <thead>
                    <tr>
                      <th>정책 항목</th>
                      <th>설명</th>
                      <th>권장 설정</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>영문 대문자</td>
                      <td>최소 1개 이상의 대문자 포함</td>
                      <td>✓ 사용</td>
                    </tr>
                    <tr>
                      <td>영문 소문자</td>
                      <td>최소 1개 이상의 소문자 포함</td>
                      <td>✓ 사용</td>
                    </tr>
                    <tr>
                      <td>숫자</td>
                      <td>최소 1개 이상의 숫자 포함</td>
                      <td>✓ 사용</td>
                    </tr>
                    <tr>
                      <td>특수문자</td>
                      <td>!@#$%^&* 등 특수문자 포함</td>
                      <td>✓ 사용</td>
                    </tr>
                    <tr>
                      <td>최소 길이</td>
                      <td>비밀번호 최소 자릿수</td>
                      <td>8자 이상</td>
                    </tr>
                    <tr>
                      <td>변경 주기</td>
                      <td>정기적인 비밀번호 변경 요구</td>
                      <td>90일, 180일, 365일</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="alert alert-warning">
                <strong>⚠️ 주의:</strong> 너무 복잡한 비밀번호 정책은 사용자 이탈을 유발할 수 있습니다. 보안과 편의성의 균형을 고려하세요.
              </div>
            </div>
          </div>
          
          <div className="field-guide">
            <h3>이메일 (Email)</h3>
            <div className="field-content">
              <p>계정 복구, 알림 발송 등에 사용되는 필수 연락처입니다.</p>
              <ul>
                <li><strong>- 형식 검증</strong>: 유효한 이메일 형식 자동 체크</li>
                <li><strong>- 인증 옵션</strong>: 이메일 인증 사용 시 가입 완료 전 인증 필수</li>
              </ul>
              
              <div className="verification-box">
                <h4>이메일 인증 설정</h4>
                <div className="verification-options">
                  <div className="option-item">
                    <strong>인증 방식:</strong> 인증 번호 발송
                  </div>
                  <div className="option-item">
                    <strong>유효 시간:</strong> 30분
                  </div>
                  <div className="option-item">
                    <strong>재발송 제한:</strong> 5회/일
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="field-guide">
            <h3>이름 (Name)</h3>
            <div className="field-content">
              <p>사용자의 실명 정보입니다.</p>
              <ul>
                <li><strong>- 한글/영문</strong>: 한글 또는 영문 이름 입력</li>
                <li><strong>- 길이 제한</strong>: 최소 2자, 최대 50자</li>
                <li><strong>- 특수문자</strong>: 공백 외 특수문자 불허</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-title">선택 입력 항목</div>
          
          <div className="field-guide">
            <h3>영문 이름 (English Name)</h3>
            <div className="field-content">
              <p>해외 서비스 연동이나 국제화 대응 시 활용됩니다.</p>
              <ul>
                <li>영문 알파벳과 공백만 허용</li>
                <li>First Name, Last Name 분리 수집 가능</li>
              </ul>
            </div>
          </div>
          
          <div className="field-guide">
            <h3>연락처 (Phone Number)</h3>
            <div className="field-content">
              <p>SMS 발송, 본인 확인 등에 활용됩니다.</p>
              <ul>
                <li><strong>- 검증</strong>: 유효한 휴대폰 번호 형식 체크</li>
                <li><strong>- 인증</strong>: SMS 인증 기능 연동 가능</li>
              </ul>
              
              <div className="verification-box">
                <h4>SMS 인증 설정</h4>
                <div className="verification-options">
                  <div className="option-item">
                    <strong>인증 방식:</strong> 6자리 인증번호
                  </div>
                  <div className="option-item">
                    <strong>유효 시간:</strong> 3분
                  </div>
                  <div className="option-item">
                    <strong>재발송 제한:</strong> 3회/일
                  </div>
                  <div className="option-item">
                    <strong>비용:</strong> 건당 과금 (별도 문의)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="best-practices">모범 사례</h2>
        <div className="card">
          <div className="card-title">효과적인 회원가입 설정</div>
          
          <div className="best-practices">
            <div className="practice-item">
              <h4>✅ 필수 항목 최소화</h4>
              <p>회원가입 전환율을 높이기 위해 꼭 필요한 정보만 필수로 설정하세요. 추가 정보는 가입 후 프로필 완성 단계에서 수집할 수 있습니다.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 명확한 안내 제공</h4>
              <p>각 입력 항목마다 왜 필요한지, 어떻게 활용되는지 명확히 안내하여 사용자의 신뢰를 얻으세요.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 적절한 보안 수준</h4>
              <p>비밀번호 정책은 보안과 사용성의 균형을 고려하여 설정하세요. 지나치게 복잡한 요구사항은 오히려 보안을 해칠 수 있습니다.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 유연한 인증 옵션</h4>
              <p>이메일과 SMS 인증을 선택적으로 활용하세요. 서비스 특성에 따라 적절한 인증 수단을 선택하면 됩니다.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 개인정보 보호</h4>
              <p>수집한 개인정보는 명시된 목적에만 사용하고, 개인정보처리방침을 명확히 고지하세요.</p>
            </div>
          </div>
        </div>

        <h2 id="troubleshooting">자주 묻는 질문</h2>
        <div className="card">
          <div className="card-title">회원가입 설정 FAQ</div>
          
          <div className="faq-list">
            <div className="card">
              <div className="card-title">Q. 이미 가입한 회원에게도 새 설정이 적용되나요?</div>
              <p><strong>A.</strong> 아니요, 변경된 설정은 새로 가입하는 회원에게만 적용됩니다. 기존 회원 정보는 영향받지 않습니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 필수 항목을 나중에 선택 항목으로 변경할 수 있나요?</div>
              <p><strong>A.</strong> 아이디, 비밀번호, 이메일, 이름은 시스템 운영에 필수적인 항목이므로 선택 항목으로 변경할 수 없습니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. SMS 인증 비용은 어떻게 되나요?</div>
              <p><strong>A.</strong> SMS 발송 비용은 사용량에 따라 과금됩니다. 자세한 요금은 고객센터로 문의해주세요.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 이메일 인증 메일이 도착하지 않아요.</div>
              <p><strong>A.</strong> 스팸함을 확인해보시고, 발신 도메인이 화이트리스트에 등록되어 있는지 확인하세요.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 비밀번호 정책을 변경하면 기존 회원도 변경해야 하나요?</div>
              <p><strong>A.</strong> 변경 주기를 설정한 경우에만 기존 회원에게도 적용됩니다. 복잡도 규칙은 다음 비밀번호 변경 시 적용됩니다.</p>
            </div>
          </div>
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">도움이 필요하신가요?</div>
          <p>회원가입 설정과 관련하여 추가 도움이 필요하시면 언제든 문의해주세요.</p>
          
          <div className="grid-container">
            <div className="card">
              <div className="card-title">📧 이메일 문의</div>
              <p>support@mbaas.com</p>
              <p>기술 지원 및 일반 문의</p>
            </div>
            <div className="card">
              <div className="card-title">💬 1:1 문의</div>
              <p>관리자 대시보드 내 1:1 문의</p>
              <p>실시간 답변 제공</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AuthJoin;