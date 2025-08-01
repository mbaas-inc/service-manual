import React, { useState } from 'react';

function DefaultPage({ title, description }) {
  const [userType, setUserType] = useState('user'); // 'user' 또는 'developer'

  return (
    <>
      <section id="main-content">
        <h1>{title}</h1>

        {/* 동적 설명 */}
        <p className="main-description"></p>

        <div className="alert alert-info">
          <strong>💡 관리자 팁 :</strong> 
           '단계별 가이드를 따라하시면 누구나 쉽게 사용할 수 있습니다.'
        </div>

        <h2 id="overview">개요</h2>
        <div className="card">
          <div className="card-title">주요 기능</div>
          <p>{userType === 'developer' ? '개발자를 위한' : '사용자를 위한'} {title} 기능에 대해 자세히 알아보실 수 있습니다.</p>
          
          <div className="grid-container">
              <div>
                <div className="card-title">
                  <span className="feature-icon"></span>
                  
                </div>
                <p></p>
              </div>
          </div>
        </div>

        <h2 id="resources">유용한 자료</h2>
        <div className="card">
          <div className="card-title">
          </div>
          <p>더 효과적으로 활용할 수 있는 자료들을 모았습니다.</p>
          
          <div className="resources-grid">
              <div className="resource-item">
                <div className="resource-title"></div>
                <div className="resource-desc"></div>
                <button className="btn btn-secondary">보러가기</button>
              </div>
          </div>
        </div>

        <h2 id="troubleshooting">문제 해결</h2>
        <div className="card">
          <div className="card-title">
            {userType === 'developer' ? '개발 관련 문제' : '자주 발생하는 문제'}
          </div>
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

export default DefaultPage;