import React, { useState } from 'react';
import '../../../styles/components/board.css';

function BoardManagement({ title = "게시판 관리", description }) {
  return (
    <>
      <h1>{title}</h1>
      <p className="main-description">
        게시판을 생성, 수정, 삭제할 수 있습니다. 각 게시판마다 다양한 설정을 통해 운영 목적에 맞게 구성할 수 있습니다.
      </p>

      {/* 게시판 생성 */}
      <div className="card">
        <h2 className="card-title">
          게시판 생성하기
        </h2>
        <p>새로운 게시판을 만들어 커뮤니티를 활성화하세요.</p>
        
        <div className="step-content">
          <div className="step-item">
            <div className="step-title">
              <span className="step-number">1</span>
              기본 정보 설정
            </div>
            <div className="step-content">
              <div className="field-group table-example">
                <h4>게시판 명</h4>
                <input className='form-input' placeholder='사용자가 볼 수 있는 게시판의 이름을 입력하세요.' disabled></input>
                <div className="form-help">
                  <strong>예시:</strong> 공지사항, 자유게시판, 질문과 답변
                </div>
              </div>
              
              <div className="field-group table-example">
                <h4>설명</h4>
                <input className='form-input' placeholder='게시판의 목적과 사용 규칙을 간단히 설명하세요.' disabled></input>
                <div className="form-help">
                  <strong>예시:</strong> 중요한 공지사항을 확인하는 곳입니다. 궁금한 점은 질문해 주세요.
                </div>
              </div>
            </div>
          </div>

          <div className="step-item">
            <div className="step-title">
              <span className="step-number">2</span>
                게시판 유형 선택
            </div>
            <div className="step-content">
              <div className="grid-container">
                <div className="card">
                  <div className="type-info">
                    <strong>📢 공지</strong>
                    <p>중요한 알림이나 정보를 전달하는 게시판</p>
                  </div>
                </div>
                <div className="card">
                  <div className="type-info">
                    <strong>❓ Q&A</strong>
                    <p>질문과 답변을 주고받는 게시판</p>
                  </div>
                </div>
                <div className="card">
                  <div className="type-info">
                    <strong>⭐ 리뷰</strong>
                    <p>서비스에 대한 후기를 작성하는 게시판</p>
                  </div>
                </div>
                <div className="card">
                  <div className="type-info">
                    <strong>💬 자유</strong>
                    <p>자유로운 주제로 소통하는 게시판</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-item">
            <div className="step-title">
              <span className="step-number">3</span>
                접근 권한 설정
            </div>
            <div className="step-content">
              <div className="grid-container">
                <div className="card">
                  <div className="permission-radio">
                    <input type="radio" name="access" id="public" />
                    <label htmlFor="public">
                      <div className="permission-info">
                        <strong>🌐 전체 공개</strong>
                        <p>모든 방문자가 게시판을 볼 수 있습니다</p>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="card">
                  <div className="permission-radio">
                    <input type="radio" name="access" id="members" />
                    <label htmlFor="members">
                      <div className="permission-info">
                        <strong>🔒 로그인 사용자만</strong>
                        <p>회원가입 후 로그인한 사용자만 볼 수 있습니다</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-item">
            <div className="step-title">
              <span className="step-number">4</span>
                기능 설정
            </div>
            <div className="step-content">
              <div className="grid-container">
                <div className="card">
                  <div className="feature-toggle">
                    <label htmlFor="comments">
                      <div className="feature-info">
                        <strong>💬 댓글 허용</strong>
                        <p>게시글에 댓글을 달 수 있도록 허용합니다</p>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="card">
                  <div className="feature-toggle">
                    <label htmlFor="attachments">
                      <div className="feature-info">
                        <strong>📎 파일 첨부 허용</strong>
                        <p>게시글에 파일을 첨부할 수 있도록 허용합니다</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="step-item">
            <div className="step-title">
              <span className="step-number">5</span>
                활성화 상태
            </div>
            <div className="step-content">
              <div className="card">
                <label htmlFor="active">
                  <div className="activation-info">
                    <strong>✅ 게시판 활성화</strong>
                    <p>체크하면 게시판이 즉시 사용 가능해집니다</p>
                  </div>
                </label>
              </div>
              <div className="alert alert-info">
                <strong>참고:</strong> 비활성화된 게시판은 관리자만 볼 수 있습니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 게시판 수정 */}
      <div className="card">
        <h2 className="card-title">
          게시판 수정하기
        </h2>
        <p>기존 게시판의 설정을 변경할 수 있습니다.</p>
        
        <div className="step-content">
          <div className="step-item">
            <div className="step-title">
              <span className="step-number">1</span>
              수정할 게시판 선택
            </div>
            <p>게시판 목록에서 수정하고 싶은 게시판을 찾아주세요.</p>
          </div>
          
          <div className="step-item">
            <div className="step-title">
              <span className="step-number">2</span>
              설정 변경
            </div>
            <p>생성할 때와 동일한 항목들을 수정할 수 있습니다:</p>
            <div className="grid-container">
              <div className="card">
                <span className="edit-icon">📝</span>
                <strong>게시판 명과 설명</strong>
                <p> - 언제든지 변경 가능</p>
              </div>
              <div className="card">
                <span className="edit-icon">🔄</span>
                <strong>게시판 유형</strong> 
                <p> - 공지, Q&A, 리뷰, 자유 중 선택</p>
              </div>
              <div className="card">
                <span className="edit-icon">🔐</span>
                <strong>접근 권한</strong> 
                <p> - 전체 공개 또는 로그인 사용자만</p>
              </div>
              <div className="card">
                <span className="edit-icon">⚙️</span>
                <strong>기능 설정</strong> 
                <p> - 댓글 허용, 파일 첨부 허용</p>
              </div>
              <div className="card">
                <span className="edit-icon">🔆</span>
                <strong>활성화 상태</strong>
                <p> - 게시판 사용 여부</p>
              </div>
            </div>
          </div>
          
          <div className="step-item">
            <div className="step-title">
              <span className="step-number">3</span>
              변경사항 저장
            </div>
            <p>모든 설정을 확인한 후 저장하면 즉시 적용됩니다.</p>
            <div className="alert alert-warning">
              <strong>주의:</strong> 게시판을 비활성화하면 사용자들이 접근할 수 없게 됩니다.
            </div>
          </div>
        </div>
      </div>

      {/* 게시판 삭제 */}
      <div className="card">
        <h2 className="card-title">
          게시판 삭제하기
        </h2>
        <p>더 이상 사용하지 않는 게시판을 완전히 제거할 수 있습니다.</p>
        
        <div className="step-content">
          <div className="table-example ">
            <h4>⚠️ 삭제 전 확인사항</h4>
            <ul className="warning-list">
              <li>- 삭제된 게시판은 복구할 수 없습니다</li>
              <li>- 게시판 내 모든 게시글과 댓글이 함께 삭제됩니다</li>
              <li>- 첨부된 파일들도 모두 삭제됩니다</li>
              <li>- 삭제 후에는 되돌릴 수 없으니 신중히 결정해 주세요</li>
            </ul>
          </div>
          
          <div className="deletion-steps">
            <h2 className='card-title'>삭제 방법</h2>
            <div className="step-content">
              <div className="step-item">
                <div className="step-title">
                  <span className="step-number">1</span>
                  게시판 선택
                </div>
                <div className="step-info">
                  <p>삭제하려는 게시판을 게시판 목록에서 찾아주세요</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-title">
                  <span className="step-number">2</span>
                  삭제 버튼 클릭
                </div>
                <div className="step-info">
                  <p>게시판 설정에서 '삭제' 버튼을 클릭해주세요</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-title">
                  <span className="step-number">3</span>
                  삭제 확인
                </div>
                <div className="step-info">
                  <p>정말 삭제하시겠냐는 확인 메시지에서 '확인'을 클릭해주세요</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="table-example">
            <h2 className='card-title'>💡 대안: 게시판 비활성화</h2>
            <p>완전히 삭제하기보다는 게시판을 비활성화하는 것을 고려해보세요:</p>
            <ul>
              <li>- 데이터는 보존되면서 사용자에게는 보이지 않습니다</li>
              <li>- 필요시 언제든 다시 활성화할 수 있습니다</li>
              <li>- sss실수로 인한 데이터 손실을 방지할 수 있습니다</li>
            </ul>
          </div>
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
    </>
  );
}

export default BoardManagement;