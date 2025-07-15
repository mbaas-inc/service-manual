import React from 'react';
import QuickStartPage from '../pages/QuickStartPage';
import MemberManagementPage from '../pages/MemberManagementPage';
import MessagingPage from '../pages/MessagingPage';
import DefaultPage from '../pages/DefaultPage';

function MainContent({ activeSection }) {
  // 페이지 매핑 객체
  const pageMapping = {
    // 시작하기
    'quick-start': { component: QuickStartPage, title: '빠른 시작 가이드', breadcrumb: '빠른 시작 가이드' },
    'account-setup': { component: DefaultPage, title: '계정 생성하기', breadcrumb: '계정 생성하기', description: 'BaaS 계정을 생성하고 첫 번째 프로젝트를 시작하는 방법을 안내합니다.' },
    'dashboard-overview': { component: DefaultPage, title: '대시보드 둘러보기', breadcrumb: '대시보드 둘러보기', description: '관리자 대시보드의 각 기능과 사용법을 상세히 설명합니다.' },
    
    // 회원 관리
    'member-overview': { component: MemberManagementPage, title: '회원 관리 개요', breadcrumb: '회원 관리 개요' },
    'member-registration': { component: DefaultPage, title: '회원 가입 설정', breadcrumb: '회원 가입 설정', description: '사용자 회원가입 프로세스를 설정하고 관리하는 방법을 안내합니다.' },
    'member-list': { component: DefaultPage, title: '회원 목록 보기', breadcrumb: '회원 목록 보기', description: '가입한 회원들의 목록을 확인하고 관리하는 방법을 설명합니다.' },
    'member-profile': { component: DefaultPage, title: '회원 정보 관리', breadcrumb: '회원 정보 관리', description: '개별 회원의 정보를 수정하고 관리하는 방법을 안내합니다.' },
    'member-permissions': { component: DefaultPage, title: '권한 설정하기', breadcrumb: '권한 설정하기', description: '회원별 권한 등급을 설정하고 관리하는 방법을 설명합니다.' },
    'member-export': { component: DefaultPage, title: '회원 데이터 내보내기', breadcrumb: '회원 데이터 내보내기', description: '회원 정보를 CSV나 Excel 파일로 내보내는 방법을 안내합니다.' },
    
    // 메시지 발송
    'message-overview': { component: MessagingPage, title: '메시지 서비스 개요', breadcrumb: '메시지 서비스 개요' },
    'send-email': { component: DefaultPage, title: '이메일 보내기', breadcrumb: '이메일 보내기', description: '회원들에게 이메일을 발송하는 방법과 모범 사례를 안내합니다.' },
    'send-sms': { component: DefaultPage, title: 'SMS 발송하기', breadcrumb: 'SMS 발송하기', description: 'SMS 메시지를 발송하고 관리하는 방법을 상세히 설명합니다.' },
    'push-notifications': { component: DefaultPage, title: '푸시 알림 보내기', breadcrumb: '푸시 알림 보내기', description: '모바일 앱 사용자에게 푸시 알림을 보내는 방법을 안내합니다.' },
    'message-templates': { component: DefaultPage, title: '메시지 템플릿 만들기', breadcrumb: '메시지 템플릿 만들기', description: '재사용 가능한 메시지 템플릿을 만들고 관리하는 방법을 설명합니다.' },
    'bulk-messaging': { component: DefaultPage, title: '대량 메시지 발송', breadcrumb: '대량 메시지 발송', description: '많은 수의 회원에게 한 번에 메시지를 발송하는 방법을 안내합니다.' },
    'message-history': { component: DefaultPage, title: '발송 내역 확인', breadcrumb: '발송 내역 확인', description: '발송한 메시지들의 결과와 통계를 확인하는 방법을 설명합니다.' },
    
    // 결제 관리
    'payment-setup': { component: DefaultPage, title: '결제 시스템 설정', breadcrumb: '결제 시스템 설정', description: '온라인 결제 시스템을 설정하고 연동하는 방법을 안내합니다.' },
    'payment-methods': { component: DefaultPage, title: '결제 수단 관리', breadcrumb: '결제 수단 관리', description: '다양한 결제 수단을 추가하고 관리하는 방법을 설명합니다.' },
    'payment-history': { component: DefaultPage, title: '결제 내역 조회', breadcrumb: '결제 내역 조회', description: '결제 내역을 조회하고 분석하는 방법을 안내합니다.' },
    'refund-management': { component: DefaultPage, title: '환불 처리하기', breadcrumb: '환불 처리하기', description: '고객의 환불 요청을 처리하고 관리하는 방법을 설명합니다.' },
    'payment-reports': { component: DefaultPage, title: '결제 리포트 보기', breadcrumb: '결제 리포트 보기', description: '결제 관련 리포트를 생성하고 분석하는 방법을 안내합니다.' },
    
    // 콘텐츠 관리
    'content-overview': { component: DefaultPage, title: '콘텐츠 관리 개요', breadcrumb: '콘텐츠 관리 개요', description: '앱 내 콘텐츠를 관리하는 전반적인 방법을 설명합니다.' },
    'board-management': { component: DefaultPage, title: '게시판 만들기', breadcrumb: '게시판 만들기', description: '공지사항, 커뮤니티 등의 게시판을 만들고 관리하는 방법을 안내합니다.' },
    'post-management': { component: DefaultPage, title: '게시글 관리하기', breadcrumb: '게시글 관리하기', description: '게시글을 작성, 수정, 삭제하고 관리하는 방법을 설명합니다.' },
    'comment-moderation': { component: DefaultPage, title: '댓글 관리하기', breadcrumb: '댓글 관리하기', description: '댓글을 모니터링하고 관리하는 방법을 안내합니다.' },
    'file-management': { component: DefaultPage, title: '파일 업로드 관리', breadcrumb: '파일 업로드 관리', description: '파일 업로드 기능을 설정하고 관리하는 방법을 설명합니다.' },
    
    // 통계 및 분석
    'analytics-overview': { component: DefaultPage, title: '통계 대시보드', breadcrumb: '통계 대시보드', description: '서비스 이용 현황을 한눈에 볼 수 있는 대시보드 사용법을 안내합니다.' },
    'user-analytics': { component: DefaultPage, title: '사용자 분석', breadcrumb: '사용자 분석', description: '사용자 행동과 패턴을 분석하는 방법을 설명합니다.' },
    'usage-statistics': { component: DefaultPage, title: '사용량 통계', breadcrumb: '사용량 통계', description: '서비스 사용량 통계를 확인하고 분석하는 방법을 안내합니다.' },
    'reports-export': { component: DefaultPage, title: '리포트 내보내기', breadcrumb: '리포트 내보내기', description: '분석 결과를 다양한 형태로 내보내는 방법을 설명합니다.' },
    
    // 설정
    'general-settings': { component: DefaultPage, title: '일반 설정', breadcrumb: '일반 설정', description: '서비스의 기본적인 설정을 변경하고 관리하는 방법을 안내합니다.' },
    'security-settings': { component: DefaultPage, title: '보안 설정', breadcrumb: '보안 설정', description: '계정 보안과 데이터 보호를 위한 설정 방법을 설명합니다.' },
    'notification-settings': { component: DefaultPage, title: '알림 설정', breadcrumb: '알림 설정', description: '각종 알림을 설정하고 관리하는 방법을 안내합니다.' },
    'billing-settings': { component: DefaultPage, title: '요금 및 결제 설정', breadcrumb: '요금 및 결제 설정', description: '요금제와 결제 방법을 설정하고 관리하는 방법을 설명합니다.' },
    
    // 도움말
    'faq-common': { component: DefaultPage, title: '자주 묻는 질문', breadcrumb: '자주 묻는 질문', description: '사용자들이 자주 묻는 질문과 답변을 확인하세요.' },
    'tutorials-video': { component: DefaultPage, title: '동영상 튜토리얼', breadcrumb: '동영상 튜토리얼', description: '기능별 동영상 튜토리얼을 통해 쉽게 배워보세요.' },
    'support-contact': { component: DefaultPage, title: '고객 지원 문의', breadcrumb: '고객 지원 문의', description: '기술 지원팀에 문의하는 방법과 절차를 안내합니다.' },
    'community': { component: DefaultPage, title: '사용자 커뮤니티', breadcrumb: '사용자 커뮤니티', description: '다른 사용자들과 정보를 공유하고 소통하는 커뮤니티를 이용하세요.' }
  };

  // 현재 활성 페이지 정보 가져오기
  const currentPage = pageMapping[activeSection] || pageMapping['quick-start'];
  const PageComponent = currentPage.component;

  return (
    <main className="main-content">
      {/* 브레드크럼 */}
      <nav className="breadcrumb">
        <a href="#home">홈</a>
        <span className="separator">/</span>
        <a href="#user-guide">사용자 가이드</a>
        <span className="separator">/</span>
        <span>{currentPage.breadcrumb}</span>
      </nav>

      {/* 동적 페이지 컴포넌트 렌더링 */}
      {currentPage.component === DefaultPage ? (
        <PageComponent 
          title={currentPage.title}
          description={currentPage.description}
        />
      ) : (
        <PageComponent />
      )}
    </main>
  );
}

export default MainContent;