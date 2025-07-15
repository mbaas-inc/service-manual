import React from 'react';

function DefaultPage({ title, description }) {
  return (
    <>
      <section id="main-content">
        <h1>{title}</h1>
        <p>{description || '이 페이지는 현재 준비 중입니다.'}</p>

        <div className="alert alert-info">
          <strong>💡 안내:</strong> 이 기능에 대한 상세한 내용은 곧 추가될 예정입니다.
        </div>

        <h2 id="overview">개요</h2>
        <div className="card">
          <div className="card-title">주요 기능</div>
          <p>이 섹션에서는 {title} 기능에 대해 자세히 알아보실 수 있습니다.</p>
          
          <div className="grid-container">
            <div className="card">
              <div className="card-title">📚 가이드</div>
              <p>단계별 사용 방법을 안내해드립니다.</p>
              <button className="btn btn-primary">가이드 보기</button>
            </div>
            
            <div className="card">
              <div className="card-title">🔧 설정</div>
              <p>기능 설정 방법을 확인하세요.</p>
              <button className="btn btn-primary">설정하기</button>
            </div>
            
            <div className="card">
              <div className="card-title">💡 팁</div>
              <p>효과적인 활용 방법을 알려드립니다.</p>
              <button className="btn btn-primary">팁 보기</button>
            </div>
          </div>
        </div>

        <h2 id="getting-started">시작하기</h2>
        <div className="card">
          <div className="card-title">첫 번째 단계</div>
          <p>{title} 기능을 사용하기 위한 첫 번째 단계입니다.</p>
          
          <div className="step-content">
            <h3 id="step-1">1단계: 기본 설정</h3>
            <p>기본적인 설정을 완료하세요.</p>
            <ul className="checklist">
              <li>필수 항목 확인</li>
              <li>기본 옵션 설정</li>
              <li>권한 설정</li>
              <li>테스트 실행</li>
            </ul>
          </div>
          
          <div className="step-content">
            <h3 id="step-2">2단계: 상세 설정</h3>
            <p>보다 상세한 설정을 진행하세요.</p>
            <ul className="checklist">
              <li>고급 옵션 설정</li>
              <li>사용자 정의 설정</li>
              <li>연동 설정</li>
              <li>최종 검토</li>
            </ul>
          </div>
        </div>

        <h2 id="advanced-features">고급 기능</h2>
        <div className="card">
          <div className="card-title">고급 활용 방법</div>
          <p>더 효과적으로 활용할 수 있는 고급 기능들을 소개합니다.</p>
          
          <h3 id="automation">자동화 기능</h3>
          <p>반복적인 작업을 자동화하여 효율성을 높이세요.</p>
          
          <h3 id="integration">연동 기능</h3>
          <p>다른 서비스와의 연동을 통해 더 강력한 기능을 활용하세요.</p>
          
          <h3 id="analytics">분석 기능</h3>
          <p>사용 현황을 분석하여 최적화할 수 있습니다.</p>
        </div>

        <h2 id="troubleshooting">문제 해결</h2>
        <div className="card">
          <div className="card-title">자주 발생하는 문제</div>
          
          <div className="card">
            <div className="card-title">Q. 기능이 정상적으로 작동하지 않아요.</div>
            <p><strong>A.</strong> 먼저 기본 설정이 올바른지 확인해보세요. 설정에 문제가 없다면 브라우저 새로고침 후 다시 시도해보세요.</p>
          </div>

          <div className="card">
            <div className="card-title">Q. 권한 오류가 발생합니다.</div>
            <p><strong>A.</strong> 관리자 권한이 필요한 기능일 수 있습니다. 계정 권한을 확인하거나 관리자에게 문의하세요.</p>
          </div>

          <div className="card">
            <div className="card-title">Q. 데이터가 표시되지 않습니다.</div>
            <p><strong>A.</strong> 데이터 로딩에 시간이 걸릴 수 있습니다. 잠시 후 다시 확인해보시거나, 필터 설정을 확인해보세요.</p>
          </div>
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">도움이 더 필요하신가요?</div>
          <p>위의 내용으로 해결되지 않는 문제가 있으시면 언제든 문의해주세요.</p>
          
          <div className="grid-container">
            <div className="card">
              <div className="card-title">📞 전화 문의</div>
              <p>02-1234-5678</p>
              <p>평일 9:00 - 18:00</p>
            </div>
            
            <div className="card">
              <div className="card-title">📧 이메일 문의</div>
              <p>support@mbaas.com</p>
              <p>24시간 접수 가능</p>
            </div>
            
            <div className="card">
              <div className="card-title">💬 채팅 문의</div>
              <p>실시간 채팅 지원</p>
              <p>평일 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DefaultPage;