import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function AccountApiDocs() {
  const { t } = useTranslation();
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
        {copiedCode === codeId ? t('common.copied') : t('common.copy')}
      </button>
      <pre><code>{code}</code></pre>
    </div>
  );

  const endpoints = {
    signup: {
      method: 'POST',
      path: '/account/signup',
      title: t('accountApi.endpoints.signup.title'),
      description: t('accountApi.endpoints.signup.description'),
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
        { name: 'project_id', type: 'UUID', required: true, description: t('accountApi.parameters.projectId') },
        { name: 'user_id', type: 'String', required: true, description: t('accountApi.parameters.userId') },
        { name: 'user_pw', type: 'String', required: true, description: t('accountApi.parameters.userPw') },
        { name: 'name', type: 'String', required: true, description: t('accountApi.parameters.name') },
        { name: 'phone', type: 'String', required: true, description: t('accountApi.parameters.phone') },
        { name: 'is_reserved', type: 'Boolean', required: true, description: t('accountApi.parameters.isReserved') },
        { name: 'data', type: 'Json', required: false, description: t('accountApi.parameters.data') }
      ]
    },
    login: {
      method: 'POST',
      path: '/account/login',
      title: t('accountApi.endpoints.login.title'),
      description: t('accountApi.endpoints.login.description'),
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
        { name: 'user_pw', type: 'String', required: true, description: t('accountApi.parameters.userPwLogin') },
        { name: 'project_id', type: 'UUID', required: true, description: '지급받은 프로젝트 id' }
      ]
    },
    info: {
      method: 'GET',
      path: '/account/info',
      title: t('accountApi.endpoints.info.title'),
      description: t('accountApi.endpoints.info.description'),
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
      <h1>{t('accountApi.title')}</h1>
      <p className="main-description">
        {t('accountApi.description')}
      </p>

      <div className="alert alert-info">
        <strong><i data-lucide="lightbulb" style={{display: 'inline', marginRight: '4px', width: '16px', height: '16px'}}></i> {t('accountApi.devTip')}</strong> 
        {t('accountApi.devTipContent')}
      </div>

      {/* API 기본 정보 */}
      <div className="card" id="api-basic-info">
        <div className="card-title"><i data-lucide="code" style={{display: 'inline', marginRight: '8px', width: '20px', height: '20px'}}></i>{t('accountApi.basicInfo.title')}</div>
        
        <div className="api-example">
          <h4><i data-lucide="globe" style={{display: 'inline', marginRight: '6px', width: '16px', height: '16px'}}></i>{t('accountApi.basicInfo.baseUrl')}</h4>
          <CodeBlock 
            code="https://api.aiapp.link/account"
            codeId="base-url"
          />
        </div>

        <div className="api-example">
          <h4><i data-lucide="key" style={{display: 'inline', marginRight: '6px', width: '16px', height: '16px'}}></i>{t('accountApi.basicInfo.baseHeader')}</h4>
          <table className="api-table">
            <thead>
              <tr>
                <th>{t('accountApi.basicInfo.headerName')}</th>
                <th>{t('accountApi.basicInfo.headerDescription')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code className="field-name">Cookie</code></td>
                <td>{t('accountApi.basicInfo.cookieDesc')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Account 객체 구조 */}
      <div className="card">
        <div className="card-title"><i data-lucide="file-text" style={{display: 'inline', marginRight: '8px', width: '20px', height: '20px'}}></i>{t('accountApi.accountObject.title')}</div>
        <p>{t('accountApi.accountObject.description')}</p>
        
        <table className="api-table">
          <thead>
            <tr>
              <th>{t('accountApi.accountObject.fieldName')}</th>
              <th>{t('accountApi.accountObject.fieldType')}</th>
              <th>{t('accountApi.accountObject.fieldDesc')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code className="field-name">id</code></td>
              <td>UUID</td>
              <td>{t('accountApi.accountObject.id')}</td>
            </tr>
            <tr>
              <td><code className="field-name">user_id</code></td>
              <td>String</td>
              <td>{t('accountApi.accountObject.userId')}</td>
            </tr>
            <tr>
              <td><code className="field-name">name</code></td>
              <td>String</td>
              <td>{t('accountApi.accountObject.name')}</td>
            </tr>
            <tr>
              <td><code className="field-name">phone</code></td>
              <td>String</td>
              <td>{t('accountApi.accountObject.phone')}</td>
            </tr>
            <tr>
              <td><code className="field-name">last_logged_at</code></td>
              <td>datetime</td>
              <td>{t('accountApi.accountObject.lastLoggedAt')}</td>
            </tr>
            <tr>
              <td><code className="field-name">created_at</code></td>
              <td>datetime</td>
              <td>{t('accountApi.accountObject.createdAt')}</td>
            </tr>
            <tr>
              <td><code className="field-name">data</code></td>
              <td>Json</td>
              <td>{t('accountApi.accountObject.data')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 엔드포인트 탭 */}
      <div className="card">
        <div className="card-title"><i data-lucide="rocket" style={{display: 'inline', marginRight: '8px', width: '20px', height: '20px'}}></i>{t('accountApi.endpoints.title')}</div>
        
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
              <h4>{t('accountApi.parameters.title')}</h4>
              <table className="api-table">
                <thead>
                  <tr>
                    <th>필드명</th>
                    <th>타입</th>
                    <th>{t('accountApi.parameters.required')}</th>
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
              <h4>{t('accountApi.request.body')}</h4>
              <CodeBlock 
                code={JSON.stringify(currentEndpoint.requestBody, null, 2)}
                codeId={`${activeEndpoint}-request`}
              />
            </div>
          )}

          {/* 응답 예시 */}
          <div className="response-section">
            <h4>{t('accountApi.response.title')}</h4>
            <div className="status-badge success">200 OK</div>
            <CodeBlock 
              code={JSON.stringify(currentEndpoint.responseBody, null, 2)}
              codeId={`${activeEndpoint}-response`}
            />
          </div>

          {/* 특별 케이스: 로그인 API의 Set-Cookie */}
          {activeEndpoint === 'login' && (
            <div className="api-example">
              <h4>{t('accountApi.setCookie.title')}</h4>
              <CodeBlock 
                code="access_token=<token>; HttpOnly; Path=/; Max-Age=86400"
                codeId="login-cookie"
              />
            </div>
          )}

          {/* 특별 케이스: 내 정보 조회의 RequestHeader */}
          {activeEndpoint === 'info' && (
            <div className="request-section">
              <h4>{t('accountApi.request.header')}</h4>
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
        <div className="card-title"><i data-lucide="alert-triangle" style={{display: 'inline', marginRight: '8px', width: '20px', height: '20px'}}></i>{t('accountApi.error.title')}</div>
        <p>{t('accountApi.error.description')}</p>
        
        <div className="api-example">
          <h4>{t('accountApi.error.unprocessable')}</h4>
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
        <div className="card-title"><i data-lucide="code" style={{display: 'inline', marginRight: '8px', width: '20px', height: '20px'}}></i>{t('accountApi.codeExample.title')}</div>
        
        <div className="code-example">
          <h4><i data-lucide="code" style={{display: 'inline', marginRight: '6px', width: '16px', height: '16px'}}></i>{t('accountApi.codeExample.javascript')}</h4>
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
          <h4><i data-lucide="code" style={{display: 'inline', marginRight: '6px', width: '16px', height: '16px'}}></i>{t('accountApi.codeExample.python')}</h4>
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
        <div className="card-title"><i data-lucide="lightbulb" style={{display: 'inline', marginRight: '8px', width: '20px', height: '20px'}}></i>{t('accountApi.bestPractices.title')}</div>
        
        <div className="best-practices-content">
          <div className="practice-item">
            <h4><i data-lucide="shield" style={{display: 'inline', marginRight: '6px', width: '16px', height: '16px'}}></i>{t('accountApi.bestPractices.security.title')}</h4>
            <p>{t('accountApi.bestPractices.security.description')}</p>
          </div>
          
          <div className="practice-item">
            <h4><i data-lucide="zap" style={{display: 'inline', marginRight: '6px', width: '16px', height: '16px'}}></i>{t('accountApi.bestPractices.performance.title')}</h4>
            <p>{t('accountApi.bestPractices.performance.description')}</p>
          </div>
          
          <div className="practice-item">
            <h4><i data-lucide="alert-triangle" style={{display: 'inline', marginRight: '6px', width: '16px', height: '16px'}}></i>{t('accountApi.bestPractices.errorHandling.title')}</h4>
            <p>{t('accountApi.bestPractices.errorHandling.description')}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountApiDocs;