import React from 'react';

function MessagingPage() {
  return (
    <>
      <section id="message-overview">
        <h1>메시지 서비스 개요</h1>
        <p>BaaS의 메시지 발송 서비스를 사용하면 이메일, SMS, 푸시 알림을 쉽게 보낼 수 있습니다.</p>

        <div className="alert alert-info">
          <strong>💡 지원하는 메시지 타입:</strong> 이메일, SMS, 푸시 알림, 카카오톡 알림톡
        </div>

        <h2 id="message-types">메시지 타입별 특징</h2>
        <div className="grid-container">
          <div className="card">
            <div className="card-title">📧 이메일</div>
            <p>가장 기본적인 메시지 방식으로, 풍부한 콘텐츠를 담을 수 있습니다.</p>
            <ul className="checklist">
              <li>HTML 형식 지원</li>
              <li>첨부 파일 가능</li>
              <li>높은 도달률</li>
              <li>상대적으로 저렴한 비용</li>
            </ul>
          </div>
          
          <div className="card">
            <div className="card-title">📱 SMS</div>
            <p>즉시성이 높고 확인률이 좋은 메시지 방식입니다.</p>
            <ul className="checklist">
              <li>즉시 도달</li>
              <li>높은 열람률</li>
              <li>간단한 내용 전달</li>
              <li>인증 코드 발송에 최적</li>
            </ul>
          </div>
          
          <div className="card">
            <div className="card-title">🔔 푸시 알림</div>
            <p>앱 사용자에게 실시간으로 메시지를 전달할 수 있습니다.</p>
            <ul className="checklist">
              <li>실시간 알림</li>
              <li>앱 재방문 유도</li>
              <li>무료 발송</li>
              <li>개인화 가능</li>
            </ul>
          </div>
        </div>

        <h2 id="message-flow">메시지 발송 프로세스</h2>
        <div className="card">
          <div className="card-title">메시지 발송 단계</div>
          
          <div className="step-content">
            <h3 className="step-title">
              <span className="step-number">1</span>
              수신자 선택
            </h3>
            <p>메시지를 받을 대상을 선택합니다.</p>
            <ul className="checklist">
              <li>전체 회원</li>
              <li>특정 조건의 회원</li>
              <li>개별 회원</li>
              <li>외부 연락처</li>
            </ul>
          </div>
          
          <div className="step-content">
            <h3 className="step-title">
              <span className="step-number">2</span>
              메시지 작성
            </h3>
            <p>발송할 메시지의 내용을 작성합니다.</p>
            <ul className="checklist">
              <li>제목 및 본문 작성</li>
              <li>템플릿 사용</li>
              <li>개인화 변수 삽입</li>
              <li>첨부 파일 업로드</li>
            </ul>
          </div>
          
          <div className="step-content">
            <h3 className="step-title">
              <span className="step-number">3</span>
              발송 설정
            </h3>
            <p>발송 시간과 방식을 설정합니다.</p>
            <ul className="checklist">
              <li>즉시 발송</li>
              <li>예약 발송</li>
              <li>반복 발송</li>
              <li>테스트 발송</li>
            </ul>
          </div>
          
          <div className="step-content">
            <h3 className="step-title">
              <span className="step-number">4</span>
              결과 확인
            </h3>
            <p>발송 결과를 확인하고 분석합니다.</p>
            <ul className="checklist">
              <li>발송 성공/실패 현황</li>
              <li>열람률 통계</li>
              <li>클릭률 분석</li>
              <li>오류 로그 확인</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="email-guide">
        <h2>이메일 발송 가이드</h2>
        <div className="card">
          <div className="card-title">효과적인 이메일 마케팅</div>
          
          <h3 id="email-best-practices">📧 이메일 작성 모범 사례</h3>
          <div className="grid-container">
            <div className="card">
              <div className="card-title">제목 작성법</div>
              <ul className="checklist">
                <li>20자 이내로 간결하게</li>
                <li>스팸 키워드 피하기</li>
                <li>개인화 요소 포함</li>
                <li>긴급성 표현 적절히 사용</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-title">본문 구성</div>
              <ul className="checklist">
                <li>명확한 메시지 전달</li>
                <li>시각적 요소 활용</li>
                <li>CTA 버튼 명확히</li>
                <li>모바일 친화적 디자인</li>
              </ul>
            </div>
          </div>
          
          <h3 id="email-templates">📝 이메일 템플릿</h3>
          <div className="card">
            <div className="card-title">자주 사용하는 이메일 템플릿</div>
            <div className="grid-container">
              <div className="card">
                <div className="card-title">환영 메시지</div>
                <p>신규 가입자를 위한 환영 이메일</p>
                <button className="btn btn-primary">템플릿 사용</button>
              </div>
              
              <div className="card">
                <div className="card-title">이벤트 알림</div>
                <p>특별 이벤트나 프로모션 안내</p>
                <button className="btn btn-primary">템플릿 사용</button>
              </div>
              
              <div className="card">
                <div className="card-title">정기 뉴스레터</div>
                <p>주기적으로 발송하는 소식지</p>
                <button className="btn btn-primary">템플릿 사용</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sms-guide">
        <h2>SMS 발송 가이드</h2>
        <div className="card">
          <div className="card-title">효과적인 SMS 마케팅</div>
          
          <h3 id="sms-guidelines">📱 SMS 작성 가이드라인</h3>
          <div className="alert alert-warning">
            <strong>⚠️ 주의사항:</strong> SMS는 정보통신망법에 따라 수신 동의를 받은 경우에만 발송할 수 있습니다.
          </div>
          
          <ul className="checklist">
            <li>90자 이내로 간결하게 작성</li>
            <li>발송인 정보 명확히 표기</li>
            <li>수신거부 방법 안내</li>
            <li>개인정보 보호 준수</li>
          </ul>
          
          <h3 id="sms-timing">⏰ 발송 시간 최적화</h3>
          <div className="grid-container">
            <div className="card">
              <div className="card-title">권장 발송 시간</div>
              <ul className="checklist">
                <li>평일: 오전 9시 - 오후 6시</li>
                <li>주말: 오전 10시 - 오후 5시</li>
                <li>공휴일: 발송 금지</li>
                <li>심야 시간: 긴급상황 외 금지</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-title">업종별 최적 시간</div>
              <ul className="checklist">
                <li>쇼핑몰: 오후 2-4시, 저녁 8-10시</li>
                <li>음식점: 오전 11시, 오후 5-7시</li>
                <li>교육: 오후 3-5시</li>
                <li>금융: 오전 9-11시</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="push-guide">
        <h2>푸시 알림 가이드</h2>
        <div className="card">
          <div className="card-title">효과적인 푸시 알림 전략</div>
          
          <h3 id="push-strategy">🔔 푸시 알림 전략</h3>
          <p>푸시 알림은 사용자의 앱 재방문을 유도하는 중요한 도구입니다.</p>
          
          <div className="grid-container">
            <div className="card">
              <div className="card-title">개인화 알림</div>
              <p>사용자의 행동 패턴을 분석하여 개인화된 알림을 보냅니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">위치 기반 알림</div>
              <p>사용자의 위치 정보를 활용한 맞춤형 알림을 제공합니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">행동 유도 알림</div>
              <p>특정 행동을 유도하는 전략적 알림을 발송합니다.</p>
            </div>
          </div>
          
          <div className="alert alert-success">
            <strong>💡 성공 팁:</strong> 푸시 알림은 빈도가 중요합니다. 너무 자주 보내면 사용자가 알림을 끌 수 있으니 주의하세요!
          </div>
        </div>
      </section>
    </>
  );
}

export default MessagingPage;