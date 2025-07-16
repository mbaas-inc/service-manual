import React from 'react';

function DefaultPage({ title, description }) {
  return (
    <>
      <section id="member-overview">
        <h1>회원 관리 개요</h1>
        <p>BaaS의 회원 관리 시스템을 사용하면 앱 사용자들을 효율적으로 관리할 수 있습니다.</p>

        <div className="alert alert-info">
          <strong>💡 회원 관리 기능:</strong> 가입 설정, 회원 목록, 정보 수정, 권한 관리, 데이터 내보내기
        </div>

        <h2 id="member-system">회원 시스템 구조</h2>
        <div className="card">
          <div className="card-title">회원 정보 구조</div>
          <p>BaaS에서는 다음과 같은 회원 정보를 관리할 수 있습니다:</p>
          
          <div className="grid-container">
            <div className="card">
              <div className="card-title">🔐 인증 정보</div>
              <ul className="checklist">
                <li>이메일 주소 (기본)</li>
                <li>비밀번호 (암호화 저장)</li>
                <li>소셜 로그인 연동</li>
                <li>이중 인증 설정</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-title">👤 개인 정보</div>
              <ul className="checklist">
                <li>이름/닉네임</li>
                <li>프로필 사진</li>
                <li>생년월일</li>
                <li>성별</li>
                <li>전화번호</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-title">⚙️ 시스템 정보</div>
              <ul className="checklist">
                <li>가입일시</li>
                <li>마지막 로그인</li>
                <li>활동 상태</li>
                <li>권한 등급</li>
                <li>이용 통계</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="member-lifecycle">회원 생명주기</h2>
        <div className="card">
          <div className="card-title">회원 가입부터 탈퇴까지</div>
          <p>회원의 전체 생명주기를 이해하고 각 단계별로 관리하는 방법을 알아보세요.</p>
          
          <div className="step-content">
            <h3 className="step-title">
              <span className="step-number">1</span>
              가입 신청
            </h3>
            <p>새로운 사용자가 앱에 가입하는 단계입니다.</p>
          </div>
          
          <div className="step-content">
            <h3 className="step-title">
              <span className="step-number">2</span>
              이메일 인증
            </h3>
            <p>이메일 주소 확인을 통해 실제 사용자임을 검증합니다.</p>
          </div>
          
          <div className="step-content">
            <h3 className="step-title">
              <span className="step-number">3</span>
              활성 회원
            </h3>
            <p>정상적으로 서비스를 이용하는 활성 상태의 회원입니다.</p>
          </div>
          
          <div className="step-content">
            <h3 className="step-title">
              <span className="step-number">4</span>
              휴면 또는 탈퇴
            </h3>
            <p>장기간 미이용 시 휴면 처리되거나 사용자가 직접 탈퇴할 수 있습니다.</p>
          </div>
        </div>

        <h2 id="member-features">주요 기능</h2>
        <div className="grid-container">
          <div className="card">
            <div className="card-title">👥 회원 목록 관리</div>
            <p>전체 회원을 한눈에 보고 검색, 필터링할 수 있습니다.</p>
            <button className="btn btn-primary">자세히 보기 →</button>
          </div>
          
          <div className="card">
            <div className="card-title">✏️ 개별 정보 수정</div>
            <p>회원의 정보를 직접 수정하거나 업데이트할 수 있습니다.</p>
            <button className="btn btn-primary">자세히 보기 →</button>
          </div>
          
          <div className="card">
            <div className="card-title">🔒 권한 관리</div>
            <p>회원별로 다른 권한을 부여하고 관리할 수 있습니다.</p>
            <button className="btn btn-primary">자세히 보기 →</button>
          </div>
          
          <div className="card">
            <div className="card-title">📊 데이터 분석</div>
            <p>회원 가입 추이, 활동 패턴 등을 분석할 수 있습니다.</p>
            <button className="btn btn-primary">자세히 보기 →</button>
          </div>
        </div>
      </section>

      <section id="best-practices">
        <h2>회원 관리 모범 사례</h2>
        <div className="card">
          <div className="card-title">효과적인 회원 관리 방법</div>
          
          <h3 id="security-tips">🔐 보안 관리</h3>
          <ul className="checklist">
            <li>정기적인 비밀번호 정책 점검</li>
            <li>의심스러운 로그인 활동 모니터링</li>
            <li>개인정보 접근 로그 관리</li>
            <li>데이터 암호화 및 백업</li>
          </ul>
          
          <h3 id="engagement-tips">📈 참여도 향상</h3>
          <ul className="checklist">
            <li>신규 회원 온보딩 프로세스</li>
            <li>정기적인 소통 메시지 발송</li>
            <li>회원 등급별 차별화된 혜택</li>
            <li>피드백 수집 및 반영</li>
          </ul>
          
          <div className="alert alert-success">
            <strong>💡 팁:</strong> 회원 관리는 기술적인 측면뿐만 아니라 사용자 경험 관점에서도 접근해야 합니다!
          </div>
        </div>
      </section>
    </>
  );
}

export default MemberManagementPage;