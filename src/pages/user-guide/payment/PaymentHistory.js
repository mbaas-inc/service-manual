import React from 'react';
import '../../../styles/components/payment.css';

function PaymentHistory() {
  return (
    <>
      <section id="main-content">
        <h1>결제 내역 조회</h1>
        
        <p className="main-description">
          모든 결제 거래 내역을 조회하고 관리할 수 있습니다. 다양한 검색 필터와 정렬 옵션을 통해 원하는 결제 내역을 빠르게 찾을 수 있습니다.
        </p>

        <div className="alert alert-info">
          <strong>💡 안내:</strong> 결제 내역은 실시간으로 업데이트되며, 최대 5년간의 데이터를 조회할 수 있습니다.
        </div>

        <h2 id="overview">결제 내역 개요</h2>
        <div className="card">
          <div className="card-title">주요 기능</div>
          <p>결제 내역 조회 페이지에서 제공하는 다양한 기능들을 확인하세요.</p>
          
          <div className="grid-container">
            <div className="card feature-card high">
              <div className="card-title">
                <span className="feature-icon">🔍</span>
                고급 검색
                <span className="priority-badge">필수</span>
              </div>
              <p>고객명, 주문번호, 상품명으로 빠른 검색이 가능합니다.</p>
            </div>
            
            <div className="card feature-card high">
              <div className="card-title">
                <span className="feature-icon">📅</span>
                기간별 조회
              </div>
              <p>시작일부터 종료일까지 원하는 기간의 결제 내역을 조회할 수 있습니다.</p>
            </div>
            
            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">🎯</span>
                상태별 필터
              </div>
              <p>성공, 실패, 환불 등 결제 상태별로 내역을 필터링할 수 있습니다.</p>
            </div>
            
            <div className="card feature-card">
              <div className="card-title">
                <span className="feature-icon">📊</span>
                정렬 및 내보내기
              </div>
              <p>다양한 기준으로 정렬하고 Excel로 내보낼 수 있습니다.</p>
            </div>
          </div>
        </div>

        <h2 id="search-filters">검색 및 필터</h2>
        <div className="card">
          <div className="card-title">검색 및 필터 옵션</div>
          <p>원하는 결제 내역을 빠르게 찾기 위한 다양한 검색 및 필터 옵션을 제공합니다.</p>
          
          <div className="filter-demo-section">
            <h3>검색 및 필터 화면 예시</h3>
            <div className="filter-panel">
              <div className="filter-row">
                <div className="filter-group">
                  <label className="filter-label">기간 선택</label>
                  <div className="date-range">
                    <input type="date" className="filter-input date-input" defaultValue="2024-01-01" />
                    <span className="date-separator">~</span>
                    <input type="date" className="filter-input date-input" defaultValue="2024-12-31" />
                  </div>
                  <div className="quick-dates">
                    <button className="quick-date-btn">오늘</button>
                    <button className="quick-date-btn">어제</button>
                    <button className="quick-date-btn">최근 7일</button>
                    <button className="quick-date-btn active">최근 30일</button>
                    <button className="quick-date-btn">최근 3개월</button>
                  </div>
                </div>
              </div>
              
              <div className="filter-row">
                <div className="filter-group">
                  <label className="filter-label">결제 상태</label>
                  <select className="filter-select">
                    <option value="">전체</option>
                    <option value="success">결제 성공</option>
                    <option value="failed">결제 실패</option>
                    <option value="refunded">환불 완료</option>
                    <option value="partial_refund">부분 환불</option>
                    <option value="cancelled">결제 취소</option>
                  </select>
                </div>
                
                <div className="filter-group">
                  <label className="filter-label">정렬 기준</label>
                  <select className="filter-select">
                    <option value="date_desc">최신순</option>
                    <option value="date_asc">오래된순</option>
                    <option value="amount_desc">금액 높은순</option>
                    <option value="amount_asc">금액 낮은순</option>
                    <option value="customer_name">고객명순</option>
                  </select>
                </div>
              </div>
              
              <div className="filter-row">
                <div className="filter-group search-group">
                  <label className="filter-label">통합 검색</label>
                  <div className="search-input-wrapper">
                    <input 
                      type="text" 
                      className="filter-input search-input" 
                      placeholder="고객명, 주문번호, 상품명으로 검색..."
                    />
                    <button className="search-btn">
                      <span className="search-icon">🔍</span>
                    </button>
                  </div>
                  <div className="search-help">
                    <small>💡 여러 키워드는 공백으로 구분하여 입력하세요</small>
                  </div>
                </div>
              </div>
              
              <div className="filter-actions">
                <button className="btn btn-primary">검색</button>
              </div>
            </div>
          </div>
        </div>

        <h2 id="payment-list">결제 내역 목록</h2>
        <div className="card">
          <div className="card-title">결제 내역 테이블</div>
          <p>검색 조건에 따른 결제 내역이 표시됩니다. 각 항목을 클릭하면 상세 정보를 확인할 수 있습니다.</p>
                
          <div className="payment-table-wrapper">
            <table className="payment-table">
              <thead>
                <tr>
                  <th className="sortable">
                    결제일
                    <span className="sort-icon">↓</span>
                  </th>
                  <th className="sortable">고객명</th>
                  <th className="sortable">주문번호</th>
                  <th>상품명</th>
                  <th>결제수단</th>
                  <th>플랫폼</th>
                  <th className="sortable amount-column">
                    결제금액
                    <span className="sort-icon"></span>
                  </th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr className="payment-row">
                  <td className="date-column">
                    <div className="date-time">
                      <div className="date">2024.03.15</div>
                      <div className="time">14:23:45</div>
                    </div>
                  </td>
                  <td className="customer-column">
                    <div className="customer-info">
                      <div className="customer-name">김민수</div>
                    </div>
                  </td>
                  <td className="order-column">
                    <div className="order-number">ORD-20240315-001</div>
                  </td>
                  <td className="product-column">
                    <div className="product-name">프리미엄 플랜 (월간)</div>
                  </td>
                  <td className="payment-method-column">
                    <div className="payment-method">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                      <span className="method-text">신용카드</span>
                      <div className="method-detail">KB국민카드 (****1234)</div>
                    </div>
                  </td>
                  <td className="platform-column">
                    <span className="platform-badge web">WEB</span>
                  </td>
                  <td className="amount-column">
                    <div className="amount-info">
                      <div className="amount">29,900원</div>
                    </div>
                  </td>
                  <td className="status-column">
                    <span className="status-badge success">결제완료</span>
                  </td>
                </tr>
                
                <tr className="payment-row">
                  <td className="date-column">
                    <div className="date-time">
                      <div className="date">2024.03.15</div>
                      <div className="time">13:45:12</div>
                    </div>
                  </td>
                  <td className="customer-column">
                    <div className="customer-info">
                      <div className="customer-name">이영희</div>
                    </div>
                  </td>
                  <td className="order-column">
                    <div className="order-number">ORD-20240315-002</div>
                  </td>
                  <td className="product-column">
                    <div className="product-name">베이직 플랜 (연간)</div>
                  </td>
                  <td className="payment-method-column">
                    <div className="payment-method">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote-icon lucide-banknote"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                      <span className="method-text">계좌이체</span>
                      <div className="method-detail">신한은행</div>
                    </div>
                  </td>
                  <td className="platform-column">
                    <span className="platform-badge mobile">APP</span>
                  </td>
                  <td className="amount-column">
                    <div className="amount-info">
                      <div className="amount">199,000원</div>
                      <div className="refund-info">환불: -100,900원</div>
                    </div>
                  </td>
                  <td className="status-column">
                    <span className="status-badge partial-refund">부분환불</span>
                  </td>
                </tr>
                
                <tr className="payment-row">
                  <td className="date-column">
                    <div className="date-time">
                      <div className="date">2024.03.15</div>
                      <div className="time">12:15:33</div>
                    </div>
                  </td>
                  <td className="customer-column">
                    <div className="customer-info">
                      <div className="customer-name">박철수</div>
                    </div>
                  </td>
                  <td className="order-column">
                    <div className="order-number">ORD-20240315-003</div>
                  </td>
                  <td className="product-column">
                    <div className="product-name">스탠다드 플랜 (월간)</div>
                  </td>
                  <td className="payment-method-column">
                    <div className="payment-method">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-cards-icon lucide-wallet-cards"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"/></svg>
                      <span className="method-text">카카오페이</span>
                    </div>
                  </td>
                  <td className="platform-column">
                    <span className="platform-badge mobile-web">MOBILE</span>
                  </td>
                  <td className="amount-column">
                    <div className="amount-info">
                      <div className="amount">49,900원</div>
                    </div>
                  </td>
                  <td className="status-column">
                    <span className="status-badge failed">결제실패</span>
                  </td>
                </tr>
                
                <tr className="payment-row">
                  <td className="date-column">
                    <div className="date-time">
                      <div className="date">2024.03.14</div>
                      <div className="time">16:42:18</div>
                    </div>
                  </td>
                  <td className="customer-column">
                    <div className="customer-info">
                      <div className="customer-name">최지영</div>
                    </div>
                  </td>
                  <td className="order-column">
                    <div className="order-number">ORD-20240314-045</div>
                  </td>
                  <td className="product-column">
                    <div className="product-name">프리미엄 플랜 (월간)</div>
                  </td>
                  <td className="payment-method-column">
                    <div className="payment-method">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                      <span className="method-text">신용카드</span>
                      <div className="method-detail">삼성카드 (****5678)</div>
                    </div>
                  </td>
                  <td className="platform-column">
                    <span className="platform-badge web">WEB</span>
                  </td>
                  <td className="amount-column">
                    <div className="amount-info">
                      <div className="amount">29,900원</div>
                      <div className="refund-info">환불: -29,900원</div>
                    </div>
                  </td>
                  <td className="status-column">
                    <span className="status-badge refunded">환불완료</span>
                  </td>
                </tr>
                
                <tr className="payment-row">
                  <td className="date-column">
                    <div className="date-time">
                      <div className="date">2024.03.14</div>
                      <div className="time">15:28:07</div>
                    </div>
                  </td>
                  <td className="customer-column">
                    <div className="customer-info">
                      <div className="customer-name">정민호</div>
                    </div>
                  </td>
                  <td className="order-column">
                    <div className="order-number">ORD-20240314-046</div>
                  </td>
                  <td className="product-column">
                    <div className="product-name">엔터프라이즈 플랜 (연간)</div>
                  </td>
                  <td className="payment-method-column">
                    <div className="payment-method">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote-icon lucide-banknote"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                      <span className="method-text">가상계좌</span>
                      <div className="method-detail">우리은행</div>
                    </div>
                  </td>
                  <td className="platform-column">
                    <span className="platform-badge web">WEB</span>
                  </td>
                  <td className="amount-column">
                    <div className="amount-info">
                      <div className="amount">999,000원</div>
                    </div>
                  </td>
                  <td className="status-column">
                    <span className="status-badge success">결제완료</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <h2 id="payment-detail">결제 상세 정보</h2>
        <div className="card">
          <div className="card-title">결제 상세 보기</div>
          <p>결제 내역 목록에서 '상세보기'를 클릭하면 해당 결제의 자세한 정보를 확인할 수 있습니다.</p>
          
          <div className="payment-detail-demo">
            <div className="detail-modal">
              <div className="modal-header">
                <h3>결제 상세 정보</h3>
                <button className="modal-close">×</button>
              </div>
              
              <div className="modal-content">
                <div className="detail-section">
                  <h4>기본 정보</h4>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <div className="detail-label">주문번호</div>
                      <div className="detail-value">ORD-20240315-001</div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-label">결제일시</div>
                      <div className="detail-value">2024.03.15 14:23:45</div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-label">결제 상태</div>
                      <div className="detail-value">
                        <span className="status-badge success">결제완료</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-label">승인번호</div>
                      <div className="detail-value">12345678</div>
                    </div>
                  </div>
                </div>
                
                <div className="detail-section">
                  <h4>고객 정보</h4>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <div className="detail-label">고객명</div>
                      <div className="detail-value">김민수</div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-label">이메일</div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-label">연락처</div>
                      <div className="detail-value">010-1234-5678</div>
                    </div>
                  </div>
                </div>
                
                <div className="detail-section">
                  <h4>결제 정보</h4>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <div className="detail-label">상품명</div>
                      <div className="detail-value">프리미엄 플랜 (월간)</div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-label">결제수단</div>
                      <div className="detail-value">신용카드 (KB국민카드 ****1234)</div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-label">결제금액</div>
                      <div className="detail-value amount-large">29,900원</div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-label">플랫폼</div>
                      <div className="detail-value">WEB</div>
                    </div>
                  </div>
                </div>
                
                <div className="detail-section">
                  <h4>PG 정보</h4>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <div className="detail-label">PG사</div>
                      <div className="detail-value">KG이니시스</div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-label">거래번호</div>
                      <div className="detail-value">TXN202403151423001</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-actions">
                <button className="btn btn-outline">영수증 출력</button>
                <button className="btn btn-secondary">환불 처리</button>
                <button className="btn btn-primary">확인</button>
              </div>
            </div>
          </div>
        </div> */}

        <h2 id="status-types">결제 상태 유형</h2>
        <div className="card">
          <div className="card-title">결제 상태별 설명</div>
          <p>각 결제 상태의 의미와 특징을 확인하세요.</p>
          
          <div className="status-explanations">
            <div className="status-explanation">
              <div className="status-header">
                <span className="status-badge success">결제완료</span>
                <h4>결제 성공</h4>
              </div>
              <div className="status-content">
                <p>결제가 정상적으로 완료된 상태입니다.</p>
                <ul>
                  <li>PG사에서 결제 승인 완료</li>
                  <li>고객에게 결제 완료 알림 발송</li>
                  <li>서비스 이용 가능</li>
                  <li>정산 대상 포함</li>
                </ul>
              </div>
            </div>
            
            <div className="status-explanation">
              <div className="status-header">
                <span className="status-badge failed">결제실패</span>
                <h4>결제 실패</h4>
              </div>
              <div className="status-content">
                <p>결제 처리 중 오류가 발생한 상태입니다.</p>
                <ul>
                  <li>카드 한도 초과, 잔액 부족</li>
                  <li>카드 정보 오류</li>
                  <li>PG사 시스템 오류</li>
                  <li>서비스 이용 불가</li>
                </ul>
              </div>
            </div>
            
            <div className="status-explanation">
              <div className="status-header">
                <span className="status-badge refunded">환불완료</span>
                <h4>환불 완료</h4>
              </div>
              <div className="status-content">
                <p>결제된 금액이 고객에게 환불된 상태입니다.</p>
                <ul>
                  <li>전액 또는 부분 환불 완료</li>
                  <li>환불 처리 완료 알림 발송</li>
                  <li>서비스 이용 중단</li>
                  <li>정산에서 차감</li>
                </ul>
              </div>
            </div>
            
            <div className="status-explanation">
              <div className="status-header">
                <span className="status-badge partial-refund">부분환불</span>
                <h4>부분 환불</h4>
              </div>
              <div className="status-content">
                <p>결제 금액의 일부만 환불된 상태입니다.</p>
                <ul>
                  <li>사용한 기간만큼 차감 후 환불</li>
                  <li>부분 환불 내역 별도 관리</li>
                  <li>남은 금액만큼 서비스 이용 가능</li>
                </ul>
              </div>
            </div>
            
            <div className="status-explanation">
              <div className="status-header">
                <span className="status-badge cancelled">결제취소</span>
                <h4>결제 취소</h4>
              </div>
              <div className="status-content">
                <p>결제 승인 후 취소 처리된 상태입니다.</p>
                <ul>
                  <li>결제 당일 취소 (승인 취소)</li>
                  <li>실제 결제 발생하지 않음</li>
                  <li>고객 카드에 결제 내역 없음</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <h2 id="export-data">데이터 내보내기</h2>
        <div className="card">
          <div className="card-title">결제 내역 내보내기</div>
          <p>검색된 결제 내역을 Excel 파일로 내보낼 수 있습니다.</p>
          
          <div className="export-options">
            <h3>내보내기 옵션</h3>
            <div className="export-form">
              <div className="export-section">
                <h4>내보낼 데이터 선택</h4>
                <div className="checkbox-group">
                  <label className="checkbox-item">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-text">기본 정보 (결제일, 고객명, 주문번호)</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-text">결제 정보 (상품명, 결제수단, 금액)</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span className="checkbox-text">고객 상세 정보 (이메일, 연락처)</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span className="checkbox-text">PG 정보 (승인번호, 거래번호)</span>
                  </label>
                </div>
              </div>
              
              <div className="export-section">
                <h4>파일 형식</h4>
                <div className="radio-group">
                  <label className="radio-item">
                    <input type="radio" name="file-format" defaultChecked />
                    <span className="radio-text">Excel (.xlsx)</span>
                  </label>
                  <label className="radio-item">
                    <input type="radio" name="file-format" />
                    <span className="radio-text">CSV (.csv)</span>
                  </label>
                </div>
              </div>
              
              <div className="export-actions">
                <button className="btn btn-primary">
                  <span className="btn-icon">📄</span>
                  데이터 내보내기
                </button>
                <div className="export-info">
                  <small>💡 최대 10,000건까지 한 번에 내보낼 수 있습니다.</small>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <h2 id="tips">사용 팁</h2>
        <div className="card">
          <div className="card-title">효율적인 결제 내역 관리 팁</div>
          
          <div className="tips-list">
            <div className="tip-item">
              <h4>💡 빠른 검색 활용</h4>
              <p>통합 검색창에서 주문번호, 고객명, 상품명을 바로 검색할 수 있습니다. 부분 검색도 지원하므로 정확한 전체 내용을 모르더라도 검색 가능합니다.</p>
            </div>
            
            <div className="tip-item">
              <h4>💡 기간별 조회 최적화</h4>
              <p>대량의 데이터를 조회할 때는 기간을 좁혀서 검색하면 더 빠른 결과를 얻을 수 있습니다. 빠른 날짜 버튼을 활용해보세요.</p>
            </div>
            
            <div className="tip-item">
              <h4>💡 정렬 기능 활용</h4>
              <p>금액이 높은 주문부터 확인하거나, 최신 결제부터 확인하는 등 목적에 맞게 정렬 기준을 변경하여 사용하세요.</p>
            </div>
            
            <div className="tip-item">
              <h4>💡 상태별 모니터링</h4>
              <p>결제 실패율이 높은 경우 결제 실패 건만 필터링하여 원인을 분석하고 개선점을 찾을 수 있습니다.</p>
            </div>
            
            <div className="tip-item">
              <h4>💡 정기적인 데이터 백업</h4>
              <p>중요한 결제 데이터는 정기적으로 Excel로 내보내어 백업하는 것을 권장합니다.</p>
            </div>
          </div>
        </div>

        <h2 id="troubleshooting">문제 해결</h2>
        <div className="card">
          <div className="card-title">자주 발생하는 문제</div>
          
          <div className="troubleshooting-list">
            <div className="trouble-item">
              <div className="trouble-header">
                <span className="trouble-icon">🔍</span>
                <h4>검색 결과가 나오지 않아요</h4>
              </div>
              <div className="trouble-content">
                <div className="trouble-causes">
                  <h5>가능한 원인</h5>
                  <ul>
                    <li>검색 조건이 너무 구체적인 경우</li>
                    <li>날짜 범위가 잘못 설정된 경우</li>
                    <li>상태 필터가 잘못 선택된 경우</li>
                    <li>오타가 있는 경우</li>
                  </ul>
                </div>
                <div className="trouble-solutions">
                  <h5>해결 방법</h5>
                  <ol>
                    <li>검색 조건을 단순화하여 다시 시도</li>
                    <li>날짜 범위를 넓혀서 검색</li>
                    <li>모든 필터를 초기화 후 다시 검색</li>
                    <li>부분 검색어로 시도</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="trouble-item">
              <div className="trouble-header">
                <span className="trouble-icon">⏳</span>
                <h4>페이지 로딩이 느려요</h4>
              </div>
              <div className="trouble-content">
                <div className="trouble-causes">
                  <h5>가능한 원인</h5>
                  <ul>
                    <li>너무 많은 데이터를 한 번에 조회</li>
                    <li>네트워크 연결 상태 불량</li>
                    <li>서버 부하 증가</li>
                  </ul>
                </div>
                <div className="trouble-solutions">
                  <h5>해결 방법</h5>
                  <ol>
                    <li>검색 기간을 줄여서 조회</li>
                    <li>브라우저 새로고침</li>
                    <li>잠시 후 다시 시도</li>
                    <li>페이지당 표시 개수 줄이기</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="trouble-item">
              <div className="trouble-header">
                <span className="trouble-icon">📁</span>
                <h4>Excel 내보내기가 실패해요</h4>
              </div>
              <div className="trouble-content">
                <div className="trouble-causes">
                  <h5>가능한 원인</h5>
                  <ul>
                    <li>내보낼 데이터가 너무 많은 경우</li>
                    <li>브라우저의 팝업 차단</li>
                    <li>권한 부족</li>
                  </ul>
                </div>
                <div className="trouble-solutions">
                  <h5>해결 방법</h5>
                  <ol>
                    <li>검색 조건을 추가하여 데이터 수 줄이기</li>
                    <li>브라우저 팝업 허용 설정</li>
                    <li>관리자 권한 확인</li>
                    <li>여러 번에 나누어 내보내기</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="faq">자주 묻는 질문</h2>
        <div className="card">
          <div className="card-title">결제 내역 조회 FAQ</div>
          
          <div className="faq-list">
            <div className="card">
              <div className="card-title">Q. 결제 내역은 얼마나 오래 보관되나요?</div>
              <p><strong>A.</strong> 법적 요구사항에 따라 최소 5년간 보관됩니다. 삭제된 데이터는 복구할 수 없으므로 정기적으로 백업하시기 바랍니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 실시간으로 결제 내역이 업데이트되나요?</div>
              <p><strong>A.</strong> 네, 결제가 완료되는 즉시 내역에 반영됩니다. 단, PG사의 상황에 따라 1-2분 정도 지연될 수 있습니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 환불 처리는 어떻게 하나요?</div>
              <p><strong>A.</strong> 결제 상세 화면에서 '환불 처리' 버튼을 클릭하여 환불을 진행할 수 있습니다. 전액/부분 환불 모두 지원합니다.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 결제 실패 사유를 확인할 수 있나요?</div>
              <p><strong>A.</strong> 결제 상세 정보에서 PG사로부터 받은 실패 사유를 확인할 수 있습니다. 자세한 분석은 결제 리포트 메뉴를 활용하세요.</p>
            </div>
            
            <div className="card">
              <div className="card-title">Q. 대량의 데이터를 한 번에 내보낼 수 있나요?</div>
              <p><strong>A.</strong> 성능상의 이유로 한 번에 최대 10,000건까지만 내보낼 수 있습니다. 더 많은 데이터가 필요한 경우 기간을 나누어서 여러 번 내보내세요.</p>
            </div>
          </div>
        </div>

        <h2 id="support">추가 지원</h2>
        <div className="card">
          <div className="card-title">도움이 필요하신가요?</div>
          <p>결제 내역 조회와 관련하여 추가 도움이 필요하시면 언제든 연락주세요.</p>
          <div className="grid-container">
            <div className="card">
              <div className="card-title">📧 기술 지원</div>
              <p>support@mbaas.com</p>
              <p>결제 관련 기술 문의</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentHistory;