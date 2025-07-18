import React, { useState, useEffect } from 'react';

function AccountApiDocs() {
  const [activeEndpoint, setActiveEndpoint] = useState('signup');
  const [copiedCode, setCopiedCode] = useState('');

  // Lucide 아이콘 초기화
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [activeEndpoint, copiedCode]); // 상태 변경시마다 아이콘 재생성

  const copyToClipboard = async (text, codeId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(codeId);
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  const CodeBlock = ({ code, codeId, title }) => (
    <div className="api-code-block" style={{ position: 'relative' }}>
      <button
        onClick={() => copyToClipboard(code, codeId)}
        style={{
          position: 'absolute',
          top: '8px',
          right: '54px',
          background: copiedCode === codeId ? '#10b981' : 'rgba(255,255,255,0.1)',
          border: 'none',
          borderRadius: '4px',
          padding: '3px 8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          color: 'white',
          fontSize: '12px',
          zIndex: 10
        }}
      >
        {copiedCode === codeId ? '복사됨!' : '복사'}
      </button>
      <pre><code>{code}</code></pre>
    </div>
  );

  const endpoints = {
    signup: {
      method: 'POST',
      path: '/account/signup',
      title: '회원가입',
      description: '프로젝트 소속 계정을 등록합니다.',
      requestBody: {
        "project_id": "UUID",
        "user_id": "admin01", 
        "user_pw": "12345678",
        "name": "관리자",
        "phone": "01012345678",
        "is_reserved": false,
        "data": {
          "etc1": "",
          "etc2": ""
        }
      },
      responseBody: {
        "result": "SUCCESS",
        "message": "계정 생성 완료",
        "data": {
          "id": "UUID",
          "user_id": "admin01",
          "name": "관리자", 
          "phone": "01012345678",
          "last_logged_at": null,
          "created_at": "2025-07-17T10:30:00",
          "data": {
            "etc1": "etc1",
            "etc2": "etc2"
          }
        }
      },
      parameters: [
        { name: 'project_id', type: 'UUID', required: true, description: '지급받은 프로젝트 id' },
        { name: 'user_id', type: 'String', required: true, description: '로그인 ID' },
        { name: 'user_pw', type: 'String', required: true, description: '비밀번호 (8자 이상)' },
        { name: 'name', type: 'String', required: true, description: '이름' },
        { name: 'phone', type: 'String', required: true, description: '연락처' },
        { name: 'is_reserved', type: 'Boolean', required: true, description: '예약 계정 여부' },
        { name: 'data', type: 'Json', required: false, description: '추가 필요 저장할 정보' }
      ]
    },
    login: {
      method: 'POST',
      path: '/account/login',
      title: '계정 로그인',
      description: '프로젝트 계정으로 로그인합니다.',
      requestBody: {
        "user_id": "admin01",
        "user_pw": "12345678", 
        "project_id": "UUID"
      },
      responseBody: {
        "result": "SUCCESS",
        "message": "로그인 완료",
        "data": {
          "access_token": "xxx.yyy.zzz",
          "token_type": "bearer"
        }
      },
      parameters: [
        { name: 'user_id', type: 'String', required: true, description: '로그인 ID' },
        { name: 'user_pw', type: 'String', required: true, description: '비밀번호' },
        { name: 'project_id', type: 'UUID', required: true, description: '지급받은 프로젝트 id' }
      ]
    },
    info: {
      method: 'GET',
      path: '/account/info',
      title: '내 정보 조회',
      description: '로그인된 계정의 정보를 조회합니다.',
      requestBody: null,
      responseBody: {
        "result": "SUCCESS",
        "message": "내 정보",
        "data": {
          "id": "UUID",
          "user_id": "admin01",
          "name": "관리자",
          "phone": "010-1234-5678",
          "last_logged_at": "2025-07-17T10:30:00",
          "created_at": "2025-07-01T12:00:00",
          "data": {
            "etc1":"etc1",
            "etc2":"etc2"
          }
        },
        "message": "내 정보"
      },
      parameters: []
    }
  };

  const currentEndpoint = endpoints[activeEndpoint];

  return (
    <>
      <h1>Account API 문서</h1>
      <p className="main-description">
        회원 관리를 위한 RESTful API 가이드입니다. 회원가입, 로그인, 정보 조회 기능을 제공합니다.
      </p>

      <div className="alert alert-info">
        <strong><i data-lucide="lightbulb" style={{display: 'inline', marginRight: '4px', width: '16px', height: '16px'}}></i> 개발자 팁:</strong> 
        모든 API 요청에는 올바른 Content-Type 헤더가 필요하며, 인증이 필요한 엔드포인트는 Cookie에 access_token을 포함해야 합니다.
      </div>

      {/* API 기본 정보 */}
      <div className="card" id="api-basic-info">
        <div className="card-title"><i data-lucide="code" style={{display: 'inline', marginRight: '8px', width: '20px', height: '20px'}}></i>API 기본 정보</div>
        
        <div className="api-example">
          <h4><i data-lucide="globe" style={{display: 'inline', marginRight: '6px', width: '16px', height: '16px'}}></i>Base URL</h4>
          <CodeBlock 
            code="https://api.aiapp.link/account"
            codeId="base-url"
          />
        </div>

        <div className="api-example">
          <h4><i data-lucide="key" style={{display: 'inline', marginRight: '6px', width: '16px', height: '16px'}}></i>Base Header</h4>
          <table className="api-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code className="field-name">Cookie</code></td>
                <td>access_token 쿠키를 통해 인증 정보를 유지합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Account 객체 구조 */}
      <div className="card">
        <div className="card-title"><i data-lucide="file-text" style={{display: 'inline', marginRight: '8px', width: '20px', height: '20px'}}></i>Account 객체</div>
        <p>API에서 사용되는 Account 객체의 상세 구조입니다.</p>
        
        <table className="api-table">
          <thead>
            <tr>
              <th>필드명</th>
              <th>타입</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code className="field-name">id</code></td>
              <td>UUID</td>
              <td>계정 고유 식별자</td>
            </tr>
            <tr>
              <td><code className="field-name">user_id</code></td>
              <td>String</td>
              <td>로그인 ID</td>
            </tr>
            <tr>
              <td><code className="field-name">name</code></td>
              <td>String</td>
              <td>사용자 이름</td>
            </tr>
            <tr>
              <td><code className="field-name">phone</code></td>
              <td>String</td>
              <td>연락처</td>
            </tr>
            <tr>
              <td><code className="field-name">last_logged_at</code></td>
              <td>datetime</td>
              <td>마지막 로그인 시각</td>
            </tr>
            <tr>
              <td><code className="field-name">created_at</code></td>
              <td>datetime</td>
              <td>계정 생성일</td>
            </tr>
            <tr>
              <td><code className="field-name">data</code></td>
              <td>Json</td>
              <td>회원가입 시 추가로 저장하는 정보 (예: 프로필 이미지 등)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 엔드포인트 탭 */}
      <div className="card">
        <div className="card-title"><i data-lucide="rocket" style={{display: 'inline', marginRight: '8px', width: '20px', height: '20px'}}></i>API 엔드포인트</div>
        
        <div className="endpoint-tabs">
          {Object.entries(endpoints).map(([key, endpoint]) => (
            <button
              key={key}
              className={`endpoint-tab ${activeEndpoint === key ? 'active' : ''}`}
              onClick={() => setActiveEndpoint(key)}
            >
              <span className={`method-badge ${endpoint.method.toLowerCase()}`}>
                {endpoint.method}
              </span>
              {endpoint.path}
            </button>
          ))}
        </div>

        {/* 선택된 엔드포인트 상세 정보 */}
        <div className="api-example">
          <h4>{currentEndpoint.title}</h4>
          <p>{currentEndpoint.description}</p>

          {/* 파라미터 표 */}
          {currentEndpoint.parameters.length > 0 && (
            <div className="request-section">
              <h4>Request Parameters</h4>
              <table className="api-table">
                <thead>
                  <tr>
                    <th>필드명</th>
                    <th>타입</th>
                    <th>필수</th>
                    <th>설명</th>
                  </tr>
                </thead>
                <tbody>
                  {currentEndpoint.parameters.map((param, index) => (
                    <tr key={index}>
                      <td><code className="field-name">{param.name}</code></td>
                      <td>{param.type}</td>
                      <td>
                        <span className={param.required ? 'required-field' : 'optional-field'}>
                          {param.required ? '✅' : 'X'}
                        </span>
                      </td>
                      <td>{param.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* 요청 예시 */}
          {currentEndpoint.requestBody && (
            <div className="request-section">
              <h4>Request Body</h4>
              <CodeBlock 
                code={JSON.stringify(currentEndpoint.requestBody, null, 2)}
                codeId={`${activeEndpoint}-request`}
              />
            </div>
          )}

          {/* 응답 예시 */}
          <div className="response-section">
            <h4>Response</h4>
            <div className="status-badge success">200 OK</div>
            <CodeBlock 
              code={JSON.stringify(currentEndpoint.responseBody, null, 2)}
              codeId={`${activeEndpoint}-response`}
            />
          </div>

          {/* 특별 케이스: 로그인 API의 Set-Cookie */}
          {activeEndpoint === 'login' && (
            <div className="api-example">
              <h4>Set-Cookie (옵션)</h4>
              <CodeBlock 
                code="access_token=<token>; HttpOnly; Path=/; Max-Age=86400"
                codeId="login-cookie"
              />
            </div>
          )}

          {/* 특별 케이스: 내 정보 조회의 RequestHeader */}
          {activeEndpoint === 'info' && (
            <div className="request-section">
              <h4>Request Header</h4>
              <table className="api-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code className="field-name">Cookie</code></td>
                    <td>key = access_token</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* 에러 응답 */}
      <div className="card">
        <div className="card-title"><i data-lucide="alert-triangle" style={{display: 'inline', marginRight: '8px', width: '20px', height: '20px'}}></i>에러 응답</div>
        <p>API 호출 시 발생할 수 있는 에러 응답 형식입니다.</p>
        
        <div className="api-example">
          <h4>422 Unprocessable Entity</h4>
          <div className="status-badge error">422 Error</div>
          <CodeBlock 
            code={JSON.stringify({
              "result": "FAIL",
              "message": "요청 값이 올바르지 않습니다.",
              "errors": [
                {
                  "loc": ["body", "user_pw"],
                  "msg": "비밀번호는 최소 8자 이상이어야 합니다.",
                  "type": "value_error"
                }
              ]
            }, null, 2)}
            codeId="error-response"
          />
        </div>
      </div>

      {/* 코드 예제 */}
      <div className="card">
        <div className="card-title"><i data-lucide="code" style={{display: 'inline', marginRight: '8px', width: '20px', height: '20px'}}></i>코드 예제</div>
        
        <div className="code-example">
          <h4><i data-lucide="code" style={{display: 'inline', marginRight: '6px', width: '16px', height: '16px'}}></i>JavaScript 예제</h4>
          <CodeBlock 
            code={`// 회원가입
const signupResponse = await fetch('https://api.aiapp.link/account/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    project_id: 'your-project-id',
    user_id: 'user123',
    user_pw: 'password123',
    name: '홍길동',
    phone: '01012345678',
    is_reserved: false
  })
});

const signupData = await signupResponse.json();
console.log('회원가입 결과:', signupData);

// 로그인
const loginResponse = await fetch('https://api.aiapp.link/account/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_id: 'user123',
    user_pw: 'password123',
    project_id: 'your-project-id'
  })
});

const loginData = await loginResponse.json();
console.log('로그인 결과:', loginData);

// 내 정보 조회 (쿠키에 access_token 필요)
const infoResponse = await fetch('https://api.aiapp.link/account/info', {
  method: 'GET',
  credentials: 'include' // 쿠키 포함
});

const infoData = await infoResponse.json();
console.log('내 정보:', infoData);`}
            codeId="javascript-example"
          />
        </div>

        <div className="code-example">
          <h4><i data-lucide="code" style={{display: 'inline', marginRight: '6px', width: '16px', height: '16px'}}></i>Python 예제</h4>
          <CodeBlock 
            code={`import requests
import json

# 회원가입
signup_data = {
    "project_id": "your-project-id",
    "user_id": "user123", 
    "user_pw": "password123",
    "name": "홍길동",
    "phone": "01012345678",
    "is_reserved": False
}

signup_response = requests.post(
    'https://api.aiapp.link/account/signup',
    json=signup_data
)
print('회원가입 결과:', signup_response.json())

# 로그인
login_data = {
    "user_id": "user123",
    "user_pw": "password123", 
    "project_id": "your-project-id"
}

login_response = requests.post(
    'https://api.aiapp.link/account/login',
    json=login_data
)

# 쿠키에서 access_token 추출
cookies = login_response.cookies

# 내 정보 조회
info_response = requests.get(
    'https://api.aiapp.link/account/info',
    cookies=cookies
)
print('내 정보:', info_response.json())`}
            codeId="python-example"
          />
        </div>
      </div>

      {/* 모범 사례 */}
      <div className="card">
        <div className="card-title"><i data-lucide="lightbulb" style={{display: 'inline', marginRight: '8px', width: '20px', height: '20px'}}></i>모범 사례</div>
        
        <div className="best-practices-content">
          <div className="practice-item">
            <h4><i data-lucide="shield" style={{display: 'inline', marginRight: '6px', width: '16px', height: '16px'}}></i>보안</h4>
            <p>API 키와 토큰은 환경 변수에 저장하고, HTTPS를 사용하여 통신하세요.</p>
          </div>
          
          <div className="practice-item">
            <h4><i data-lucide="zap" style={{display: 'inline', marginRight: '6px', width: '16px', height: '16px'}}></i>성능</h4>
            <p>불필요한 API 호출을 줄이고, 토큰 만료 시간을 고려하여 재인증 로직을 구현하세요.</p>
          </div>
          
          <div className="practice-item">
            <h4><i data-lucide="alert-triangle" style={{display: 'inline', marginRight: '6px', width: '16px', height: '16px'}}></i>오류 처리</h4>
            <p>모든 API 응답에 대한 에러 처리를 구현하고, 사용자에게 적절한 피드백을 제공하세요.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountApiDocs;