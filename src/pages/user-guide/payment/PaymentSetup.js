import React from 'react';
import '../../../styles/components/payment.css';
import kg from '../../../assets/images/kginicis.svg';
import nicepay from '../../../assets/images/nicepay.png';
import toss from '../../../assets/images/toss.png';
import kakao from '../../../assets/images/kakao.png';
import payco from '../../../assets/images/payco.svg';

function PaymentSetup() {
  return (
    <>
      <section id="main-content">
        <h1>PG 결제 설정</h1>
        
        <p className="main-description">
          온라인 결제 서비스를 위한 PG(Payment Gateway) 연동 설정 방법을 안내합니다. 다양한 PG사와의 연동을 통해 안전하고 편리한 결제 서비스를 제공할 수 있습니다.
        </p>

        <div className="alert alert-info">
          <strong>💡 안내:</strong> PG 연동 설정은 실제 결제가 발생하므로 테스트 모드에서 충분히 검증한 후 실결제 모드로 전환하시기 바랍니다.
        </div>

        <h2 id="overview">PG 설정 개요</h2>
        <div className="card">
          <div className="card-title">주요 기능</div>
          <p>다양한 PG사와의 연동을 통해 안전하고 효율적인 결제 시스템을 구축할 수 있습니다.</p>
          
          <div className="grid-container">
            <div className="card feature-card high">
              <div className="card-title">
                <span className="feature-icon">🏦</span>
                PG사 선택
                <span className="priority-badge">필수</span>
              </div>
              <p>KG이니시스, 나이스페이, 토스페이먼츠 등 주요 PG사 중 선택할 수 있습니다.</p>
            </div>
            
            <div className="card feature-card high">
              <div className="card-title">
                <span className="feature-icon">🔑</span>
                인증 정보 설정
              </div>
              <p>상점ID, API키 등 PG사에서 발급받은 인증 정보를 등록합니다.</p>
            </div>
            
            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">🧪</span>
                테스트 모드
              </div>
              <p>실제 결제 전 테스트 환경에서 결제 프로세스를 검증할 수 있습니다.</p>
            </div>
            
            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">🔍</span>
                연결 테스트
              </div>
              <p>PG사와의 연결 상태를 실시간으로 확인하고 문제를 진단할 수 있습니다.</p>
            </div>
          </div>
        </div>

        <h2 id="pg-selection">PG사 선택</h2>
        <div className="card">
          <div className="card-title">지원하는 PG사</div>
          <p>다음 PG사들과의 연동을 지원합니다. 각 PG사의 특징을 확인하고 서비스에 적합한 PG를 선택하세요.</p>
          
          <div className="pg-options grid-container">
            <div className="pg-option">
              <div className="pg-header">
                <div className="pg-logo">
                  <img src={kg} alt="KG이니시스" className="pg-logo-image" />
                </div>
                <div className="pg-info">
                  <h3>KG이니시스</h3>
                  <div className="pg-tags">
                    <span className="pg-tag popular">인기</span>
                    <span className="pg-tag stable">안정적</span>
                  </div>
                </div>
              </div>
              <div className="pg-details">
                <div className="pg-features">
                  <h4>주요 특징</h4>
                  <ul>
                    <li>국내 1위 PG 서비스</li>
                    <li>다양한 결제 수단 지원 (신용카드, 계좌이체, 가상계좌 등)</li>
                    <li>안정적인 시스템과 높은 승인률</li>
                    <li>24시간 고객지원 서비스</li>
                  </ul>
                </div>
                <div className="pg-fees">
                  <h4>수수료</h4>
                  <p>신용카드: 2.9%~3.3% | 계좌이체: 1.0%~1.5%</p>
                </div>
              </div>
            </div>
            
            <div className="pg-option">
              <div className="pg-header">
                <div className="pg-logo">
                  <img src={nicepay} alt="나이스페이" className="pg-logo-image" />
                </div>
                <div className="pg-info">
                  <h3>나이스페이</h3>
                  <div className="pg-tags">
                    <span className="pg-tag stable">안정적</span>
                  </div>
                </div>
              </div>
              <div className="pg-details">
                <div className="pg-features">
                  <h4>주요 특징</h4>
                  <ul>
                    <li>금융기관 직접 운영으로 높은 신뢰도</li>
                    <li>간편한 API 연동</li>
                    <li>실시간 정산 서비스</li>
                    <li>모바일 최적화</li>
                  </ul>
                </div>
                <div className="pg-fees">
                  <h4>수수료</h4>
                  <p>신용카드: 2.8%~3.2% | 계좌이체: 0.8%~1.2%</p>
                </div>
              </div>
            </div>
            
            <div className="pg-option">
              <div className="pg-header">
                <div className="pg-logo">
                  <img src={toss} alt="토스페이먼츠" className="pg-logo-image" />
                </div>
                <div className="pg-info">
                  <h3>토스페이먼츠</h3>
                  <div className="pg-tags">
                    <span className="pg-tag modern">최신</span>
                    <span className="pg-tag developer">개발자친화</span>
                  </div>
                </div>
              </div>
              <div className="pg-details">
                <div className="pg-features">
                  <h4>주요 특징</h4>
                  <ul>
                    <li>최신 기술 기반 결제 시스템</li>
                    <li>개발자 친화적인 API와 문서</li>
                    <li>빠른 정산 서비스</li>
                    <li>토스앱 간편결제 연동</li>
                  </ul>
                </div>
                <div className="pg-fees">
                  <h4>수수료</h4>
                  <p>신용카드: 2.7%~3.1% | 계좌이체: 0.7%~1.1%</p>
                </div>
              </div>
            </div>
            
            <div className="pg-option">
              <div className="pg-header">
                <div className="pg-logo">
                  <img src={kakao} alt="카카오페이" className="pg-logo-image" />
                </div>
                <div className="pg-info">
                  <h3>카카오페이</h3>
                  <div className="pg-tags">
                    <span className="pg-tag simple">간편</span>
                  </div>
                </div>
              </div>
              <div className="pg-details">
                <div className="pg-features">
                  <h4>주요 특징</h4>
                  <ul>
                    <li>카카오톡 기반 간편결제</li>
                    <li>높은 사용자 접근성</li>
                    <li>원터치 결제 경험</li>
                    <li>카카오 생태계 연동</li>
                  </ul>
                </div>
                <div className="pg-fees">
                  <h4>수수료</h4>
                  <p>카카오페이: 2.9%~3.4%</p>
                </div>
              </div>
            </div>
            
            <div className="pg-option">
              <div className="pg-header">
                <div className="pg-logo">
                  <img src={payco} alt="PAYCO" className="pg-logo-image" />
                </div>
                <div className="pg-info">
                  <h3>PAYCO</h3>
                  <div className="pg-tags">
                    <span className="pg-tag benefit">혜택</span>
                  </div>
                </div>
              </div>
              <div className="pg-details">
                <div className="pg-features">
                  <h4>주요 특징</h4>
                  <ul>
                    <li>NHN 운영 간편결제</li>
                    <li>다양한 혜택과 적립</li>
                    <li>쿠폰 및 포인트 연동</li>
                    <li>멤버십 서비스 통합</li>
                  </ul>
                </div>
                <div className="pg-fees">
                  <h4>수수료</h4>
                  <p>PAYCO: 2.8%~3.3%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="pg-setup">PG 설정 단계</h2>
        <div className="card">
          <div className="card-title">단계별 설정 가이드</div>
          <p>선택한 PG사와의 연동을 위한 상세 설정 방법을 안내합니다.</p>
          
          <div className="step-content">
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">1</span>
                PG 설정 메뉴 접속
              </div>
              <p>좌측 사이드바에서 <strong>결제 관리 &gt; PG 결제 설정</strong>을 클릭합니다.</p>
              <div className="screenshot">
                <img src="/images/payment-setup-menu.png" alt="PG 설정 메뉴"/>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">2</span>
                PG사 선택
              </div>
              <p>사용할 PG사를 선택합니다. 각 PG사의 특징과 수수료를 비교하여 선택하세요.</p>
              
              <div className="pg-selector-example">
                <h4>PG사 선택 화면 예시</h4>
                <div className="selector-panel">
                  <div className="selector-options">
                    <div className="selector-option active">
                      <input type="radio" name="pg-provider" id="kg-inicis" checked />
                      <label for="kg-inicis" className="option-label">
                        <div className="option-content">
                          <div className="option-logo">KG이니시스</div>
                          <div className="option-desc">국내 1위 PG 서비스</div>
                        </div>
                      </label>
                    </div>
                    
                    <div className="selector-option">
                      <input type="radio" name="pg-provider" id="nicepay" />
                      <label for="nicepay" className="option-label">
                        <div className="option-content">
                          <div className="option-logo">나이스페이</div>
                          <div className="option-desc">금융기관 직접 운영</div>
                        </div>
                      </label>
                    </div>
                    
                    <div className="selector-option">
                      <input type="radio" name="pg-provider" id="tosspayments" />
                      <label for="tosspayments" className="option-label">
                        <div className="option-content">
                          <div className="option-logo">토스페이먼츠</div>
                          <div className="option-desc">최신 기술 기반</div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">3</span>
                인증 정보 입력
              </div>
              <p>선택한 PG사에서 발급받은 인증 정보를 입력합니다.</p>
              
              <div className="form-example">
                <h4>인증 정보 입력 폼</h4>
                <div className="form-panel">
                  <div className="form-group">
                    <label className="form-label">상점 ID (MID) *</label>
                    <input type="text" className="form-input" placeholder="PG사에서 발급받은 가맹점 식별자" />
                    <div className="form-help">PG사 가입 시 발급받은 고유 상점 식별자를 입력하세요.</div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">API 키 *</label>
                    <input type="password" className="form-input" placeholder="API 인증을 위한 비밀키" />
                    <div className="form-help">PG사에서 제공하는 API 키를 입력하세요. 외부에 노출되지 않도록 안전하게 관리됩니다.</div>
                  </div>
                  
                  {/* <div className="form-group">
                    <label className="form-label">서명 키 (선택)</label>
                    <input type="password" className="form-input" placeholder="거래 검증을 위한 서명키" />
                    <div className="form-help">일부 PG사에서 거래 무결성 검증을 위해 요구하는 서명키를 입력하세요.</div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Webhook URL</label>
                    <input type="url" className="form-input" placeholder="https://your-domain.com/webhooks/payment" />
                    <div className="form-help">결제 결과를 실시간으로 받을 URL을 입력하세요. HTTPS 프로토콜만 지원됩니다.</div>
                  </div> */}
                </div>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">4</span>
                결제 모드 설정
              </div>
              <p>테스트 모드와 실결제 모드 중 선택합니다. 처음에는 반드시 테스트 모드로 설정하세요.</p>
              
              <div className="payment-mode-selector">
                <h4>결제 모드 선택</h4>
                <div className="mode-options">
                  <div className="mode-option recommended">
                    <div className="mode-header">
                      <input type="radio" name="payment-mode" id="test-mode" checked />
                      <label for="test-mode" className="mode-label">
                        <span className="mode-icon">🧪</span>
                        <span className="mode-title">테스트 모드</span>
                        <span className="mode-badge">권장</span>
                      </label>
                    </div>
                    <div className="mode-description">
                      <p>실제 결제가 발생하지 않는 테스트 환경입니다.</p>
                      <ul>
                        <li>실제 금액 결제 없음</li>
                        <li>결제 프로세스 검증 가능</li>
                        <li>무제한 테스트 가능</li>
                        <li>개발 및 QA 단계에서 사용</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mode-option production">
                    <div className="mode-header">
                      <input type="radio" name="payment-mode" id="live-mode" />
                      <label for="live-mode" className="mode-label">
                        <span className="mode-icon">💳</span>
                        <span className="mode-title">실결제 모드</span>
                        <span className="mode-badge warning">주의</span>
                      </label>
                    </div>
                    <div className="mode-description">
                      <p>실제 결제가 발생하는 운영 환경입니다.</p>
                      <ul>
                        <li>실제 금액 결제 발생</li>
                        <li>정산 및 세금계산서 발행</li>
                        <li>고객 결제 정보 관리</li>
                        <li>서비스 운영 단계에서 사용</li>
                      </ul>
                      <div className="alert alert-warning">
                        <strong>⚠️ 주의:</strong> 테스트를 충분히 완료한 후에만 실결제 모드를 활성화하세요.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">5</span>
                서비스 활성화 설정
              </div>
              <p>PG 서비스 사용 여부를 설정합니다.</p>
              
              <div className="service-activation">
                <h4>서비스 사용 설정</h4>
                <div className="activation-panel">
                  <div className="activation-option">
                    <div className="activation-toggle">
                      <input type="checkbox" id="service-enabled" className="toggle-checkbox" checked />
                      <label for="service-enabled" className="toggle-label">
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                    <div className="activation-info">
                      <div className="activation-title">PG 서비스 활성화</div>
                      <div className="activation-desc">체크 시 고객이 결제 기능을 사용할 수 있습니다.</div>
                    </div>
                  </div>
                  
                  <div className="activation-details">
                    <h5>활성화 시 제공되는 기능</h5>
                    <ul>
                      <li>웹사이트/앱에서 결제 기능 사용 가능</li>
                      <li>결제 위젯 자동 표시</li>
                      <li>결제 내역 및 통계 수집 시작</li>
                      <li>고객 결제 알림 발송</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">6</span>
                연결 테스트 실행
              </div>
              <p>설정한 PG사와의 연결 상태를 테스트합니다.</p>
              
              <div className="connection-test">
                <h4>연결 테스트</h4>
                <div className="test-panel">
                  <div className="test-button-area">
                    <button className="btn test-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi-icon lucide-wifi"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>
                      연결 테스트
                    </button>
                    <div className="test-info">
                      <p>PG사 서버와의 연결 상태를 확인합니다.</p>
                    </div>
                  </div>
                  
                  {/* <div className="test-results">
                    <h5>테스트 결과</h5>
                    <div className="test-item success">
                      <span className="test-icon">✅</span>
                      <div className="test-content">
                        <div className="test-title">PG사 서버 연결</div>
                        <div className="test-desc">연결 성공 (응답시간: 245ms)</div>
                      </div>
                    </div>
                    
                    <div className="test-item success">
                      <span className="test-icon">✅</span>
                      <div className="test-content">
                        <div className="test-title">인증 정보 검증</div>
                        <div className="test-desc">API 키 및 상점 ID 인증 완료</div>
                      </div>
                    </div>
                    
                    <div className="test-item success">
                      <span className="test-icon">✅</span>
                      <div className="test-content">
                        <div className="test-title">결제 모듈 로드</div>
                        <div className="test-desc">결제 JavaScript SDK 정상 로드</div>
                      </div>
                    </div>
                    
                    <div className="test-item warning">
                      <span className="test-icon">⚠️</span>
                      <div className="test-content">
                        <div className="test-title">Webhook 엔드포인트</div>
                        <div className="test-desc">Webhook URL 응답 확인 필요</div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">7</span>
                설정 저장 및 완료
              </div>
              <p>모든 설정을 확인한 후 저장합니다.</p>
              
              <div className="save-settings">
                <div className="setting-summary">
                  <h4>설정 요약</h4>
                  <div className="summary-items">
                    <div className="summary-item">
                      <span className="summary-label">선택 PG사:</span>
                      <span className="summary-value">KG이니시스</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">결제 모드:</span>
                      <span className="summary-value test-mode">테스트 모드</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">서비스 상태:</span>
                      <span className="summary-value active-status">활성화</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">연결 상태:</span>
                      <span className="summary-value connected">정상 연결</span>
                    </div>
                  </div>
                </div>
                
                <div className="save-actions">
                  <button className="btn btn-secondary">설정 취소</button>
                  <button className="btn btn-primary">설정 저장</button>
                </div>
                
                <div className="alert alert-success">
                  <strong>✅ 설정 완료:</strong> PG 결제 설정이 성공적으로 저장되었습니다. 이제 결제 기능을 사용할 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="test-payment">테스트 결제</h2>
        <div className="card">
          <div className="card-title">테스트 결제 실행</div>
          <p>실제 서비스 적용 전 테스트 결제를 통해 결제 프로세스를 검증하세요.</p>
          
          <div className="test-payment-guide">
            <div className="test-scenarios">
              <h3>테스트 시나리오</h3>
              <div className="scenario-list">
                <div className="scenario-item">
                  <div className="scenario-header">
                    <span className="scenario-icon">💳</span>
                    <h4>신용카드 결제 테스트</h4>
                  </div>
                  <div className="scenario-content">
                    <p>테스트용 신용카드 번호를 사용하여 결제 프로세스를 확인합니다.</p>
                    <div className="test-cards">
                      <div className="test-card">
                        <strong>VISA:</strong> 4000-0000-0000-0002
                      </div>
                      <div className="test-card">
                        <strong>MasterCard:</strong> 5200-0000-0000-0007
                      </div>
                      <div className="test-card">
                        <strong>유효기간:</strong> 12/25 | <strong>CVC:</strong> 123
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="scenario-item">
                  <div className="scenario-header">
                    <span className="scenario-icon">🏦</span>
                    <h4>계좌이체 테스트</h4>
                  </div>
                  <div className="scenario-content">
                    <p>테스트 계좌를 사용하여 실시간 계좌이체를 시뮬레이션합니다.</p>
                    <div className="test-accounts">
                      <div className="test-account">
                        <strong>은행:</strong> 테스트은행 | <strong>계좌:</strong> 123-456-789012
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="scenario-item">
                  <div className="scenario-header">
                    <span className="scenario-icon">📱</span>
                    <h4>간편결제 테스트</h4>
                  </div>
                  <div className="scenario-content">
                    <p>카카오페이, PAYCO 등 간편결제 서비스 연동을 테스트합니다.</p>
                    <div className="test-simple-pay">
                      <div className="simple-pay-info">
                        테스트 환경에서는 가상의 간편결제 계정으로 결제가 진행됩니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="test-checklist">
              <h3>테스트 체크리스트</h3>
              <div className="checklist-items">
                <div className="checklist-item">
                  <input type="checkbox" id="check-1" />
                  <label for="check-1">결제 페이지 정상 로드</label>
                </div>
                <div className="checklist-item">
                  <input type="checkbox" id="check-2" />
                  <label for="check-2">결제 수단 선택 기능</label>
                </div>
                <div className="checklist-item">
                  <input type="checkbox" id="check-3" />
                  <label for="check-3">결제 승인 프로세스</label>
                </div>
                <div className="checklist-item">
                  <input type="checkbox" id="check-4" />
                  <label for="check-4">결제 완료 페이지 이동</label>
                </div>
                <div className="checklist-item">
                  <input type="checkbox" id="check-5" />
                  <label for="check-5">Webhook 결과 수신</label>
                </div>
                <div className="checklist-item">
                  <input type="checkbox" id="check-6" />
                  <label for="check-6">결제 내역 관리자 화면 반영</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="troubleshooting">문제 해결</h2>
        <div className="card">
          <div className="card-title">자주 발생하는 문제</div>
          
          <div className="troubleshooting-list">
            <div className="trouble-item">
              <div className="trouble-header">
                <span className="trouble-icon">❌</span>
                <h4>PG사 연결 실패</h4>
              </div>
              <div className="trouble-content">
                <div className="trouble-causes">
                  <h5>가능한 원인</h5>
                  <ul>
                    <li>잘못된 API 키 또는 상점 ID</li>
                    <li>네트워크 연결 문제</li>
                    <li>PG사 서버 점검</li>
                    <li>IP 화이트리스트 미등록</li>
                  </ul>
                </div>
                <div className="trouble-solutions">
                  <h5>해결 방법</h5>
                  <ol>
                    <li>PG사에서 발급받은 인증 정보 재확인</li>
                    <li>서버 IP 주소를 PG사에 등록 요청</li>
                    <li>방화벽 설정에서 PG사 도메인 허용</li>
                    <li>PG사 고객센터 문의</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="trouble-item">
              <div className="trouble-header">
                <span className="trouble-icon">⚠️</span>
                <h4>결제 승인 실패</h4>
              </div>
              <div className="trouble-content">
                <div className="trouble-causes">
                  <h5>가능한 원인</h5>
                  <ul>
                    <li>한도 초과 또는 잔액 부족</li>
                    <li>카드 정보 오류</li>
                    <li>PG사 정책 위반</li>
                    <li>중복 결제 시도</li>
                  </ul>
                </div>
                <div className="trouble-solutions">
                  <h5>해결 방법</h5>
                  <ol>
                    <li>다른 결제 수단으로 재시도</li>
                    <li>결제 금액 및 정보 확인</li>
                    <li>일정 시간 후 재시도</li>
                    <li>고객센터를 통한 원인 파악</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="trouble-item">
              <div className="trouble-header">
                <span className="trouble-icon">🔄</span>
                <h4>Webhook 수신 실패</h4>
              </div>
              <div className="trouble-content">
                <div className="trouble-causes">
                  <h5>가능한 원인</h5>
                  <ul>
                    <li>잘못된 Webhook URL</li>
                    <li>HTTPS 프로토콜 미사용</li>
                    <li>서버 응답 지연 또는 오류</li>
                    <li>인증서 문제</li>
                  </ul>
                </div>
                <div className="trouble-solutions">
                  <h5>해결 방법</h5>
                  <ol>
                    <li>Webhook URL 유효성 확인</li>
                    <li>HTTPS 인증서 설치 및 검증</li>
                    <li>서버 로그 확인 및 성능 점검</li>
                    <li>PG사에 Webhook 재발송 요청</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="security">보안 고려사항</h2>
        <div className="card">
          <div className="card-title">PG 연동 보안</div>
          
          <div className="security-guidelines">
            <div className="security-item">
              <h4>🔐 API 키 관리</h4>
              <ul>
                <li>API 키는 절대 클라이언트 사이드에 노출하지 마세요</li>
                <li>환경 변수나 보안 저장소를 사용하여 관리하세요</li>
                <li>정기적으로 API 키를 교체하세요</li>
                <li>개발/스테이징/운영 환경별로 다른 키를 사용하세요</li>
              </ul>
            </div>
            
            <div className="security-item">
              <h4>🛡️ 결제 검증</h4>
              <ul>
                <li>서버 사이드에서 결제 결과를 반드시 검증하세요</li>
                <li>결제 금액 조작을 방지하기 위해 서버에서 금액을 관리하세요</li>
                <li>중복 결제를 방지하는 로직을 구현하세요</li>
                <li>결제 승인 번호를 안전하게 저장하고 관리하세요</li>
              </ul>
            </div>
            
            <div className="security-item">
              <h4>🔒 데이터 보호</h4>
              <ul>
                <li>고객의 결제 정보는 PCI DSS 표준을 준수하여 처리하세요</li>
                <li>불필요한 개인정보는 수집하지 마세요</li>
                <li>데이터베이스 암호화를 적용하세요</li>
                <li>접근 로그를 기록하고 정기적으로 모니터링하세요</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="best-practices">모범 사례</h2>
        <div className="card">
          <div className="card-title">효과적인 PG 운영</div>
          
          <div className="best-practices">
            <div className="practice-item">
              <h4>✅ 단계적 적용</h4>
              <p>테스트 모드에서 충분히 검증한 후 실결제 모드로 전환하세요. 베타 사용자를 대상으로 먼저 테스트해보는 것도 좋습니다.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 다양한 결제 수단 제공</h4>
              <p>고객의 편의를 위해 신용카드, 계좌이체, 간편결제 등 다양한 결제 수단을 제공하세요.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 결제 실패 대응</h4>
              <p>결제 실패 시 명확한 안내 메시지를 제공하고, 대안 결제 수단을 제시하세요.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 모니터링 및 알림</h4>
              <p>결제 성공률, 실패율 등을 모니터링하고 이상 상황 시 즉시 알림을 받을 수 있도록 설정하세요.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 고객 지원 준비</h4>
              <p>결제 관련 문의에 신속하게 대응할 수 있도록 고객지원 체계를 구축하세요.</p>
            </div>
          </div>
        </div>

        <h2 id="faq">자주 묻는 질문</h2>
        <div className="card">
          <div className="card-title">PG 설정 FAQ</div>
          
          <div className="faq-list">
            <div className="card">
              <div className="card-title">Q. 여러 PG사를 동시에 사용할 수 있나요?</div>
              <p><strong>A.</strong> 네, 가능합니다. 각 PG사별로 설정을 추가하고 결제 시 PG사를 선택하거나 자동으로 분배할 수 있습니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 테스트 결제 시 실제 돈이 결제되나요?</div>
              <p><strong>A.</strong> 아니요. 테스트 모드에서는 실제 결제가 발생하지 않으며, 가상의 결제만 진행됩니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. PG 수수료는 언제 정산되나요?</div>
              <p><strong>A.</strong> PG사별로 정산 주기가 다릅니다. 일반적으로 D+1~D+7 사이에 정산되며, 계약 시 협의된 조건에 따라 결정됩니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 결제 한도는 어떻게 설정하나요?</div>
              <p><strong>A.</strong> 결제 한도는 PG사와의 계약 조건에 따라 결정됩니다. 추가 한도가 필요한 경우 PG사에 문의하여 한도 증액을 요청하세요.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 해외 결제도 지원하나요?</div>
              <p><strong>A.</strong> PG사별로 해외 결제 지원 여부가 다릅니다. 해외 결제가 필요한 경우 글로벌 결제를 지원하는 PG사를 선택하세요.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 결제 데이터는 얼마나 보관되나요?</div>
              <p><strong>A.</strong> 법적 요구사항에 따라 최소 5년간 보관되며, 개인정보보호법에 따라 안전하게 관리됩니다.</p>
            </div>
          </div>
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">도움이 필요하신가요?</div>
          <p>PG 연동과 관련하여 추가 도움이 필요하시면 언제든 연락주세요.</p>

          <div className="grid-container">
            <div className="card">
              <div className="card-title">📧 기술 지원</div>
              <p>support@mbaas.com</p>
              <p>PG 연동 관련 기술 문의</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentSetup;