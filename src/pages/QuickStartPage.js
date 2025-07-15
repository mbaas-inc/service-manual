import React from 'react';

function QuickStartPage() {
  return (
    <>
      <section id="quick-start">
        <h1>BaaS 빠른 시작 가이드</h1>
        <p>개발 지식이 없어도 쉽게 따라할 수 있는 BaaS 사용법을 알려드립니다. 회원 관리부터 메시지 발송까지, 모든 기능을 단계별로 안내해드려요.</p>

        <div className="alert alert-info">
          <strong>💡 이 가이드로 배울 수 있는 것:</strong> 계정 생성 → 회원 관리 설정 → 메시지 발송 → 기본 운영 방법까지!
        </div>

        {/* 1단계: 계정 생성 */}
        <div className="step-content">
          <h2 id="step1" className="step-title">
            <span className="step-number">1</span>
            계정 생성하고 시작하기
          </h2>
          
          <div className="card">
            <div className="card-title">BaaS 계정 만들기</div>
            <p>가장 먼저 BaaS 서비스에 가입하고 프로젝트를 만들어야 합니다. 마치 블로그를 만드는 것처럼 간단해요!</p>
            
            <ul className="checklist">
              <li><a href="https://test2.aiapp.help" target="_blank" rel="noopener noreferrer">BaaS 웹사이트</a>에 접속하기</li>
              <li>이메일과 비밀번호로 회원가입</li>
              <li>이메일 인증 완료하기</li>
              <li>첫 번째 프로젝트 만들기 (예: "우리 카페 앱")</li>
            </ul>
            
            <div className="screenshot">
              <p>스크린샷 영역</p>
            </div>
            
            <button className="btn btn-primary">계정 만들러 가기 →</button>
          </div>
        </div>

        {/* 2단계: 대시보드 둘러보기 */}
        <div className="step-content">
          <h2 id="step2" className="step-title">
            <span className="step-number">2</span>
            대시보드 둘러보기
          </h2>
          
          <div className="card">
            <div className="card-title">관리자 화면 이해하기</div>
            <p>로그인하면 보이는 대시보드는 여러분의 '관리자 사무실'이에요. 모든 기능을 여기서 관리할 수 있습니다.</p>
            
            <div className="grid-container">
              <div className="card">
                <div className="card-title">📊 통계 한눈에 보기</div>
                <p>오늘 가입한 회원 수, 발송한 메시지 수 등을 한눈에 확인할 수 있어요.</p>
              </div>
              
              <div className="card">
                <div className="card-title">👥 회원 관리</div>
                <p>가입한 회원들의 정보를 보고, 메시지를 보내거나 권한을 설정할 수 있어요.</p>
              </div>
              
              <div className="card">
                <div className="card-title">📨 메시지 센터</div>
                <p>이메일, SMS, 푸시 알림을 쉽게 보낼 수 있는 곳이에요.</p>
              </div>
              
              <div className="card">
                <div className="card-title">⚙️ 설정</div>
                <p>앱의 이름, 로고, 로그인 방식 등을 설정하는 곳이에요.</p>
              </div>
            </div>
            
            <div className="alert alert-success">
              <strong>💡 팁:</strong> 처음에는 왼쪽 메뉴를 하나씩 클릭해보면서 어떤 기능들이 있는지 둘러보세요!
            </div>
          </div>
        </div>

        {/* 3단계: 회원 가입 설정 */}
        <div className="step-content">
          <h2 id="step3" className="step-title">
            <span className="step-number">3</span>
            회원 가입 설정하기
          </h2>
          
          <div className="card">
            <div className="card-title">사용자가 어떻게 가입할지 정하기</div>
            <p>카페에서 멤버십 카드를 만드는 것처럼, 여러분의 앱에서도 회원가입 방식을 정해야 해요.</p>
            
            <h3 id="login-methods">🔐 로그인 방식 선택하기</h3>
            <div className="grid-container">
              <div className="card">
                <div className="card-title">이메일 로그인</div>
                <p>가장 기본적인 방식이에요. 이메일과 비밀번호로 가입하고 로그인해요.</p>
                <div className="alert alert-info">✅ 추천: 처음에는 이것만 사용해도 충분해요!</div>
              </div>
              
              <div className="card">
                <div className="card-title">소셜 로그인</div>
                <p>카카오, 네이버, 구글 계정으로 간편하게 가입할 수 있어요.</p>
                <div className="alert alert-warning">나중에 필요할 때 추가하는 것이 좋아요.</div>
              </div>
            </div>
            
            <h3 id="signup-fields">📝 가입 시 받을 정보 정하기</h3>
            <div className="checklist">
              <li>이메일 주소 (필수)</li>
              <li>이름 또는 닉네임 (필수)</li>
              <li>전화번호 (선택)</li>
              <li>생년월일 (선택)</li>
              <li>성별 (선택)</li>
            </div>
            
            <div className="alert alert-warning">
              <strong>💡 중요:</strong> 처음에는 꼭 필요한 정보만 받으세요. 정보를 많이 요구할수록 가입을 포기하는 사람이 늘어나요.
            </div>
          </div>
        </div>

        {/* 4단계: 첫 번째 메시지 보내기 */}
        <div className="step-content">
          <h2 id="step4" className="step-title">
            <span className="step-number">4</span>
            첫 번째 메시지 보내기
          </h2>
          
          <div className="card">
            <div className="card-title">환영 메시지 보내보기</div>
            <p>새로 가입한 회원에게 환영 메시지를 보내보세요. 마치 카페에서 "어서오세요!"라고 인사하는 것과 같아요.</p>
            
            <h3 id="send-email">📧 이메일 보내기</h3>
            <div className="card">
              <p><strong>1. 메시지 센터로 이동</strong></p>
              <p>왼쪽 메뉴에서 "메시지 발송" → "이메일 보내기"를 클릭하세요.</p>
              
              <p><strong>2. 받는 사람 선택</strong></p>
              <div className="checklist">
                <li>특정 회원 선택하기</li>
                <li>전체 회원에게 보내기</li>
                <li>조건에 맞는 회원들에게만 보내기</li>
              </div>
              
              <p><strong>3. 메시지 내용 작성</strong></p>
              <div className="quotation">
                <strong>제목:</strong> 환영합니다! 우리 카페에 오신 것을 환영해요 ☕<br />
                <strong>내용:</strong><br />
                안녕하세요 [이름]님!<br /><br />
                우리 카페 앱에 가입해주셔서 감사합니다.<br />
                앞으로 맛있는 커피와 다양한 혜택을 즐겨보세요!<br /><br />
                궁금한 점이 있으시면 언제든 문의해주세요.<br /><br />
                감사합니다! 🎉
              </div>
              
              <p><strong>4. 미리보기 후 발송</strong></p>
              <p>"미리보기" 버튼으로 확인한 후 "발송하기" 버튼을 누르면 끝!</p>
            </div>
            
            <div className="alert alert-success">
              <strong>🎉 축하해요!</strong> 첫 번째 메시지를 성공적으로 보냈어요. 발송 내역에서 결과를 확인할 수 있어요.
            </div>
          </div>
        </div>

        {/* 5단계: 회원 관리하기 */}
        <div className="step-content">
          <h2 id="step5" className="step-title">
            <span className="step-number">5</span>
            회원 관리하기
          </h2>
          
          <div className="card">
            <div className="card-title">회원 정보 확인하고 관리하기</div>
            <p>가입한 회원들의 정보를 확인하고, 필요에 따라 관리할 수 있어요.</p>
            
            <h3 id="member-list">👥 회원 목록 보기</h3>
            <div className="checklist">
              <li>전체 회원 수 확인하기</li>
              <li>최근 가입한 회원 보기</li>
              <li>회원별 활동 내역 확인하기</li>
              <li>이메일, 이름으로 회원 검색하기</li>
            </div>
            
            <h3 id="member-actions">⚙️ 회원별 관리 기능</h3>
            <div className="grid-container">
              <div className="card">
                <div className="card-title">정보 수정</div>
                <p>회원이 요청하면 이름, 이메일 등의 정보를 수정할 수 있어요.</p>
              </div>
              
              <div className="card">
                <div className="card-title">권한 관리</div>
                <p>일반 회원, VIP 회원, 관리자 등의 등급을 설정할 수 있어요.</p>
              </div>
              
              <div className="card">
                <div className="card-title">개별 메시지</div>
                <p>특정 회원에게만 개별 메시지를 보낼 수 있어요.</p>
              </div>
              
              <div className="card">
                <div className="card-title">탈퇴 처리</div>
                <p>회원이 탈퇴를 요청하면 안전하게 처리할 수 있어요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 다음 단계 섹션 */}
      <section id="next-steps">
        <h2>🎉 축하합니다! 이제 BaaS 기본 사용법을 알게 되었어요</h2>
        <p>기본적인 회원 관리와 메시지 발송 기능을 익혔으니, 이제 더 다양한 기능들을 살펴보세요.</p>

        <div className="grid-container">
          <div className="card">
            <div className="card-title">💳 결제 시스템 설정</div>
            <p>온라인 결제를 받을 수 있도록 결제 시스템을 연결해보세요.</p>
            <button className="btn btn-primary">결제 설정 가이드 →</button>
          </div>
          
          <div className="card">
            <div className="card-title">📝 게시판 만들기</div>
            <p>공지사항, 이벤트 등을 올릴 수 있는 게시판을 만들어보세요.</p>
            <button className="btn btn-primary">게시판 가이드 →</button>
          </div>
          
          <div className="card">
            <div className="card-title">📊 통계 보는 법</div>
            <p>회원 가입 추이, 메시지 열람률 등의 통계를 확인하는 방법을 배워보세요.</p>
            <button className="btn btn-primary">통계 가이드 →</button>
          </div>
          
          <div className="card">
            <div className="card-title">🔔 자동 메시지 설정</div>
            <p>생일 축하, 이벤트 알림 등을 자동으로 보내는 방법을 배워보세요.</p>
            <button className="btn btn-primary">자동화 가이드 →</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default QuickStartPage;