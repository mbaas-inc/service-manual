import React from 'react';

function MainContent({ activeSection }) {
  return (
    <main className="main-content">
      {/* 브레드크럼 */}
      <nav className="breadcrumb">
        <a href="#home">홈</a>
        <span className="separator">/</span>
        <a href="#user-guide">사용자 가이드</a>
        <span className="separator">/</span>
        <span>빠른 시작 가이드</span>
      </nav>

      {/* 메인 콘텐츠 */}
      <section id="quick-start">
        <h1>BaaS 빠른 시작 가이드</h1>
        <p>개발 지식이 없어도 쉽게 따라할 수 있는 BaaS 사용법을 알려드립니다. 회원 관리부터 메시지 발송까지, 모든 기능을 단계별로 안내해드려요.</p>

        <div className="alert alert-info">
          <strong>💡 이 가이드로 배울 수 있는 것:</strong> 계정 생성 → 회원 관리 설정 → 메시지 발송 → 기본 운영 방법까지!
        </div>

        {/* 1단계: 계정 생성 */}
        <div className="step-content">
          <h2 className="step-title">
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
              {/* 이미지가 있다면 여기에 추가 */}
              <p>스크린샷 영역</p>
            </div>
            
            <button className="btn btn-primary">계정 만들러 가기 →</button>
          </div>
        </div>

        {/* 2단계: 대시보드 둘러보기 */}
        <div className="step-content">
          <h2 className="step-title">
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
          <h2 className="step-title">
            <span className="step-number">3</span>
            회원 가입 설정하기
          </h2>
          
          <div className="card">
            <div className="card-title">사용자가 어떻게 가입할지 정하기</div>
            <p>카페에서 멤버십 카드를 만드는 것처럼, 여러분의 앱에서도 회원가입 방식을 정해야 해요.</p>
            
            <h3>🔐 로그인 방식 선택하기</h3>
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
            
            <h3>📝 가입 시 받을 정보 정하기</h3>
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
          <h2 className="step-title">
            <span className="step-number">4</span>
            첫 번째 메시지 보내기
          </h2>
          
          <div className="card">
            <div className="card-title">환영 메시지 보내보기</div>
            <p>새로 가입한 회원에게 환영 메시지를 보내보세요. 마치 카페에서 "어서오세요!"라고 인사하는 것과 같아요.</p>
            
            <h3>📧 이메일 보내기</h3>
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
          <h2 className="step-title">
            <span className="step-number">5</span>
            회원 관리하기
          </h2>
          
          <div className="card">
            <div className="card-title">회원 정보 확인하고 관리하기</div>
            <p>가입한 회원들의 정보를 확인하고, 필요에 따라 관리할 수 있어요.</p>
            
            <h3>👥 회원 목록 보기</h3>
            <div className="checklist">
              <li>전체 회원 수 확인하기</li>
              <li>최근 가입한 회원 보기</li>
              <li>회원별 활동 내역 확인하기</li>
              <li>이메일, 이름으로 회원 검색하기</li>
            </div>
            
            <h3>⚙️ 회원별 관리 기능</h3>
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

      {/* 자주 묻는 질문 */}
      <section id="common-questions">
        <h2>💭 자주 묻는 질문</h2>
        <p>BaaS를 처음 사용하시는 분들이 궁금해하는 내용들을 모았어요.</p>

        <div className="card">
          <div className="card-title">Q. 메시지가 스팸으로 분류되는 것 같아요.</div>
          <p><strong>A.</strong> 제목에 "무료", "할인" 같은 스팸 키워드를 피하고, 발송자 이름을 명확히 설정하세요. 또한 한 번에 너무 많은 메시지를 보내지 마세요.</p>
        </div>

        <div className="card">
          <div className="card-title">Q. 회원 수가 늘어나면 요금이 더 나오나요?</div>
          <p><strong>A.</strong> 회원 수 자체로는 추가 요금이 발생하지 않아요. 하지만 메시지 발송량, 저장 용량 등에 따라 요금이 달라질 수 있어요. "요금 계산기"에서 미리 확인해보세요.</p>
        </div>

        <div className="card">
          <div className="card-title">Q. 모바일에서도 관리할 수 있나요?</div>
          <p><strong>A.</strong> 네! 모바일 브라우저에서도 모든 기능을 사용할 수 있어요.</p>
        </div>
      </section>

      {/* 추가 도움말 */}
      <section id="additional-help">
        <h2>🚩 더 자세한 도움이 필요하신가요?</h2>
        <p>혼자서 해결하기 어려운 문제가 있으시면 언제든 도움을 받으실 수 있어요.</p>

        <div className="grid-container">                      
          <div className="card">
            <div className="card-title">📚 전체 API 문서</div>
            <p>모든 API의 상세한 사용법과 예제 코드를 확인하세요</p>
            <button className="btn btn-primary">API 문서 보기</button>
          </div>

          <div className="card">
            <div className="card-title">🛠️ 샘플 프로젝트</div>
            <p>실제 작동하는 예제 코드를 다운로드하여 참고하세요.</p>
            <button className="btn btn-primary">예제 다운로드</button>
          </div>

          <div className="card">
            <div className="card-title">💡 도움이 필요하신가요?</div>
            <p><a href="#support" className="link-primary">기술 지원팀에 문의하기</a> 또는 support@mbaas.com으로 연락주세요.</p>
            <button className="btn btn-primary">문의하기</button>
          </div>
        </div>

        <div className="alert alert-info">
          <strong>💡 빠른 도움 팁:</strong> 
          문의하실 때 "어떤 페이지에서" "무엇을 하려고 했는데" "어떤 문제가 발생했는지" 자세히 알려주시면 더 빠르게 도와드릴 수 있어요!
        </div>
      </section>
    </main>
  );
}

export default MainContent;