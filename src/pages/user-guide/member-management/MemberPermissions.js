import React from 'react';
import '../../../styles/components/member.css';

function MemberPermissions() {
  return (
    <>
      <section id="main-content">
        <h1>고객 권한 관리</h1>
        
        <p className="main-description">
          고객의 권한을 체계적으로 관리하고 신규 가입 회원의 기본 등급을 설정하는 방법을 안내합니다. 계층적 권한 구조를 통해 세분화된 권한 관리가 가능합니다.
        </p>

        <div className="alert alert-info">
          <strong>💡 안내:</strong> 권한 변경은 즉시 적용되며, 이미 로그인한 사용자는 다음 로그인 시부터 새로운 권한이 적용됩니다.
        </div>

        <h2 id="overview">권한 관리 개요</h2>
        <div className="card">
          <div className="card-title">주요 기능</div>
          <p>고객의 권한을 효율적으로 관리하여 서비스 접근 제어와 기능 사용을 체계화할 수 있습니다.</p>
          
          <div className="grid-container">
            <div className="card feature-card high">
              <div className="card-title">
                <span className="feature-icon">⚙️</span>
                기본 등급 설정
                <span className="priority-badge">핵심</span>
              </div>
              <p>신규 가입 회원에게 자동으로 부여될 기본 권한 등급을 설정할 수 있습니다.</p>
            </div>
            
            <div className="card feature-card high">
              <div className="card-title">
                <span className="feature-icon">🏗️</span>
                계층적 구조
              </div>
              <p>부모-자식 관계로 권한을 구성하여 체계적인 권한 관리가 가능합니다.</p>
            </div>
            
            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">➕</span>
                권한 추가
              </div>
              <p>새로운 권한을 생성하고 기존 권한과의 계층 관계를 설정할 수 있습니다.</p>
            </div>
            
          </div>
        </div>

        <h2 id="default-permission">기본 등급 설정</h2>
        <div className="card">
          <div className="card-title">신규 가입자 기본 권한</div>
          <p>새로 가입하는 회원에게 자동으로 부여될 기본 권한 등급을 설정할 수 있습니다.</p>
          
          <div className="step-content">
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">1</span>
                권한 관리 메뉴 접속
              </div>
              <p>좌측 사이드바에서 <strong>고객 관리 &gt; 권한 관리</strong>를 클릭합니다.</p>
              <div className="screenshot">
                <img src="/images/permission-menu.png" alt="권한 관리 메뉴 스크린샷" />
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">2</span>
                기본 등급 설정 영역 확인
              </div>
              <p>화면 상단의 '기본 등급 설정' 섹션에서 현재 설정된 기본 권한을 확인할 수 있습니다.</p>
              <div className="default-setting-example">
                <h4>기본 등급 설정 화면 예시</h4>
                <div className="setting-panel">
                  <div className="setting-header">
                    <h5>현재 기본 등급</h5>
                    <span className="permission-user">일반회원</span>
                  </div>
                  <div className="setting-description">
                    <p>신규 가입 회원은 자동으로 '일반회원' 권한이 부여됩니다.</p>
                    <p><strong>권한 범위:</strong> 기본 서비스 이용, 개인 정보 관리</p>
                  </div>
                  <button className="btn btn-primary">기본 등급 변경</button>
                </div>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">3</span>
                기본 등급 변경
              </div>
              <p>'기본 등급 변경' 버튼을 클릭하여 새로운 기본 권한을 선택할 수 있습니다.</p>
              <div className="permission-options">
                <div className="option-list">
                  <div className="permission-option">
                    <span className="permission-user">일반회원</span>
                    <div className="option-details">
                      <p><strong>기본 서비스 이용 권한</strong></p>
                      <ul>
                        <li>개인 정보 관리</li>
                        <li>기본 기능 사용</li>
                        <li>고객 지원 문의</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="permission-option disabled">
                    <span className="permission-admin">관리자</span>
                    <div className="option-details">
                      <p><strong>시스템 관리 권한</strong></p>
                      <p className="warning-text">⚠️ 관리자 권한은 기본 등급으로 설정할 수 없습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="permission-hierarchy">권한 계층 구조</h2>
        <div className="card">
          <div className="card-title">계층적 권한 관리</div>
          <p>권한을 계층적으로 구성하여 체계적이고 효율적인 권한 관리를 할 수 있습니다.</p>
          
          <div className="hierarchy-guide">
            <div className="hierarchy-concept">
              <h3>계층 구조의 이해</h3>
              <div className="concept-explanation">
                <div className="concept-item">
                  <h4>부모 권한 (Parent Permission)</h4>
                  <p>상위 권한으로, 하위 권한들을 포함하는 권한입니다. 부모 권한을 가진 사용자는 모든 하위 권한의 기능을 사용할 수 있습니다.</p>
                </div>
                
                <div className="concept-item">
                  <h4>자식 권한 (Child Permission)</h4>
                  <p>특정 부모 권한 아래에 속하는 하위 권한입니다. 더 세분화된 기능 접근을 제어할 때 사용합니다.</p>
                </div>
              </div>
              
              <div className="hierarchy-example">
                <h4>권한 계층 구조 예시</h4>
                <div className="tree-structure">
                  <div className="tree-node root">
                    <span className="permission-admin">관리자</span>
                    <div className="tree-children">
                      <div className="tree-node">
                        <span className="permission-premium">프리미엄</span>
                        <div className="tree-children">
                          <div className="tree-node">
                            <span className="permission-user">일반회원</span>
                          </div>
                          <div className="tree-node">
                            <span className="permission-custom">VIP회원</span>
                          </div>
                        </div>
                      </div>
                      <div className="tree-node">
                        <span className="permission-custom">운영자</span>
                        <div className="tree-children">
                          <div className="tree-node">
                            <span className="permission-custom">콘텐츠 관리자</span>
                          </div>
                          <div className="tree-node">
                            <span className="permission-custom">고객 관리자</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hierarchy-benefits">
                  <h4>계층 구조의 장점</h4>
                  <ul>
                    <li><strong>- 권한 상속:</strong> 상위 권한은 하위 권한의 모든 기능을 자동으로 포함</li>
                    <li><strong>- 체계적 관리:</strong> 권한 관계를 명확하게 파악하고 관리 가능</li>
                    <li><strong>- 확장성:</strong> 새로운 권한을 기존 구조에 쉽게 추가</li>
                    <li><strong>- 유지보수:</strong> 권한 변경 시 계층 구조를 통한 일괄 적용</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="add-permission">새 권한 추가</h2>
        <div className="card">
          <div className="card-title">권한 생성 및 설정</div>
          <p>새로운 권한을 생성하고 기존 권한 구조에 적절히 배치하는 방법을 안내합니다.</p>
          
          <div className="step-content">
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">1</span>
                권한 추가 버튼 클릭
              </div>
              <p>권한 목록 화면에서 <strong>'새 권한 추가'</strong> 버튼을 클릭합니다.</p>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">2</span>
                권한 정보 입력
              </div>
              <p>새로운 권한의 기본 정보를 입력합니다.</p>
              
              <div className="form-example">
                <h4>권한 추가 폼 예시</h4>
                <div className="form-panel">
                  <div className="form-group">
                    <label className="form-label">권한 이름 *</label>
                    <input type="text" className="form-input" placeholder="예: VIP회원, 콘텐츠 편집자" />
                    <div className="form-help">권한을 식별할 수 있는 명확한 이름을 입력하세요.</div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">부모 권한 선택</label>
                    <select className="form-select">
                      <option value="">상위 권한 없음 (최상위 권한)</option>
                      <option value="admin">관리자</option>
                      <option value="user">일반회원</option>
                    </select>
                    <div className="form-help">선택한 부모 권한의 하위에 이 권한이 생성됩니다.</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-title">
                <span className="step-number">3</span>
                권한 생성 완료
              </div>
              <p>모든 설정을 확인 후 <strong>'권한 생성'</strong> 버튼을 클릭하여 새로운 권한을 생성합니다.</p>
              
              <div className="alert alert-success">
                <strong>✅ 생성 완료:</strong> 새로운 권한이 성공적으로 생성되었습니다. 이제 고객에게 이 권한을 부여할 수 있습니다.
              </div>
            </div>
          </div>
        </div>

        <h2 id="permission-management">권한 목록 관리</h2>
        <div className="card">
          <div className="card-title">기존 권한 관리</div>
          <p>생성된 권한들을 수정, 삭제하고 권한별 사용자 현황을 확인할 수 있습니다.</p>
          
          <div className="management-functions">
            <div className="function-item">
              <div className="function-header">
                <span className="function-icon">✏️</span>
                <h3>권한 수정</h3>
              </div>
              <div className="function-content">
                <p>기존 권한의 이름, 설명, 기능 접근 범위 등을 수정할 수 있습니다.</p>
                <ul>
                  <li>권한 이름 및 설명 변경</li>
                  <li>부모 권한 재설정 (계층 구조 변경)</li>
                  <li>기능 접근 권한 추가/제거</li>
                  <li>권한 색상 변경</li>
                </ul>
                
                <div className="alert alert-warning">
                  <strong>⚠️ 주의:</strong> 권한 수정은 해당 권한을 가진 모든 사용자에게 즉시 적용됩니다.
                </div>
              </div>
            </div>
            
            <div className="function-item">
              <div className="function-header">
                <span className="function-icon">🗑️</span>
                <h3>권한 삭제</h3>
              </div>
              <div className="function-content">
                <p>더 이상 사용하지 않는 권한을 삭제할 수 있습니다.</p>
                
                <div className="deletion-conditions">
                  <h4>삭제 가능 조건</h4>
                  <ul>
                    <li>해당 권한을 가진 사용자가 없어야 함</li>
                    <li>하위 권한이 없어야 함 (자식 권한이 있는 경우 삭제 불가)</li>
                    <li>기본 등급으로 설정되지 않아야 함</li>
                    <li>시스템 기본 권한이 아니어야 함</li>
                  </ul>
                </div>
                
                <div className="alert alert-danger">
                  <strong>🚨 경고:</strong> 삭제된 권한은 복구할 수 없습니다. 삭제 전 충분히 검토하세요.
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="best-practices">모범 사례</h2>
        <div className="card">
          <div className="card-title">효과적인 권한 관리</div>
          
          <div className="best-practices">
            <div className="practice-item">
              <h4>✅ 최소 권한 원칙</h4>
              <p>사용자에게는 업무 수행에 필요한 최소한의 권한만 부여하여 보안을 강화하세요.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 계층 구조 활용</h4>
              <p>권한을 계층적으로 구성하여 관리 효율성을 높이고 권한 상속을 적극 활용하세요.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 정기적인 권한 검토</h4>
              <p>주기적으로 사용자의 권한을 검토하여 불필요한 권한은 제거하고 필요한 권한은 추가하세요.</p>
            </div>
            
            <div className="practice-item">
              <h4>✅ 명확한 권한명</h4>
              <p>권한 이름과 설명을 명확하게 작성하여 관리자들이 쉽게 이해할 수 있도록 하세요.</p>
            </div>
          </div>
        </div>

        <h2 id="troubleshooting">자주 묻는 질문</h2>
        <div className="card">
          <div className="card-title">권한 관리 FAQ</div>
          
          <div className="faq-list">
            <div className="card">
              <div className="card-title">Q. 권한을 삭제할 수 없어요.</div>
              <p><strong>A.</strong> 해당 권한을 사용하는 사용자가 있거나 하위 권한이 존재하는 경우 삭제할 수 없습니다. 먼저 사용자들의 권한을 변경하고 하위 권한을 정리한 후 삭제하세요.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 권한 변경이 적용되지 않습니다.</div>
              <p><strong>A.</strong> 권한 변경은 즉시 적용되지만, 이미 로그인한 사용자는 다음 로그인 시부터 새로운 권한이 적용됩니다. 즉시 적용이 필요한 경우 해당 사용자의 세션을 강제 종료하세요.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 기본 등급 설정을 변경했는데 기존 사용자에게도 적용되나요?</div>
              <p><strong>A.</strong> 기본 등급 설정은 신규 가입자에게만 적용됩니다. 기존 사용자의 권한은 변경되지 않으므로 필요시 개별적으로 변경해야 합니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 권한 계층 구조를 변경할 수 있나요?</div>
              <p><strong>A.</strong> 네, 권한 수정 기능을 통해 부모 권한을 변경하여 계층 구조를 재구성할 수 있습니다. 다만 순환 참조가 발생하지 않도록 주의하세요.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 권한별 사용자 수가 실시간으로 업데이트되나요?</div>
              <p><strong>A.</strong> 권한별 사용자 수는 실시간으로 업데이트됩니다. 다만 캐시로 인해 최대 5분 정도의 지연이 있을 수 있습니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 관리자 권한을 가진 사용자가 한 명뿐인데 권한을 변경할 수 있나요?</div>
              <p><strong>A.</strong> 시스템에 최소 한 명의 관리자가 있어야 하므로, 마지막 관리자의 권한을 변경하기 전에 다른 사용자에게 관리자 권한을 부여해야 합니다.</p>
            </div>
          </div>
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">도움이 필요하신가요?</div>
          <p>권한 관리와 관련하여 추가 도움이 필요하시면 언제든 연락주세요.</p>
          
          <div className="grid-container">
            <div className="card">
              <div className="card-title">📧 기술 지원</div>
              <p>support@mbaas.com</p>
              <p>권한 관리 관련 문의</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MemberPermissions;