import React, { useState } from 'react';

function MessageTemplatesPage() {
  const [activeTab, setActiveTab] = useState('sms'); // 'sms' 또는 'talk'
  const [smsTemplates, setSmsTemplates] = useState([
    {
      id: 1,
      name: '가입 환영 메시지',
      category: '인증',
      content: '안녕하세요 ${name}님! 회원가입을 축하드립니다. 앞으로 다양한 혜택을 받아보세요.',
      type: 'SMS',
      variables: ['name'],
      createdAt: '2024-01-15',
      usageCount: 1250
    },
    {
      id: 2,
      name: '주문 완료 알림',
      category: '주문',
      content: '주문이 완료되었습니다. 주문번호: ${orderNo}\n총 결제금액: ${amount}원\n배송은 2-3일 소요됩니다.',
      type: 'LMS',
      variables: ['orderNo', 'amount'],
      createdAt: '2024-01-10',
      usageCount: 3400
    }
  ]);
  
  const [talkTemplates, setTalkTemplates] = useState([
    {
      id: 1,
      name: '이벤트 참여 완료',
      category: '이벤트',
      templateCode: 'EVENT_001',
      content: '${name}님, 이벤트 참여가 완료되었습니다!\n결과는 ${date}에 발표됩니다.',
      talkType: '기본형',
      emphasisType: '제목강조',
      variables: ['name', 'date'],
      buttons: [
        { type: 'weblink', name: '이벤트 페이지', url: 'https://example.com/event' }
      ],
      status: '승인완료',
      createdAt: '2024-01-12',
      usageCount: 850
    },
    {
      id: 2,
      name: '배송 출발 알림',
      category: '배송',
      templateCode: 'DELIVERY_001',
      content: '주문하신 상품이 배송 출발되었습니다.\n운송장번호: ${trackingNo}',
      talkType: '부가정보형',
      emphasisType: '강조표시없음',
      variables: ['trackingNo'],
      buttons: [
        { type: 'weblink', name: '배송조회', url: 'https://example.com/tracking' },
        { type: 'applink', name: '앱에서 보기', url: 'myapp://tracking' }
      ],
      status: '승인완료',
      createdAt: '2024-01-08',
      usageCount: 2100
    }
  ]);

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [newTemplate, setNewTemplate] = useState({
    name: '',
    category: '',
    content: '',
    variables: [],
    templateCode: '',
    talkType: '기본형',
    emphasisType: '강조표시없음',
    buttons: []
  });

  const startEdit = (template) => {
    setSelectedTemplate(template);
    setIsEditing(true);
    setIsCreating(false);
  };

  const startCreate = () => {
    setNewTemplate({
      name: '',
      category: '',
      content: '',
      variables: [],
      templateCode: '',
      talkType: '기본형',
      emphasisType: '강조표시없음',
      buttons: []
    });
    setIsCreating(true);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setIsCreating(false);
    setSelectedTemplate(null);
  };

  const deleteTemplate = (id) => {
    if (window.confirm('정말로 이 템플릿을 삭제하시겠습니까?')) {
      if (activeTab === 'sms') {
        setSmsTemplates(smsTemplates.filter(t => t.id !== id));
      } else {
        setTalkTemplates(talkTemplates.filter(t => t.id !== id));
      }
    }
  };

  const extractVariables = (content) => {
    const matches = content.match(/\$\{[^}]+\}/g);
    return matches ? matches.map(match => match.slice(2, -1)) : [];
  };

  const renderTemplateList = () => {
    const templates = activeTab === 'sms' ? smsTemplates : talkTemplates;
    
    return (
      <div className="api-table">
        <table style={{width: '100%'}}>
          <thead>
            <tr>
              <th>템플릿 이름</th>
              <th>카테고리</th>
              {activeTab === 'talk' && <th>승인상태</th>}
              <th>사용횟수</th>
              <th>생성일</th>
            </tr>
          </thead>
          <tbody>
            {templates.map(template => (
              <tr key={template.id}>
                <td><strong>{template.name}</strong></td>
                <td>{template.category}</td>
                {activeTab === 'talk' && (
                  <td>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      background: template.status === '승인완료' ? 'var(--success-bg)' : 'var(--warning-bg)',
                      color: template.status === '승인완료' ? 'var(--success-color)' : 'var(--warning-color)'
                    }}>
                      {template.status}
                    </span>
                  </td>
                )}
                <td>{template.usageCount.toLocaleString()}회</td>
                <td>{template.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      <section id="main-content">
        <h1>메시지 템플릿 만들기</h1>

        <p className="main-description">
          자주 사용하는 메시지를 템플릿으로 저장하여 효율적으로 메시지를 발송할 수 있습니다. SMS/MMS와 알림톡 템플릿을 각각 관리할 수 있습니다.
        </p>

        <div className="alert alert-info">
          <strong>💡 관리자 팁 :</strong> 
           변수를 활용하면 개인화된 메시지를 자동으로 생성할 수 있습니다. ${`{변수명}`} 형태로 작성하세요.
        </div>

        <h2 id="template-management">템플릿 관리</h2>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <div style={{
              display: 'flex',
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              padding: '4px'
            }}>
              <button
                onClick={() => setActiveTab('sms')}
                style={{
                  flex: 1,
                  padding: '8px 20px',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  background: activeTab === 'sms' ? 'var(--primary-color)' : 'transparent',
                  color: activeTab === 'sms' ? 'white' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.2s'
                }}
              >
                SMS/MMS 템플릿
              </button>
              <button
                onClick={() => setActiveTab('talk')}
                style={{
                  flex: 1,
                  padding: '8px 20px',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  background: activeTab === 'talk' ? 'var(--primary-color)' : 'transparent',
                  color: activeTab === 'talk' ? 'white' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.2s'
                }}
              >
                알림톡 템플릿
              </button>
            </div>
          </div>

          {renderTemplateList()}
        </div>

        <h2 id="template-usage">템플릿 활용 방법</h2>
        <div className="card">
          <div className="card-title">효과적인 템플릿 작성 팁</div>
          
          <div className="grid-container">
            <div className="card">
              <div className="card-title">
                <span style={{color: 'var(--primary-color)', marginRight: '8px'}}>📝</span>
                변수 활용하기
              </div>
              <p>개인화된 메시지를 위해 <code className='field-name'>${`{변수명}`}</code> 형태로 변수를 사용하세요.</p>
              <div className="code-example">
                <strong>예시:</strong><br/>
                안녕하세요 <code className='field-name'>${`{name}`}</code>님!<br/>
                주문번호 <code className='field-name'>${`{orderNo}`}</code>가 처리되었습니다.
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                <span style={{color: 'var(--success-color)', marginRight: '8px'}}>💡</span>
                SMS/LMS 자동 전환
              </div>
              <p>SMS 템플릿의 글자 수가 80바이트를 초과하면 자동으로 LMS로 전환됩니다.</p>
              <ul className="checklist">
                <li>한글 1글자 = 2바이트</li>
                <li>영문/숫자 1글자 = 1바이트</li>
                <li>80바이트 초과 시 LMS (2,000바이트 제한)</li>
              </ul>
            </div>

            <div className="card">
              <div className="card-title">
                <span style={{color: 'var(--warning-color)', marginRight: '8px'}}>⚠️</span>
                알림톡 승인 필요
              </div>
              <p>알림톡 템플릿은 카카오 승인 후 사용 가능합니다.</p>
              <ul className="checklist">
                <li>템플릿 등록 후 검수 진행 (1-2일 소요)</li>
                <li>승인 완료 후 발송 가능</li>
                <li>반려 시 수정 후 재신청 필요</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="usage-guide">사용 가이드</h2>
        <div className="card">
          <div className="card-title">단계별 템플릿 관리 방법</div>
          
          <div className="step-item">
            <div className="step-title">
              <div className="step-number">1</div>
              템플릿 유형 선택
            </div>
            <p>SMS/MMS 또는 알림톡 중 필요한 템플릿 유형을 선택합니다.</p>
            <ul className="checklist">
              <li><strong>SMS/MMS:</strong> 일반 휴대폰 문자메시지, 즉시 발송 가능</li>
              <li><strong>알림톡:</strong> 카카오톡 메시지, 승인 후 발송 가능</li>
            </ul>
          </div>

          <div className="step-item">
            <div className="step-title">
              <div className="step-number">2</div>
              템플릿 생성
            </div>
            <p>'새 템플릿 만들기' 버튼을 클릭하여 템플릿을 작성합니다.</p>
            <ul className="checklist">
              <li>템플릿 이름과 카테고리를 명확하게 지정</li>
              <li>메시지 내용에 변수 활용 (예: ${`{name}`, `{orderNo}`})</li>
              <li>알림톡의 경우 템플릿 코드와 유형 설정</li>
            </ul>
          </div>

          <div className="step-item">
            <div className="step-title">
              <div className="step-number">3</div>
              템플릿 관리
            </div>
            <p>생성된 템플릿을 편집하거나 삭제할 수 있습니다.</p>
            <ul className="checklist">
              <li>사용량 통계를 통해 효과적인 템플릿 파악</li>
              <li>정기적으로 내용 업데이트</li>
              <li>사용하지 않는 템플릿은 정리</li>
            </ul>
          </div>

          <div className="step-item">
            <div className="step-title">
              <div className="step-number">4</div>
              메시지 발송 시 활용
            </div>
            <p>SMS/MMS 발송 또는 알림톡 발송 시 저장된 템플릿을 선택하여 사용합니다.</p>
            <ul className="checklist">
              <li>템플릿 선택 후 변수값 자동 입력</li>
              <li>필요시 내용 수정 후 발송</li>
              <li>발송 결과를 바탕으로 템플릿 개선</li>
            </ul>
          </div>
        </div>

        <h2 id="variables-guide">변수 활용 가이드</h2>
        <div className="card">
          <div className="card-title">자주 사용하는 변수 예시</div>
          
          <div className="api-table">
            <table style={{width: '100%'}}>
              <thead>
                <tr>
                  <th>변수명</th>
                  <th>설명</th>
                  <th>사용 예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className='field-name'>name</code></td>
                  <td>고객 이름</td>
                  <td>안녕하세요 <code className='field-name'>${`{name}`}</code>님!</td>
                </tr>
                <tr>
                  <td><code className='field-name'>orderNo</code></td>
                  <td>주문번호</td>
                  <td>주문번호: <code className='field-name'>${`{orderNo}`}</code></td>
                </tr>
                <tr>
                  <td><code className='field-name'>amount</code></td>
                  <td>결제금액</td>
                  <td>결제금액: <code className='field-name'>${`{amount}`}</code>원</td>
                </tr>
                <tr>
                  <td><code className='field-name'>date</code></td>
                  <td>날짜</td>
                  <td><code className='field-name'>${`{date}`}</code>에 배송예정</td>
                </tr>
                <tr>
                  <td><code className='field-name'>trackingNo</code></td>
                  <td>운송장번호</td>
                  <td>운송장: <code className='field-name'>${`{trackingNo}`}</code></td>
                </tr>
                <tr>
                  <td><code className='field-name'>phone</code></td>
                  <td>전화번호</td>
                  <td>연락처: <code className='field-name'>${`{phone}`}</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 id="troubleshooting">문제 해결</h2>
        <div className="card">
          <div className="card-title">자주 발생하는 문제</div>
          
          <div className="card">
            <div className="card-title">Q. 알림톡이 발송되지 않습니다.</div>
            <p><strong>A.</strong> 다음 사항을 확인해보세요:</p>
            <ul className="checklist">
              <li>템플릿이 카카오에서 승인되었는지 확인</li>
              <li>템플릿 코드가 정확한지 확인</li>
              <li>변수값이 올바르게 입력되었는지 확인</li>
            </ul>
          </div>
          
          <div className="card">
            <div className="card-title">Q. 변수가 제대로 치환되지 않습니다.</div>
            <p><strong>A.</strong> 변수 형식을 확인해보세요:</p>
            <ul className="checklist">
              <li>올바른 형식: <code className='field-name'>${`{변수명}`}</code></li>
              <li>잘못된 형식: <code className='field-name'>${`{변수명}`}</code></li>
              <li>변수명에 공백이나 특수문자가 없는지 확인</li>
            </ul>
          </div>
          
          <div className="card">
            <div className="card-title">Q. SMS가 LMS로 자동 전환되지 않습니다.</div>
            <p><strong>A.</strong> 바이트 계산 규칙을 확인해보세요:</p>
            <ul className="checklist">
              <li>한글, 특수문자: 2바이트</li>
              <li>영문, 숫자: 1바이트</li>
              <li>80바이트 초과 시 LMS로 자동 전환</li>
            </ul>
          </div>
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">도움이 더 필요하신가요?</div>
          <p>템플릿 관리에 대해 궁금한 점이 있으시면 언제든 문의해주세요.</p>
          
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

export default MessageTemplatesPage;