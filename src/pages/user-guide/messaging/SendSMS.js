import React, { useState, useRef } from 'react';

function SendSMSPage() {
  // 발송 설정
  const [selectedSender, setSelectedSender] = useState('');
  const [selectedRecipients, setSelectedRecipients] = useState([]);
  const [isRecipientModalOpen, setIsRecipientModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('groups'); // 'groups' or 'members'

  // 템플릿 및 카테고리
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  // 메시지 내용
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [attachedImage, setAttachedImage] = useState(null);
  
  // 메시지 타입 (자동 계산)
  const [messageType, setMessageType] = useState('SMS');
  
  const fileInputRef = useRef(null);

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

  const templates = [
    { 
      id: 1, 
      name: '할인 이벤트 알림', 
      category: '마케팅', 
      subCategory: '할인/쿠폰',
      content: '[이벤트] 50% 할인 이벤트가 시작되었습니다! 지금 바로 확인해보세요.',
      title: '특별 할인 이벤트'
    },
    { 
      id: 2, 
      name: '회의 일정 안내', 
      category: '업무', 
      subCategory: '회의/일정',
      content: '내일 오후 2시 회의실 A에서 정기회의가 있습니다. 참석 부탁드립니다.',
      title: '회의 일정 안내'
    },
    { 
      id: 3, 
      name: '배송 완료 알림', 
      category: '고객서비스', 
      subCategory: '주문/배송',
      content: '주문하신 상품이 배송 완료되었습니다. 이용해주셔서 감사합니다.',
      title: '배송 완료'
    }
  ];

  // 바이트 계산 함수 (한글 2바이트, 영문 1바이트)
  const getByteLength = (str) => {
    let byte = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 127) {
        byte += 2;
      } else {
        byte += 1;
      }
    }
    return byte;
  };

  // 메시지 타입 자동 결정
  const updateMessageType = (content, hasImage) => {
    if (hasImage) {
      setMessageType('MMS');
    } else {
      const byteLength = getByteLength(content);
      if (byteLength <= 80) {
        setMessageType('SMS');
      } else if (byteLength <= 2000) {
        setMessageType('LMS');
      } else {
        setMessageType('MMS');
      }
    }
  };

  // 내용 변경 핸들러
  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    updateMessageType(newContent, attachedImage !== null);
  };

  // 템플릿 선택 핸들러
  const handleTemplateSelect = (templateId) => {
    const template = templates.find(t => t.id === parseInt(templateId));
    if (template) {
      setSelectedTemplate(templateId);
      setCategory(template.category);
      setSubCategory(template.subCategory);
      setContent(template.content);
      setTitle(template.title);
      updateMessageType(template.content, attachedImage !== null);
    } else {
      setSelectedTemplate('');
      setCategory('');
      setSubCategory('');
    }
  };

  // 이미지 첨부 핸들러
  const handleImageAttach = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachedImage(file);
      updateMessageType(content, true);
    }
  };

  // 이미지 제거 핸들러
  const handleImageRemove = () => {
    setAttachedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    updateMessageType(content, false);
  };

  const currentByteLength = getByteLength(content);

  // 모달 관련 함수들
  const openRecipientModal = () => {
    setIsRecipientModalOpen(true);
  };

  const closeRecipientModal = () => {
    setIsRecipientModalOpen(false);
  };

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

  // 검색 필터링 함수
  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.phone.includes(searchQuery) ||
    member.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section id="main-content">
        <h1>SMS/MMS 발송</h1>

        <p className="main-description">
          SMS, LMS, MMS 메시지를 간편하게 발송할 수 있습니다. 메시지 길이와 이미지 첨부 여부에 따라 자동으로 메시지 타입이 결정됩니다.
        </p>

        <div className="alert alert-info">
          <strong>💡 관리자 팁:</strong> 
          메시지 내용이 80바이트를 초과하면 자동으로 LMS로 전환되며, 이미지를 첨부하면 MMS로 전환됩니다.
        </div>

        <h2 id="message-types">메시지 타입 안내</h2>
        <div className="card">
          <div className="card-title">SMS, LMS, MMS 구분</div>
          
          <div className="grid-container">
            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">📱</span>
                SMS (Short Message Service)
              </div>
              <p><strong>용량:</strong> 80바이트 (한글 40자, 영문 80자)</p>
              <p><strong>특징:</strong> 가장 기본적인 문자 메시지</p>
              <p><strong>요금:</strong> 가장 저렴</p>
              <ul className="checklist">
                <li>제목 전송 불가</li>
                <li>텍스트만 전송 가능</li>
                <li>짧은 안내 메시지에 적합</li>
              </ul>
            </div>

            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">📄</span>
                LMS (Long Message Service)
              </div>
              <p><strong>용량:</strong> 2,000바이트 (한글 1,000자, 영문 2,000자)</p>
              <p><strong>특징:</strong> 긴 내용의 문자 메시지</p>
              <p><strong>요금:</strong> SMS보다 높음</p>
              <ul className="checklist">
                <li>제목 전송 가능</li>
                <li>긴 텍스트 전송 가능</li>
                <li>상세한 안내문에 적합</li>
              </ul>
            </div>

            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">🖼️</span>
                MMS (Multimedia Message Service)
              </div>
              <p><strong>용량:</strong> 2,000바이트 + 이미지</p>
              <p><strong>특징:</strong> 이미지와 함께 전송하는 멀티미디어 메시지</p>
              <p><strong>요금:</strong> 가장 높음</p>
              <ul className="checklist">
                <li>제목 전송 가능</li>
                <li>이미지 첨부 가능</li>
                <li>마케팅, 홍보용에 적합</li>
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

        <h2 id="template-selection">템플릿 선택</h2>
        <div className="card">
          <div className="card-title">미리 작성된 템플릿 사용</div>
          <p>자주 사용하는 메시지는 템플릿으로 저장하여 빠르게 사용할 수 있습니다.</p>
          
          <div style={{marginBottom: '20px'}}>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>
              템플릿 선택 (선택사항)
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
              <option value="">템플릿을 선택하세요 (직접 입력도 가능)</option>
              {templates.map(template => (
                <option key={template.id} value={template.id}>
                  {template.name} ({template.category} &gt; {template.subCategory})
                </option>
              ))}
            </select>
          </div>

          {selectedTemplate && (
            <div className="alert alert-success">
              <strong>✅ 템플릿이 적용되었습니다!</strong><br/>
              카테고리와 서브카테고리가 자동으로 설정되었으며, 제목과 내용이 입력되었습니다.
            </div>
          )}
        </div>

        <h2 id="category-settings">카테고리 설정</h2>
        <div className="card">
          <div className="card-title">메시지 분류</div>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
            <div>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>
                카테고리
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="예: 마케팅, 업무, 고객서비스"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '14px'
                }}
              />
            </div>
            <div>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>
                서브카테고리
              </label>
              <input
                type="text"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                placeholder="예: 할인/쿠폰, 회의/일정, 주문/배송"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '14px'
                }}
              />
            </div>
          </div>
        </div>

        <h2 id="message-content">메시지 작성</h2>
        <div className="card">
          <div className="card-title">
            제목 및 내용 입력
            <span style={{
              background: messageType === 'SMS' ? '#10b981' : messageType === 'LMS' ? '#f59e0b' : '#ef4444',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '0.8rem',
              marginLeft: '12px'
            }}>
              현재: {messageType}
            </span>
          </div>
          
          <div style={{marginBottom: '16px'}}>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>
              제목 {messageType === 'SMS' && <span style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>(SMS는 제목이 전송되지 않습니다)</span>}
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={messageType === 'SMS' ? '제목은 SMS에서 전송되지 않습니다' : '메시지 제목을 입력하세요'}
              disabled={messageType === 'SMS'}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                fontSize: '14px',
                backgroundColor: messageType === 'SMS' ? 'var(--bg-secondary)' : 'white'
              }}
            />
          </div>

          <div style={{marginBottom: '16px'}}>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>
              메시지 내용
              <span style={{float: 'right', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                {currentByteLength} / {messageType === 'SMS' ? '80' : '2,000'} 바이트
              </span>
            </label>
            <textarea
              value={content}
              onChange={handleContentChange}
              placeholder="메시지 내용을 입력하세요"
              rows="6"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                fontSize: '14px',
                resize: 'vertical'
              }}
            />
            
            {currentByteLength > 80 && messageType !== 'MMS' && (
              <div className="alert alert-warning" style={{marginTop: '8px'}}>
                <strong>⚠️ 자동 전환:</strong> 
                내용이 80바이트를 초과하여 LMS로 자동 전환되었습니다. (추가 요금 발생)
              </div>
            )}
            
            {currentByteLength > 2000 && (
              <div className="alert alert-warning" style={{marginTop: '8px'}}>
                <strong>⚠️ 용량 초과:</strong> 
                내용이 2,000바이트를 초과했습니다. 내용을 줄이거나 MMS로 전송하세요.
              </div>
            )}
          </div>

          <div>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>
              이미지 첨부 (MMS 전환)
            </label>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageAttach}
                style={{display: 'none'}}
              />
              <button
                className="btn btn-secondary"
                onClick={() => fileInputRef.current?.click()}
              >
                이미지 선택
              </button>
              
              {attachedImage && (
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <span style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                    {attachedImage.name}
                  </span>
                  <button
                    className="btn btn-secondary"
                    style={{padding: '4px 8px', fontSize: '0.8rem'}}
                    onClick={handleImageRemove}
                  >
                    제거
                  </button>
                </div>
              )}
            </div>
            
            {attachedImage && (
              <div className="alert alert-info" style={{marginTop: '8px'}}>
                <strong>📷 MMS 전환:</strong> 
                이미지가 첨부되어 MMS로 자동 전환되었습니다. (추가 요금 발생)
              </div>
            )}
          </div>
        </div>

        <h2 id="send-preview">발송 미리보기</h2>
        <div className="card">
          <div className="card-title">발송 내용 확인</div>
          
          <div className="card" style={{background: 'var(--bg-secondary)'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
              <div className="card-title" style={{margin: 0}}>미리보기</div>
              <span className="status-badge success">{messageType}</span>
            </div>
            
            <div style={{background: 'white', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)'}}>
              {(messageType === 'LMS' || messageType === 'MMS') && title && (
                <div style={{fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)'}}>
                  {title}
                </div>
              )}
              
              <div style={{color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: attachedImage ? '12px' : '0'}}>
                {content || '메시지 내용이 여기에 표시됩니다.'}
              </div>
              
              {attachedImage && (
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: 'var(--bg-tertiary)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)'
                }}>
                  📷 이미지
                </div>
              )}
            </div>
            
            <div style={{marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
              <div>발송 대상: {selectedRecipients.length > 0 ? `${selectedRecipients.length}명` : '미선택'}</div>
              <div>발신번호: {selectedSender ? senderNumbers.find(s => s.id == selectedSender)?.number : '미선택'}</div>
              <div>메시지 타입: {messageType} ({currentByteLength}바이트)</div>
            </div>
          </div>
          
          <div style={{display: 'flex', gap: '12px', marginTop: '20px'}}>
            <button className="btn btn-primary" style={{flex: 1}}>
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
          <div className="card-title">단계별 발송 방법</div>
          
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
              템플릿 활용 (선택사항)
            </div>
            <p>자주 사용하는 메시지는 템플릿을 선택하여 빠르게 작성합니다.</p>
            <ul className="checklist">
              <li>템플릿 선택 시 카테고리, 서브카테고리 자동 입력</li>
              <li>제목과 내용도 자동으로 채워짐</li>
              <li>필요시 내용 수정 가능</li>
            </ul>
          </div>

          <div className="step-item">
            <div className="step-title">
              <div className="step-number">3</div>
              메시지 작성
            </div>
            <p>제목과 내용을 입력하며, 필요시 이미지를 첨부합니다.</p>
            <ul className="checklist">
              <li>SMS: 80바이트 이하, 제목 전송 불가</li>
              <li>LMS: 2,000바이트 이하, 제목 전송 가능</li>
              <li>MMS: 이미지 첨부 시 자동 전환</li>
              <li>바이트 수가 초과되면 자동으로 상위 타입으로 전환</li>
            </ul>
          </div>

          <div className="step-item">
            <div className="step-title">
              <div className="step-number">4</div>
              발송 확인 및 전송
            </div>
            <p>미리보기로 내용을 확인한 후 발송합니다.</p>
            <ul className="checklist">
              <li>발송 내용과 대상 최종 확인</li>
              <li>즉시 발송 또는 예약 발송 선택</li>
              <li>임시저장으로 나중에 발송 가능</li>
            </ul>
          </div>
        </div>

        <h2 id="troubleshooting">문제 해결</h2>
        <div className="card">
          <div className="card-title">자주 발생하는 문제</div>
          
          <div className="card">
            <div className="card-title">Q. SMS로 작성했는데 LMS로 자동 전환되었어요.</div>
            <p><strong>A.</strong> 메시지 내용이 80바이트(한글 40자)를 초과하면 자동으로 LMS로 전환됩니다. 더 짧게 작성하거나 LMS 요금을 확인하세요.</p>
          </div>
          
          <div className="card">
            <div className="card-title">Q. 이미지를 첨부했는데 MMS 요금이 비싸요.</div>
            <p><strong>A.</strong> MMS는 SMS/LMS보다 요금이 높습니다. 꼭 필요한 경우에만 이미지를 첨부하세요. 이미지 제거 버튼으로 LMS로 변경할 수 있습니다.</p>
          </div>
          
          <div className="card">
            <div className="card-title">Q. 템플릿을 선택했는데 내용을 수정할 수 있나요?</div>
            <p><strong>A.</strong> 네, 템플릿 선택 후에도 제목, 내용, 카테고리를 자유롭게 수정할 수 있습니다. 템플릿은 시작점 역할을 합니다.</p>
          </div>
          
          <div className="card">
            <div className="card-title">Q. SMS에서 제목이 전송되지 않는 이유는?</div>
            <p><strong>A.</strong> SMS는 용량 제한(80바이트)으로 인해 제목을 지원하지 않습니다. 제목이 필요한 경우 LMS 이상을 사용하세요.</p>
          </div>
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">도움이 더 필요하신가요?</div>
          <p>SMS/MMS 발송에 대해 궁금한 점이 있으시면 언제든 문의해주세요.</p>
          
          <div className="grid-container">
            <div className="card">
              <div className="card-title">📧 이메일 문의</div>
              <p>support@mbaas.com</p>
              <p>24시간 접수 가능</p>
            </div>
          </div>
        </div>

        {/* 발송 대상 선택 모달 */}
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
              {/* 모달 헤더 */}
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

              {/* 모달 본문 */}
              <div style={{
                display: 'flex',
                flex: 1,
                overflow: 'hidden'
              }}>
                {/* 왼쪽: 그룹 및 구성원 목록 */}
                <div style={{
                  flex: 1,
                  padding: '20px',
                  borderRight: '1px solid var(--border-color)',
                  overflow: 'auto',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <h4 style={{marginTop: 0, color: 'var(--text-primary)'}}>그룹 및 구성원</h4>
                  
                  {/* 검색 입력 */}
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

                  {/* 탭 버튼 */}
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

                  {/* 내용 영역 */}
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

                {/* 오른쪽: 선택된 발송 대상 */}
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

              {/* 모달 푸터 */}
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

export default SendSMSPage;