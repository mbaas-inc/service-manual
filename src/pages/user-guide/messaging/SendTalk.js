import React, { useState, useRef } from 'react';

function SendTalkPage() {
  // 발송 설정
  const [selectedSender, setSelectedSender] = useState('');
  const [selectedRecipients, setSelectedRecipients] = useState([]);
  const [isRecipientModalOpen, setIsRecipientModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('groups');

  // 알림톡 전용 설정
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [talkType, setTalkType] = useState('basic'); // 알림톡 유형
  const [emphasisType, setEmphasisType] = useState('none'); // 강조유형
  const [buttons, setButtons] = useState([]); // 버튼 목록

  // 메시지 내용
  const [content, setContent] = useState('');

  // 샘플 데이터
  const groups = [
    { id: 1, name: '마케팅팀', count: 5 },
    { id: 2, name: '개발팀', count: 8 },
    { id: 3, name: '전체직원', count: 20 },
    { id: 4, name: 'VIP고객', count: 15 }
  ];

  const senderNumbers = [
    { id: 1, number: '02-1234-5678', name: '대표번호' },
    { id: 2, number: '070-1234-5678', name: '마케팅부' },
    { id: 3, number: '010-1234-5678', name: '개인번호' }
  ];

  const members = [
    { id: 1, name: '홍길동', phone: '010-1234-5678', description: '마케팅팀', groupId: 1 },
    { id: 2, name: '김영희', phone: '010-9876-5432', description: '개발팀', groupId: 2 },
    { id: 3, name: '박철수', phone: '010-5555-1234', description: '디자인팀', groupId: 2 },
    { id: 4, name: '이민수', phone: '010-1111-2222', description: 'VIP고객', groupId: 4 },
    { id: 5, name: '정수진', phone: '010-3333-4444', description: '마케팅팀', groupId: 1 }
  ];

  // 승인된 알림톡 템플릿 (SMS와 다르게 승인된 템플릿만 사용 가능)
  const approvedTemplates = [
    { 
      id: 1, 
      name: '주문 확인 알림', 
      category: '주문관리', 
      subCategory: '주문확인',
      content: '안녕하세요 #{고객명}님,\n주문이 정상적으로 접수되었습니다.\n\n주문번호: #{주문번호}\n주문금액: #{주문금액}원\n\n감사합니다.',
      status: 'approved',
      talkType: 'basic',
      emphasisType: 'none'
    },
    { 
      id: 2, 
      name: '배송 시작 알림', 
      category: '배송관리', 
      subCategory: '배송알림',
      content: '#{고객명}님의 상품이 발송되었습니다.\n\n운송장번호: #{운송장번호}\n배송업체: #{배송업체}\n\n배송조회를 통해 실시간 확인 가능합니다.',
      status: 'approved',
      talkType: 'additional',
      emphasisType: 'title'
    },
    { 
      id: 3, 
      name: '이벤트 참여 안내', 
      category: '마케팅', 
      subCategory: '이벤트',
      content: '#{고객명}님께 특별한 혜택을 드립니다!\n\n#{이벤트명} 이벤트에 참여하시고\n최대 #{할인율}% 할인받으세요.\n\n이벤트 기간: #{시작일} ~ #{종료일}',
      status: 'approved',
      talkType: 'channel',
      emphasisType: 'image'
    }
  ];

  // 알림톡 유형 옵션
  const talkTypes = [
    { value: 'basic', label: '기본형', description: '텍스트와 버튼으로 구성된 기본 알림톡' },
    { value: 'additional', label: '부가정보형', description: '추가 정보와 함께 제공되는 알림톡' },
    { value: 'channel', label: '채널 추가형', description: '채널 추가 버튼이 포함된 알림톡' },
    { value: 'complex', label: '복합형', description: '여러 요소가 결합된 복합 알림톡' }
  ];

  // 강조유형 옵션
  const emphasisTypes = [
    { value: 'none', label: '선택안함', description: '일반적인 텍스트 형태' },
    { value: 'title', label: '타이틀형', description: '제목이 강조된 형태' },
    { value: 'image', label: '이미지형', description: '이미지가 포함된 형태' },
    { value: 'itemlist', label: '아이템리스트형', description: '항목들이 리스트로 표시되는 형태' }
  ];

  // 버튼 타입 옵션
  const buttonTypes = [
    { value: 'weblink', label: '웹링크', needsUrl: true },
    { value: 'applink', label: '앱링크', needsUrl: true },
    { value: 'botkeyword', label: '봇키워드', needsUrl: false },
    { value: 'message', label: '메세지 전달', needsUrl: false },
    { value: 'delivery', label: '배송조회', needsUrl: true },
    { value: 'consult', label: '상담톡전환', needsUrl: false },
    { value: 'bot', label: '봇전환', needsUrl: false }
  ];

  // 모달 관련 함수들 (SMS와 동일)
  const openRecipientModal = () => setIsRecipientModalOpen(true);
  const closeRecipientModal = () => setIsRecipientModalOpen(false);

  const toggleRecipient = (recipient) => {
    setSelectedRecipients(prev => {
      const exists = prev.find(r => r.id === recipient.id);
      if (exists) {
        return prev.filter(r => r.id !== recipient.id);
      } else {
        return [...prev, recipient];
      }
    });
  };

  const addGroupRecipients = (groupId) => {
    const groupMembers = members.filter(member => member.groupId === groupId);
    setSelectedRecipients(prev => {
      const newRecipients = [...prev];
      groupMembers.forEach(member => {
        if (!newRecipients.find(r => r.id === member.id)) {
          newRecipients.push(member);
        }
      });
      return newRecipients;
    });
  };

  const removeRecipient = (recipientId) => {
    setSelectedRecipients(prev => prev.filter(r => r.id !== recipientId));
  };

  // 검색 필터링
  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.phone.includes(searchQuery) ||
    member.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 템플릿 선택 핸들러
  const handleTemplateSelect = (templateId) => {
    const template = approvedTemplates.find(t => t.id === parseInt(templateId));
    if (template) {
      setSelectedTemplate(templateId);
      setContent(template.content);
      setTalkType(template.talkType);
      setEmphasisType(template.emphasisType);
    } else {
      setSelectedTemplate('');
      setContent('');
      setTalkType('basic');
      setEmphasisType('none');
    }
  };

  // 버튼 추가
  const addButton = () => {
    if (buttons.length < 5) { // 최대 5개 버튼
      setButtons([...buttons, { 
        id: Date.now(), 
        type: 'weblink', 
        name: '', 
        url: '' 
      }]);
    }
  };

  // 버튼 수정
  const updateButton = (buttonId, field, value) => {
    setButtons(buttons.map(button => 
      button.id === buttonId ? { ...button, [field]: value } : button
    ));
  };

  // 버튼 삭제
  const removeButton = (buttonId) => {
    setButtons(buttons.filter(button => button.id !== buttonId));
  };

  return (
    <>
      <section id="main-content">
        <h1>알림톡 발송</h1>

        <p className="main-description">
          카카오톡 알림톡을 통해 고객에게 안전하고 신뢰성 높은 메시지를 발송할 수 있습니다. 승인된 템플릿만 사용 가능하며, 다양한 형태와 버튼을 설정할 수 있습니다.
        </p>

        <div className="alert alert-info">
          <strong>💡 관리자 팁:</strong> 
          알림톡은 사전에 승인받은 템플릿만 사용할 수 있습니다. 새로운 템플릿이 필요한 경우 먼저 승인 신청을 해주세요.
        </div>

        <h2 id="talk-overview">알림톡 개요</h2>
        <div className="card">
          <div className="card-title">알림톡의 특징</div>
          
          <div className="grid-container">
            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">✅</span>
                높은 신뢰성
              </div>
              <p><strong>기업 인증:</strong> 카카오에서 인증한 기업만 발송 가능</p>
              <p><strong>스팸 방지:</strong> 승인된 템플릿만 사용하여 스팸 차단</p>
              <ul className="checklist">
                <li>카카오톡 공식 채널을 통한 발송</li>
                <li>수신자가 안심하고 확인 가능</li>
                <li>높은 도달률과 열람률</li>
              </ul>
            </div>

            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">🎨</span>
                다양한 형태
              </div>
              <p><strong>유형:</strong> 기본형, 부가정보형, 채널 추가형, 복합형</p>
              <p><strong>강조:</strong> 타이틀, 이미지, 아이템리스트 등</p>
              <ul className="checklist">
                <li>목적에 맞는 다양한 레이아웃</li>
                <li>시각적 강조 효과</li>
                <li>사용자 경험 최적화</li>
              </ul>
            </div>

            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">🔘</span>
                다양한 버튼
              </div>
              <p><strong>버튼 타입:</strong> 웹링크, 앱링크, 상담톡전환 등</p>
              <p><strong>개수:</strong> 최대 5개까지 설정 가능</p>
              <ul className="checklist">
                <li>고객 행동 유도 효과</li>
                <li>편리한 추가 서비스 연결</li>
                <li>전환율 향상</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="send-settings">발송 설정</h2>
        <div className="card">
          <div className="card-title">발송 대상 및 발신번호 설정</div>
          
          <div style={{display: 'grid', gap: '20px'}}>
            <div>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>
                발송 대상 선택
              </label>
              
              <div style={{marginBottom: '12px'}}>
                <button 
                  className="btn btn-secondary"
                  onClick={openRecipientModal}
                  style={{width: '100%', justifyContent: 'space-between'}}
                >
                  <span>
                    {selectedRecipients.length > 0 
                      ? `${selectedRecipients.length}명 선택됨` 
                      : '발송 대상을 선택하세요'
                    }
                  </span>
                  <span>📋</span>
                </button>
              </div>

              {selectedRecipients.length > 0 && (
                <div className="card" style={{background: 'var(--bg-secondary)', marginBottom: '16px'}}>
                  <div className="card-title" style={{fontSize: '1rem', marginBottom: '12px'}}>
                    선택된 발송 대상 ({selectedRecipients.length}명)
                  </div>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                    {selectedRecipients.map(recipient => (
                      <div key={recipient.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'white',
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.9rem',
                        border: '1px solid var(--border-light)'
                      }}>
                        <span>{recipient.name} ({recipient.phone})</span>
                        <button
                          onClick={() => removeRecipient(recipient.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-muted)',
                            cursor: 'pointer',
                            padding: '0',
                            fontSize: '0.8rem'
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>
                발신번호 선택
              </label>
              <select
                value={selectedSender}
                onChange={(e) => setSelectedSender(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '14px'
                }}
              >
                <option value="">발신번호를 선택하세요</option>
                {senderNumbers.map(sender => (
                  <option key={sender.id} value={sender.id}>
                    {sender.number} ({sender.name})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <h2 id="template-selection">승인된 템플릿 선택</h2>
        <div className="card">
          <div className="card-title">사전 승인받은 템플릿만 사용 가능</div>
          <p>알림톡은 카카오에서 승인받은 템플릿만 사용할 수 있습니다. 승인 상태를 확인하고 적절한 템플릿을 선택하세요.</p>
          
          <div style={{marginBottom: '20px'}}>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>
              템플릿 선택 <span style={{color: 'red'}}>*필수</span>
            </label>
            <select
              value={selectedTemplate}
              onChange={(e) => handleTemplateSelect(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                fontSize: '14px'
              }}
            >
              <option value="">승인된 템플릿을 선택하세요</option>
              {approvedTemplates.map(template => (
                <option key={template.id} value={template.id}>
                  [{template.status === 'approved' ? '승인완료' : '승인대기'}] {template.name} ({template.category})
                </option>
              ))}
            </select>
          </div>

          {selectedTemplate && (
            <div className="alert alert-success">
              <strong>✅ 승인된 템플릿이 선택되었습니다!</strong><br/>
              알림톡 유형과 강조유형이 자동으로 설정되었으며, 메시지 내용이 입력되었습니다.
            </div>
          )}
        </div>

        <h2 id="talk-type-settings">알림톡 유형 설정</h2>
        <div className="card">
          <div className="card-title">알림톡 유형 및 강조유형 선택</div>
          
          <div style={{display: 'grid', gap: '20px'}}>
            <div>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>
                알림톡 유형
              </label>
              <div className="grid-container">
                {talkTypes.map(type => (
                  <label key={type.value} className="checkbox-item" style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '16px',
                    border: talkType === type.value ? '2px solid var(--primary-color)' : '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    background: talkType === type.value ? 'rgba(59, 130, 246, 0.05)' : 'white'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                      <input
                        type="radio"
                        name="talkType"
                        value={type.value}
                        checked={talkType === type.value}
                        onChange={(e) => setTalkType(e.target.value)}
                      />
                      <strong>{type.label}</strong>
                    </div>
                    <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                      {type.description}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>
                강조유형
              </label>
              <div className="grid-container">
                {emphasisTypes.map(type => (
                  <label key={type.value} className="checkbox-item" style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '16px',
                    border: emphasisType === type.value ? '2px solid var(--primary-color)' : '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    background: emphasisType === type.value ? 'rgba(59, 130, 246, 0.05)' : 'white'
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
                      <input
                        type="radio"
                        name="emphasisType"
                        value={type.value}
                        checked={emphasisType === type.value}
                        onChange={(e) => setEmphasisType(e.target.value)}
                      />
                      <strong>{type.label}</strong>
                    </div>
                    <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                      {type.description}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <h2 id="message-content">메시지 내용</h2>
        <div className="card">
          <div className="card-title">승인된 템플릿 내용</div>
          
          <div style={{marginBottom: '16px'}}>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>
              메시지 내용 <span style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>(템플릿 선택 시 자동 입력)</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="승인된 템플릿을 선택하면 내용이 자동으로 입력됩니다"
              rows="8"
              disabled={!selectedTemplate}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                fontSize: '14px',
                resize: 'vertical',
                backgroundColor: !selectedTemplate ? 'var(--bg-secondary)' : 'white'
              }}
            />
            
            {!selectedTemplate && (
              <div className="alert alert-warning" style={{marginTop: '8px'}}>
                <strong>⚠️ 템플릿 선택 필요:</strong> 
                알림톡은 사전에 승인받은 템플릿만 사용할 수 있습니다. 먼저 템플릿을 선택해주세요.
              </div>
            )}
          </div>
        </div>

        <h2 id="button-settings">버튼 설정</h2>
        <div className="card">
          <div className="card-title">
            알림톡 버튼 설정 (최대 5개)
            <button 
              className="btn btn-primary"
              onClick={addButton}
              disabled={buttons.length >= 5}
              style={{marginLeft: '12px', padding: '6px 12px', fontSize: '0.8rem'}}
            >
              버튼 추가
            </button>
          </div>
          
          {buttons.length === 0 ? (
            <div style={{
              textAlign: 'center',
              color: 'var(--text-muted)',
              padding: '40px 20px',
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)'
            }}>
              버튼을 추가하여 사용자 행동을 유도할 수 있습니다
            </div>
          ) : (
            <div style={{display: 'grid', gap: '16px'}}>
              {buttons.map((button, index) => (
                <div key={button.id} className="card" style={{background: 'var(--bg-secondary)'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
                    <div className="card-title" style={{margin: 0, fontSize: '1rem'}}>
                      버튼 {index + 1}
                    </div>
                    <button
                      onClick={() => removeButton(button.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        cursor: 'pointer',
                        fontSize: '1.2rem'
                      }}
                    >
                      ✕
                    </button>
                  </div>
                  
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px'}}>
                    <div>
                      <label style={{display: 'block', marginBottom: '4px', fontWeight: '600', fontSize: '0.9rem'}}>
                        버튼 타입
                      </label>
                      <select
                        value={button.type}
                        onChange={(e) => updateButton(button.id, 'type', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '8px',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.9rem'
                        }}
                      >
                        {buttonTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label style={{display: 'block', marginBottom: '4px', fontWeight: '600', fontSize: '0.9rem'}}>
                        버튼명
                      </label>
                      <input
                        type="text"
                        value={button.name}
                        onChange={(e) => updateButton(button.id, 'name', e.target.value)}
                        placeholder="버튼에 표시될 텍스트"
                        style={{
                          width: '100%',
                          padding: '8px',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>
                  </div>
                  
                  {buttonTypes.find(t => t.value === button.type)?.needsUrl && (
                    <div>
                      <label style={{display: 'block', marginBottom: '4px', fontWeight: '600', fontSize: '0.9rem'}}>
                        링크 URL
                      </label>
                      <input
                        type="url"
                        value={button.url}
                        onChange={(e) => updateButton(button.id, 'url', e.target.value)}
                        placeholder="https://example.com"
                        style={{
                          width: '100%',
                          padding: '8px',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <h2 id="send-preview">발송 미리보기</h2>
        <div className="card">
          <div className="card-title">알림톡 발송 내용 확인</div>
          
          <div className="card" style={{background: 'var(--bg-secondary)'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
              <div className="card-title" style={{margin: 0}}>미리보기</div>
              <span className="status-badge success">알림톡</span>
            </div>
            
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              fontFamily: 'inherit'
            }}>
              <div style={{
                color: 'var(--text-primary)',
                lineHeight: '1.6',
                marginBottom: buttons.length > 0 ? '16px' : '0',
                whiteSpace: 'pre-line'
              }}>
                {content || '승인된 템플릿을 선택하면 내용이 여기에 표시됩니다.'}
              </div>
              
              {buttons.length > 0 && (
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  {buttons.map((button, index) => (
                    <div key={button.id} style={{
                      padding: '12px',
                      background: 'var(--bg-secondary)',
                      borderRadius: 'var(--radius-sm)',
                      textAlign: 'center',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      color: 'var(--primary-color)',
                      border: '1px solid var(--border-light)'
                    }}>
                      {button.name || `버튼 ${index + 1}`}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div style={{marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
              <div>발송 대상: {selectedRecipients.length > 0 ? `${selectedRecipients.length}명` : '미선택'}</div>
              <div>발신번호: {selectedSender ? senderNumbers.find(s => s.id == selectedSender)?.number : '미선택'}</div>
              <div>알림톡 유형: {talkTypes.find(t => t.value === talkType)?.label}</div>
              <div>강조유형: {emphasisTypes.find(t => t.value === emphasisType)?.label}</div>
              <div>버튼 개수: {buttons.length}개</div>
            </div>
          </div>
          
          <div style={{display: 'flex', gap: '12px', marginTop: '20px'}}>
            <button 
              className="btn btn-primary" 
              style={{flex: 1}}
              disabled={!selectedTemplate || selectedRecipients.length === 0}
            >
              지금 발송
            </button>
            {/* <button className="btn btn-secondary">
              예약 발송
            </button>
            <button className="btn btn-secondary">
              임시저장
            </button> */}
          </div>
        </div>

        <h2 id="usage-guide">사용 가이드</h2>
        <div className="card">
          <div className="card-title">단계별 알림톡 발송 방법</div>
          
          <div className="step-item">
            <div className="step-title">
              <div className="step-number">1</div>
              발송 설정
            </div>
            <p>메시지를 받을 대상과 발신번호를 선택합니다.</p>
            <ul className="checklist">
              <li>발송 대상 선택 버튼 클릭하여 모달 열기</li>
              <li>왼쪽에서 그룹 또는 개별 구성원 선택</li>
              <li>오른쪽 발송 대상 목록에서 최종 확인 후 적용</li>
              <li>적절한 발신번호 선택 (대표번호, 부서번호 등)</li>
            </ul>
          </div>

          <div className="step-item">
            <div className="step-title">
              <div className="step-number">2</div>
              승인된 템플릿 선택
            </div>
            <p>카카오에서 승인받은 템플릿만 사용할 수 있습니다.</p>
            <ul className="checklist">
              <li>승인완료 상태인 템플릿만 선택 가능</li>
              <li>템플릿 선택 시 내용과 유형이 자동 설정</li>
              <li>새로운 템플릿이 필요한 경우 별도 승인 신청</li>
            </ul>
          </div>

          <div className="step-item">
            <div className="step-title">
              <div className="step-number">3</div>
              알림톡 유형 및 강조유형 설정
            </div>
            <p>알림톡의 형태와 강조 방식을 선택합니다.</p>
            <ul className="checklist">
              <li>기본형, 부가정보형, 채널 추가형, 복합형 중 선택</li>
              <li>강조유형: 타이틀형, 이미지형, 아이템리스트형 등</li>
              <li>템플릿에 따라 자동 설정되며 수정 가능</li>
            </ul>
          </div>

          <div className="step-item">
            <div className="step-title">
              <div className="step-number">4</div>
              버튼 설정 (선택사항)
            </div>
            <p>사용자 행동을 유도할 버튼을 추가합니다.</p>
            <ul className="checklist">
              <li>최대 5개까지 버튼 추가 가능</li>
              <li>웹링크, 앱링크, 상담톡전환 등 다양한 타입</li>
              <li>버튼명과 링크 URL 설정</li>
            </ul>
          </div>

          <div className="step-item">
            <div className="step-title">
              <div className="step-number">5</div>
              발송 확인 및 전송
            </div>
            <p>미리보기로 내용을 확인한 후 발송합니다.</p>
            <ul className="checklist">
              <li>알림톡 형태로 미리보기 확인</li>
              <li>발송 내용과 대상 최종 점검</li>
              <li>즉시 발송 또는 예약 발송 선택</li>
            </ul>
          </div>
        </div>

        <h2 id="troubleshooting">문제 해결</h2>
        <div className="card">
          <div className="card-title">자주 발생하는 문제</div>
          
          <div className="card">
            <div className="card-title">Q. 템플릿이 보이지 않아요.</div>
            <p><strong>A.</strong> 승인완료된 템플릿만 사용할 수 있습니다. 템플릿 관리에서 승인 상태를 확인하거나 새로운 템플릿을 신청해주세요.</p>
          </div>
          
          <div className="card">
            <div className="card-title">Q. 템플릿 내용을 수정할 수 있나요?</div>
            <p><strong>A.</strong> 승인받은 템플릿의 내용은 수정할 수 없습니다. 다른 내용이 필요한 경우 새로운 템플릿을 만들어 승인받아야 합니다.</p>
          </div>
          
          <div className="card">
            <div className="card-title">Q. 버튼이 작동하지 않아요.</div>
            <p><strong>A.</strong> 웹링크나 앱링크 버튼의 경우 올바른 URL을 입력했는지 확인해주세요. URL은 http:// 또는 https://로 시작해야 합니다.</p>
          </div>
          
          <div className="card">
            <div className="card-title">Q. 알림톡과 SMS의 차이점은 무엇인가요?</div>
            <p><strong>A.</strong> 알림톡은 카카오톡을 통해 발송되어 높은 신뢰성을 제공하며, 승인된 템플릿만 사용 가능합니다. SMS는 자유로운 내용 작성이 가능하지만 스팸으로 분류될 위험이 있습니다.</p>
          </div>
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">도움이 더 필요하신가요?</div>
          <p>알림톡 발송에 대해 궁금한 점이 있으시면 언제든 문의해주세요.</p>
          
          <div className="grid-container">
            <div className="card">
              <div className="card-title">📧 이메일 문의</div>
              <p>support@mbaas.com</p>
              <p>24시간 접수 가능</p>
            </div>
          </div>
        </div>

        {/* 발송 대상 선택 모달 (SMS와 동일) */}
        {isRecipientModalOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: 'var(--radius-lg)',
              width: '90%',
              maxWidth: '1000px',
              height: '80%',
              maxHeight: '700px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                borderBottom: '1px solid var(--border-color)'
              }}>
                <h3 style={{margin: 0, color: 'var(--text-primary)'}}>발송 대상 선택</h3>
                <button
                  onClick={closeRecipientModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    color: 'var(--text-muted)'
                  }}
                >
                  ✕
                </button>
              </div>

              <div style={{
                display: 'flex',
                flex: 1,
                overflow: 'hidden'
              }}>
                <div style={{
                  flex: 1,
                  padding: '20px',
                  borderRight: '1px solid var(--border-color)',
                  overflow: 'auto',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <h4 style={{marginTop: 0, color: 'var(--text-primary)'}}>그룹 및 구성원</h4>
                  
                  <div style={{marginBottom: '20px'}}>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="그룹명, 이름, 전화번호, 부서로 검색..."
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  <div style={{
                    display: 'flex',
                    marginBottom: '20px',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-md)',
                    padding: '4px'
                  }}>
                    <button
                      onClick={() => setActiveTab('groups')}
                      style={{
                        flex: 1,
                        padding: '8px 16px',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        background: activeTab === 'groups' ? 'var(--primary-color)' : 'transparent',
                        color: activeTab === 'groups' ? 'white' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        transition: 'all 0.2s'
                      }}
                    >
                      그룹 ({filteredGroups.length})
                    </button>
                    <button
                      onClick={() => setActiveTab('members')}
                      style={{
                        flex: 1,
                        padding: '8px 16px',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        background: activeTab === 'members' ? 'var(--primary-color)' : 'transparent',
                        color: activeTab === 'members' ? 'white' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        transition: 'all 0.2s'
                      }}
                    >
                      구성원 ({filteredMembers.length})
                    </button>
                  </div>

                  <div style={{flex: 1, overflow: 'auto'}}>
                    {activeTab === 'groups' && (
                      <div>
                        {filteredGroups.length === 0 ? (
                          <div style={{
                            textAlign: 'center',
                            color: 'var(--text-muted)',
                            padding: '40px 20px'
                          }}>
                            {searchQuery ? '검색 결과가 없습니다' : '그룹이 없습니다'}
                          </div>
                        ) : (
                          filteredGroups.map(group => (
                            <div key={group.id} style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              padding: '12px',
                              background: 'var(--bg-secondary)',
                              borderRadius: 'var(--radius-md)',
                              marginBottom: '8px'
                            }}>
                              <div>
                                <strong>{group.name}</strong>
                                <span style={{color: 'var(--text-secondary)', marginLeft: '8px'}}>
                                  ({group.count}명)
                                </span>
                              </div>
                              <button
                                className="btn btn-primary"
                                style={{padding: '6px 12px', fontSize: '0.8rem'}}
                                onClick={() => addGroupRecipients(group.id)}
                              >
                                그룹 추가
                              </button>
                            </div>
                          ))
                        )}
                      </div>
                    )}

                    {activeTab === 'members' && (
                      <div>
                        {filteredMembers.length === 0 ? (
                          <div style={{
                            textAlign: 'center',
                            color: 'var(--text-muted)',
                            padding: '40px 20px'
                          }}>
                            {searchQuery ? '검색 결과가 없습니다' : '구성원이 없습니다'}
                          </div>
                        ) : (
                          filteredMembers.map(member => (
                            <div key={member.id} style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              padding: '12px',
                              background: selectedRecipients.find(r => r.id === member.id) 
                                ? 'rgba(59, 130, 246, 0.1)' 
                                : 'var(--bg-secondary)',
                              borderRadius: 'var(--radius-md)',
                              marginBottom: '8px',
                              border: selectedRecipients.find(r => r.id === member.id) 
                                ? '1px solid var(--primary-color)' 
                                : '1px solid var(--border-light)'
                            }}>
                              <div>
                                <div><strong>{member.name}</strong></div>
                                <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                                  {member.phone} | {member.description}
                                </div>
                              </div>
                              <button
                                className={`btn ${selectedRecipients.find(r => r.id === member.id) ? 'btn-primary' : 'btn-secondary'}`}
                                style={{padding: '6px 12px', fontSize: '0.8rem'}}
                                onClick={() => toggleRecipient(member)}
                              >
                                {selectedRecipients.find(r => r.id === member.id) ? '선택됨' : '선택'}
                              </button>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div style={{
                  flex: 1,
                  padding: '20px',
                  overflow: 'auto'
                }}>
                  <h4 style={{marginTop: 0, color: 'var(--text-primary)'}}>
                    선택된 발송 대상 ({selectedRecipients.length}명)
                  </h4>
                  
                  {selectedRecipients.length === 0 ? (
                    <div style={{
                      textAlign: 'center',
                      color: 'var(--text-muted)',
                      padding: '40px 20px'
                    }}>
                      발송 대상을 선택해주세요
                    </div>
                  ) : (
                    <div>
                      {selectedRecipients.map(recipient => (
                        <div key={recipient.id} style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '12px',
                          background: 'var(--bg-primary)',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          marginBottom: '8px'
                        }}>
                          <div>
                            <div><strong>{recipient.name}</strong></div>
                            <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                              {recipient.phone} | {recipient.description}
                            </div>
                          </div>
                          <button
                            onClick={() => removeRecipient(recipient.id)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'var(--text-muted)',
                              cursor: 'pointer',
                              padding: '4px',
                              borderRadius: '4px',
                              fontSize: '1.2rem'
                            }}
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                borderTop: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)'
              }}>
                <div style={{color: 'var(--text-secondary)'}}>
                  총 {selectedRecipients.length}명 선택됨
                </div>
                <div style={{display: 'flex', gap: '12px'}}>
                  <button className="btn btn-secondary" onClick={closeRecipientModal}>
                    취소
                  </button>
                  <button className="btn btn-primary" onClick={closeRecipientModal}>
                    선택 완료 ({selectedRecipients.length}명)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default SendTalkPage;