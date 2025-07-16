import React from 'react';

function AccountSetupPage() {
  return (
    <>
      <section id="account-setup">
        <h1>BaaS 계정 생성하기</h1>
        <p>BaaS(Backend as a Service) 서비스를 시작하기 위한 첫 번째 단계입니다. 계정 생성부터 첫 프로젝트 설정까지, 차근차근 따라해보세요.</p>

        <div className="alert alert-info">
          <strong>💡 이 가이드로 배울 수 있는 것:</strong> 회원가입 → 이메일 인증 → 프로젝트 생성 → 기본 설정까지!
        </div>

        {/* 1단계: 시작하기 전 준비사항 */}
        <div className="step-content">
          <h2 id="step1" className="step-title">
            <span className="step-number">1</span>
            시작하기 전 준비사항
          </h2>
          
          <div className="card">
            <div className="card-title">필요한 것들을 미리 준비해보세요</div>
            <p>원활한 계정 생성을 위해 다음 항목들을 미리 준비하시면 좋습니다.</p>
            
            <ul className="checklist">
              <li>사용하실 이메일 주소 (Gmail, Naver 등 어떤 것이든 가능)</li>
              <li>안전한 비밀번호 (8자리 이상, 영문+숫자 조합)</li>
              <li>만들고 싶은 프로젝트의 이름 (예: "우리 카페 앱", "헬스장 관리")</li>
              <li>프로젝트 설명 (간단한 한두 줄로 어떤 서비스인지)</li>
            </ul>
            
            <div className="alert alert-warning">
              <strong>📧 이메일 주소 선택 팁:</strong> 자주 사용하는 이메일 주소를 사용하세요. 중요한 알림과 인증 메일을 받게 됩니다.
            </div>
            
            <div className="grid-container">
              <div className="card">
                <div className="card-title">🌐 브라우저 준비</div>
                <p>Chrome, Firefox, Safari 등 최신 브라우저를 사용하시면 가장 좋습니다.</p>
              </div>
              
              <div className="card">
                <div className="card-title">📱 모바일도 가능</div>
                <p>스마트폰에서도 계정 생성이 가능하지만, PC 환경을 권장합니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2단계: BaaS 웹사이트 접속 및 회원가입 */}
        <div className="step-content">
          <h2 id="step2" className="step-title">
            <span className="step-number">2</span>
            BaaS 웹사이트에서 회원가입하기
          </h2>
          
          <div className="card">
            <div className="card-title">공식 웹사이트에 접속하기</div>
            <p>BaaS 서비스의 공식 웹사이트에 접속해서 계정을 만들어보겠습니다.</p>
            
            <div className="alert alert-info">
              <strong>🔗 공식 주소:</strong> <a href="https://aiapp.help" target="_blank" rel="noopener noreferrer">test2.aiapp.help</a>
            </div>
            
            <h3 id="signup-process">📝 회원가입 절차</h3>
            <div className="card">
              <p><strong>1. "회원가입" 버튼 클릭</strong></p>
              <p>메인 페이지에서 "회원가입" 또는 "시작하기" 버튼을 찾아 클릭하세요.</p>
              
              <div className="screenshot">
                <p>메인 페이지 스크린샷 영역</p>
              </div>
              
              <p><strong>2. 기본 정보 입력</strong></p>
              <div className="checklist">
                <li>이메일 주소 입력 (정확히 입력해주세요!)</li>
                <li>비밀번호 입력 (8자리 이상)</li>
                <li>비밀번호 확인</li>
                <li>이름 또는 닉네임 입력</li>
                <li>서비스 이용약관 동의</li>
              </div>
              
              <div className="alert alert-warning">
                <strong>🔐 안전한 비밀번호 만들기:</strong><br/>
                • 8자리 이상으로 만드세요<br/>
                • 영문자, 숫자를 조합하세요<br/>
                • 생일, 전화번호 등 개인정보는 피하세요<br/>
                • 예시: myproject2024!, cafe123Help
              </div>
              
              <p><strong>3. "회원가입" 버튼 클릭</strong></p>
              <p>모든 정보를 입력한 후 "회원가입" 또는 "계정 만들기" 버튼을 클릭하세요.</p>
            </div>
            
            <div className="screenshot">
              <p>회원가입 폼 스크린샷 영역</p>
            </div>
          </div>
        </div>

        {/* 3단계: 이메일 인증 */}
        <div className="step-content">
          <h2 id="step3" className="step-title">
            <span className="step-number">3</span>
            이메일 인증 완료하기
          </h2>
          
          <div className="card">
            <div className="card-title">인증 메일 확인하고 계정 활성화하기</div>
            <p>회원가입 후에는 보안을 위해 이메일 인증 과정을 거쳐야 합니다. 마치 아파트 출입증을 받는 것과 같은 과정이에요.</p>
            
            <h3 id="email-check">📧 인증 메일 확인하기</h3>
            <div className="card">
              <p><strong>1. 이메일함 확인</strong></p>
              <div className="checklist">
                <li>가입할 때 입력한 이메일 계정에 로그인</li>
                <li>받은편지함에서 "BaaS 계정 인증" 메일 찾기</li>
                <li>메일이 안 보인다면 스팸함도 확인해보세요</li>
              </div>
              
              <p><strong>2. 인증 링크 클릭</strong></p>
              <div className="quotation">
                <strong>메일 제목:</strong> [BaaS] 계정 인증을 완료해주세요<br />
                <strong>내용 예시:</strong><br />
                안녕하세요! BaaS 서비스에 가입해주셔서 감사합니다.<br />
                아래 버튼을 클릭하여 계정 인증을 완료해주세요.<br /><br />
                <button className="btn btn-primary">이메일 인증하기</button><br /><br />
                링크는 24시간 후 만료됩니다.
              </div>
              
              <p><strong>3. 인증 완료 확인</strong></p>
              <p>링크를 클릭하면 "계정 인증이 완료되었습니다" 페이지가 나타납니다.</p>
              
              <div className="alert alert-success">
                <strong>✅ 인증 완료!</strong> 이제 BaaS 서비스의 모든 기능을 사용할 수 있습니다.
              </div>
            </div>
            
            <h3 id="email-issues">❓ 인증 메일이 안 왔다면?</h3>
            <div className="grid-container">
              <div className="card">
                <div className="card-title">📬 스팸함 확인</div>
                <p>간혹 인증 메일이 스팸함으로 분류될 수 있습니다. 스팸함을 꼭 확인해보세요.</p>
              </div>
              
              <div className="card">
                <div className="card-title">⏰ 잠시 기다리기</div>
                <p>메일 발송에 1-2분 정도 걸릴 수 있습니다. 조금 기다린 후 다시 확인해보세요.</p>
              </div>
              
              <div className="card">
                <div className="card-title">🔄 재발송 요청</div>
                <p>로그인 페이지에서 "인증 메일 재발송" 버튼을 클릭해서 다시 받을 수 있습니다.</p>
              </div>
              
              <div className="card">
                <div className="card-title">📞 고객지원 문의</div>
                <p>위 방법으로도 해결되지 않으면 고객지원팀에 문의해주세요.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4단계: 첫 로그인 및 프로젝트 생성 */}
        <div className="step-content">
          <h2 id="step4" className="step-title">
            <span className="step-number">4</span>
            첫 로그인하고 프로젝트 만들기
          </h2>
          
          <div className="card">
            <div className="card-title">계정으로 로그인하고 첫 프로젝트 시작하기</div>
            <p>이메일 인증을 완료했다면 이제 실제로 서비스를 사용할 차례입니다. 첫 번째 프로젝트를 만들어보세요!</p>
            
            <h3 id="first-login">🔑 첫 로그인하기</h3>
            <div className="card">
              <p><strong>1. 로그인 페이지 접속</strong></p>
              <div className="checklist">
                <li>BaaS 웹사이트의 "로그인" 버튼 클릭</li>
                <li>가입할 때 사용한 이메일 주소 입력</li>
                <li>설정한 비밀번호 입력</li>
                <li>"로그인" 버튼 클릭</li>
              </div>
              
              <div className="alert alert-info">
                <strong>💡 비밀번호를 잊어버렸다면?</strong> "비밀번호 찾기" 링크를 클릭해서 재설정할 수 있습니다.
              </div>
              
              <div className="screenshot">
                <p>로그인 페이지 스크린샷 영역</p>
              </div>
            </div>
            
            <h3 id="create-project">🚀 첫 번째 프로젝트 생성</h3>
            <div className="card">
              <p><strong>1. 프로젝트 생성 시작</strong></p>
              <p>로그인 후 "새 프로젝트 만들기" 또는 "프로젝트 추가" 버튼을 클릭하세요.</p>
              
              <p><strong>2. 프로젝트 정보 입력</strong></p>
              <div className="grid-container">
                <div className="card">
                  <div className="card-title">📝 프로젝트 이름</div>
                  <p>예시: "우리 카페 앱", "헬스장 관리 시스템", "온라인 쇼핑몰"</p>
                  <div className="alert alert-info">한글, 영문 모두 사용 가능합니다.</div>
                </div>
                
                <div className="card">
                  <div className="card-title">📄 프로젝트 설명</div>
                  <p>예시: "동네 카페의 멤버십과 주문 관리를 위한 앱"</p>
                  <div className="alert alert-info">나중에 수정할 수 있으니 간단히 작성하세요.</div>
                </div>
              </div>
              
              <p><strong>3. 프로젝트 생성 완료</strong></p>
              <p>"프로젝트 만들기" 버튼을 클릭하면 바로 새 프로젝트가 생성됩니다.</p>
              
              <div className="alert alert-success">
                <strong>🎉 축하합니다!</strong> 첫 번째 프로젝트가 성공적으로 생성되었습니다.
              </div>
            </div>
          </div>
        </div>

        {/* 5단계: 대시보드 기본 설정 */}
        <div className="step-content">
          <h2 id="step5" className="step-title">
            <span className="step-number">5</span>
            대시보드 기본 설정하기
          </h2>
          
          <div className="card">
            <div className="card-title">프로젝트 관리자 화면 둘러보기</div>
            <p>프로젝트가 생성되면 전용 대시보드(관리자 화면)에 접속하게 됩니다. 기본 설정을 완료해보세요.</p>
            
            <h3 id="dashboard-tour">🏠 대시보드 둘러보기</h3>
            <div className="grid-container">
              <div className="card">
                <div className="card-title">📊 메인 대시보드</div>
                <p>메세지의 전체 현황을 한눈에 볼 수 있는 곳입니다.</p>
              </div>
                            
              <div className="card">
                <div className="card-title">🔒 인증 관리</div>
                <p>로그인 설정, 회원가입 설정 및 접속 로그를 확인할 수 있습니다.</p>
              </div>
              
              <div className="card">
                <div className="card-title">👥 회원 관리</div>
                <p>가입한 회원들의 정보를 확인하고 관리, 권한 관리를 할 수 있습니다.</p>
              </div>
              
              <div className="card">
                <div className="card-title">💳 결제 관리</div>
                <p>결제 내역 확인 및 PG결제 설정할 수 있습니다.</p>
              </div>

            </div>
            <div className="grid-container">
              <div className="card">
                <div className="card-title">📃 게시판 관리</div>
                <p>게시판 생성, 게시글 및 댓글, 신고 관리를 하실 수 있습니다.</p>
              </div>
              
              <div className="card">
                <div className="card-title">📨 메시지 관리</div>
                <p>이메일, SMS, MMS를 보낼 수 있는 곳입니다.</p>
              </div>

              <div className="card">
                <div className="card-title">📱 푸시 관리</div>
                <p>앱에 푸시와 연결하여 푸시 관리를 할 수 있습니다. </p>
                <span class="priority-badge">개발자 필요</span>
              </div>
              
              <div className="card">
                <div className="card-title">🎨 앱 화면 관리</div>
                <p>생성한 앱 화면을 에디터로 수정할 수 있습니다. </p>
              </div>
            </div>
            
            <h3 id="basic-settings">⚙️ 기본 설정 완료하기</h3>
            <div className="card">
              <p><strong>1. 프로젝트 정보 업데이트</strong></p>
              <div className="checklist">
                <li>프로젝트 로고 업로드 (선택사항)</li>
                <li>연락처 정보 입력</li>
                <li>서비스 URL 설정</li>
              </div>
              
              <p><strong>2. 회원가입 설정</strong></p>
              <div className="checklist">
                <li>회원가입 방식 선택 (이메일, 소셜 로그인 등)</li>
                <li>필수 입력 항목 설정</li>
                <li>이용약관 및 개인정보처리방침 링크 설정</li>
              </div>
              
              <p><strong>3. 알림 설정</strong></p>
              <div className="checklist">
                <li>관리자 알림 이메일 설정</li>
                <li>중요 이벤트 알림 켜기/끄기</li>
                <li>정기 리포트 수신 설정</li>
              </div>
              
              <div className="alert alert-info">
                <strong>💡 팁:</strong> 설정은 언제든지 변경할 수 있습니다. 처음에는 기본값으로 두고 나중에 필요에 따라 수정하세요.
              </div>
            </div>
          </div>
        </div>

        {/* 6단계: 첫 번째 테스트 */}
        <div className="step-content">
          <h2 id="step6" className="step-title">
            <span className="step-number">6</span>
            테스트해보기
          </h2>
          
          <div className="card">
            <div className="card-title">실제로 기능이 작동하는지 확인해보기</div>
            <p>모든 설정이 완료되었다면 실제로 기능들이 제대로 작동하는지 테스트해보세요.</p>
            
            <h3 id="test-signup">👤 회원가입 테스트</h3>
            <div className="card">
              <p><strong>1. 테스트 계정 만들기</strong></p>
              <div className="checklist">
                <li>별도의 이메일 주소로 회원가입 시도</li>
                <li>가입 과정이 원활한지 확인</li>
                <li>인증 메일이 정상 발송되는지 확인</li>
                <li>로그인이 정상 작동하는지 확인</li>
              </div>
              
              <div className="alert alert-warning">
                <strong>💡 테스트 팁:</strong> 개인 이메일, 회사 이메일 등 다른 주소로 테스트해보세요.
              </div>
            </div>
            
            <h3 id="test-message">📧 메시지 발송 테스트</h3>
            <div className="card">
              <p><strong>1. 환영 메시지 보내기</strong></p>
              <div className="checklist">
                <li>테스트 계정에 환영 이메일 발송</li>
                <li>메시지가 정상 도착하는지 확인</li>
                <li>메시지 내용과 디자인 확인</li>
                <li>발송 결과가 대시보드에 표시되는지 확인</li>
              </div>
            </div>
            
            <div className="alert alert-success">
              <strong>🎉 완벽합니다!</strong> 모든 기능이 정상 작동한다면 이제 실제 서비스를 시작할 준비가 완료되었습니다.
            </div>
          </div>
        </div>
      </section>

      {/* 완료 및 다음 단계 섹션 */}
      <section id="next-steps">
        <h2>🎉 계정 생성을 완료했습니다!</h2>
        <p>축하합니다! BaaS 계정 생성과 기본 설정을 모두 완료했습니다. 이제 본격적인 서비스 구축을 시작해보세요.</p>

        <div className="grid-container">
          <div className="card">
            <div className="card-title">📚 빠른 시작 가이드</div>
            <p>전체적인 BaaS 사용법을 단계별로 배워보세요.</p>
            <button className="btn btn-primary">빠른 시작 가이드 →</button>
          </div>
          
          <div className="card">
            <div className="card-title">🏠 대시보드 둘러보기</div>
            <p>관리자 대시보드의 각 기능들을 자세히 알아보세요.</p>
            <button className="btn btn-primary">대시보드 가이드 →</button>
          </div>
          
          <div className="card">
            <div className="card-title">👥 회원 관리 설정</div>
            <p>회원가입 방식과 회원 관리 기능을 설정해보세요.</p>
            <button className="btn btn-primary">회원 관리 가이드 →</button>
          </div>
          
          <div className="card">
            <div className="card-title">📧 메시지 발송 시작</div>
            <p>이메일, SMS, 푸시 알림 발송 방법을 배워보세요.</p>
            <button className="btn btn-primary">메시지 가이드 →</button>
          </div>
        </div>

        <div className="alert alert-info">
          <strong>💡 도움이 필요하시면:</strong> 언제든지 고객지원팀에 문의하거나 FAQ를 확인해보세요. 빠르고 친절한 지원을 받으실 수 있습니다.
        </div>
      </section>
    </>
  );
}

export default AccountSetupPage;