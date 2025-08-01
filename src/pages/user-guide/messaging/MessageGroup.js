import React, { useState } from 'react';

function MessageGroupPage() {
  const [members, setMembers] = useState([
    { id: 1, name: '홍길동', phone: '010-1234-5678', description: '마케팅팀' },
    { id: 2, name: '김영희', phone: '010-9876-5432', description: '개발팀' },
    { id: 3, name: '박철수', phone: '010-5555-1234', description: '디자인팀' }
  ]);
  
  const [groups, setGroups] = useState([
    { id: 1, name: '마케팅팀', memberIds: [1] },
    { id: 2, name: '개발팀', memberIds: [2] },
    { id: 3, name: '전체', memberIds: [1, 2, 3] }
  ]);

  const [newMember, setNewMember] = useState({ name: '', phone: '', description: '' });
  const [newGroupName, setNewGroupName] = useState('');
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [isAddingGroup, setIsAddingGroup] = useState(false);

  const addMember = () => {
    if (newMember.name && newMember.phone) {
      setMembers([...members, {
        id: Date.now(),
        ...newMember
      }]);
      setNewMember({ name: '', phone: '', description: '' });
      setIsAddingMember(false);
    }
  };

  const deleteMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
    setGroups(groups.map(group => ({
      ...group,
      memberIds: group.memberIds.filter(memberId => memberId !== id)
    })));
  };

  const addGroup = () => {
    if (newGroupName) {
      setGroups([...groups, {
        id: Date.now(),
        name: newGroupName,
        memberIds: []
      }]);
      setNewGroupName('');
      setIsAddingGroup(false);
    }
  };

  const toggleMemberInGroup = (groupId, memberId) => {
    setGroups(groups.map(group => {
      if (group.id === groupId) {
        const memberIds = group.memberIds.includes(memberId)
          ? group.memberIds.filter(id => id !== memberId)
          : [...group.memberIds, memberId];
        return { ...group, memberIds };
      }
      return group;
    }));
  };

  const getGroupMembers = (groupId) => {
    const group = groups.find(g => g.id === groupId);
    return members.filter(member => group.memberIds.includes(member.id));
  };

  return (
    <>
      <section id="main-content">
        <h1>발송 대상 목록 설정</h1>

        <p className="main-description">
          메시지 발송을 위한 구성원과 그룹을 관리할 수 있습니다. 개별 구성원을 등록하고 그룹으로 분류하여 효율적인 메시지 발송이 가능합니다.
        </p>

        <div className="alert alert-info">
          <strong>💡 관리자 팁 :</strong> 
           그룹을 미리 구성해두면 대량 메시지 발송 시 편리합니다.
        </div>

        <h2 id="member-management">구성원 관리</h2>
        <div className="card">
          <div className="card-title">구성원 목록</div>
          
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
            <p>등록된 구성원을 확인하고 관리할 수 있습니다.</p>
          </div>

          <div className="api-table">
            <table style={{width: '100%'}}>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>전화번호</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                {members.map(member => (
                  <tr key={member.id}>
                    <td><strong>{member.name}</strong></td>
                    <td>{member.phone}</td>
                    <td>{member.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h2 id="group-management">그룹 관리</h2>
        <div className="card">
          <div className="card-title">그룹 목록</div>
          
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
            <p>구성원을 그룹으로 분류하여 효율적으로 관리할 수 있습니다.</p>
          </div>

          {isAddingGroup && (
            <div className="card" style={{marginBottom: '20px', background: 'var(--bg-secondary)'}}>
              <div className="card-title">새 그룹 생성</div>
              <div style={{marginBottom: '16px'}}>
                <label style={{display: 'block', marginBottom: '4px', fontWeight: '600'}}>그룹명</label>
                <input
                  type="text"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  placeholder="그룹 이름을 입력하세요"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{display: 'flex', gap: '8px'}}>
                <button className="btn btn-primary" onClick={addGroup}>생성</button>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setIsAddingGroup(false)}
                >
                  취소
                </button>
              </div>
            </div>
          )}

          <div className="grid-container">
            {groups.map(group => (
              <div key={group.id} className="card">
                <div className="card-title">
                  {group.name}
                  <span style={{
                    background: 'var(--primary-color)',
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    marginLeft: '8px'
                  }}>
                    {group.memberIds.length}명
                  </span>
                </div>
                
                <div style={{marginBottom: '16px'}}>
                  <strong>구성원:</strong>
                  <div style={{marginTop: '8px'}}>
                    {getGroupMembers(group.id).map(member => (
                      <span key={member.id} style={{
                        display: 'inline-block',
                        background: 'var(--bg-secondary)',
                        padding: '4px 8px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.9rem',
                        margin: '2px 4px 2px 0'
                      }}>
                        {member.name} ({member.phone})
                      </span>
                    ))}
                    {group.memberIds.length === 0 && (
                      <span style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                        구성원이 없습니다
                      </span>
                    )}
                  </div>
                </div>

                {selectedGroupId === group.id && (
                  <div style={{
                    marginTop: '16px',
                    padding: '16px',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    <div className="card-title" style={{marginBottom: '12px', fontSize: '1rem'}}>
                      구성원 선택
                    </div>
                    <div className="checkbox-list">
                      {members.map(member => (
                        <div key={member.id} className="checkbox-item">
                          <input
                            type="checkbox"
                            checked={group.memberIds.includes(member.id)}
                            onChange={() => toggleMemberInGroup(group.id, member.id)}
                          />
                          <span>{member.name} ({member.phone})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <h2 id="usage-guide">사용 가이드</h2>
        <div className="card">
          <div className="card-title">단계별 사용법</div>
          
          <div className="step-item">
            <div className="step-title">
              <div className="step-number">1</div>
              구성원 등록
            </div>
            <p>메시지를 받을 개별 구성원의 정보를 등록합니다.</p>
            <ul className="checklist">
              <li>이름과 전화번호는 필수 입력 항목입니다</li>
              <li>설명 항목에는 부서명이나 직책을 입력하여 구분할 수 있습니다</li>
              <li>전화번호는 010-0000-0000 형식으로 입력해주세요</li>
            </ul>
          </div>

          <div className="step-item">
            <div className="step-title">
              <div className="step-number">2</div>
              그룹 생성
            </div>
            <p>등록된 구성원들을 목적에 따라 그룹으로 분류합니다.</p>
            <ul className="checklist">
              <li>부서별, 프로젝트별, 직급별, VIP, 고객사 등 다양한 기준으로 그룹을 만들 수 있습니다</li>
              <li>하나의 구성원은 여러 그룹에 포함될 수 있습니다</li>
              <li>그룹명은 알아보기 쉽게 명확하게 지정해주세요</li>
            </ul>
          </div>

          <div className="step-item">
            <div className="step-title">
              <div className="step-number">3</div>
              구성원 할당
            </div>
            <p>'구성원 변경' 버튼을 통해 그룹에 구성원을 추가하거나 제거합니다.</p>
            <ul className="checklist">
              <li>체크박스를 통해 간편하게 구성원을 선택/해제할 수 있습니다</li>
              <li>실시간으로 그룹 구성원 수가 표시됩니다</li>
              <li>변경사항은 즉시 저장됩니다</li>
            </ul>
          </div>
        </div>

        <h2 id="troubleshooting">문제 해결</h2>
        <div className="card">
          <div className="card-title">자주 발생하는 문제</div>
          
          <div className="card">
            <div className="card-title">Q. 구성원을 삭제했는데 그룹에서도 자동으로 제거되나요?</div>
            <p><strong>A.</strong> 네, 구성원을 삭제하면 해당 구성원이 속해있던 모든 그룹에서 자동으로 제거됩니다.</p>
          </div>
          
          <div className="card">
            <div className="card-title">Q. 한 구성원이 여러 그룹에 속할 수 있나요?</div>
            <p><strong>A.</strong> 네, 하나의 구성원은 여러 그룹에 동시에 속할 수 있습니다. 예를 들어 '개발팀'과 '프로젝트A팀' 그룹에 모두 포함될 수 있습니다.</p>
          </div>
          
          <div className="card">
            <div className="card-title">Q. 그룹명을 변경하려면 어떻게 해야 하나요?</div>
            <p><strong>A.</strong> 현재 버전에서는 그룹명 변경 기능이 제공되지 않습니다. 새로운 그룹을 만든 후 구성원을 이동시키는 방법을 사용해주세요.</p>
          </div>
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">도움이 더 필요하신가요?</div>
          <p>발송 대상 목록 설정에 대해 궁금한 점이 있으시면 언제든 문의해주세요.</p>
          
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

export default MessageGroupPage;