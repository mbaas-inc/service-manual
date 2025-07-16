// 사용자 가이드 페이지 import
import QuickStart from '../pages/user-guide/getting-started/QuickStartPage';
import AccountSetup from '../pages/user-guide/getting-started/AccountSetup';
import DashboardOverview from '../pages/user-guide/getting-started/DashboardOverview';

// 회원 관리
import MemberOverview from '../pages/user-guide/member-management/MemberOverview';
import MemberRegistration from '../pages/user-guide/member-management/MemberRegistration';
import MemberList from '../pages/user-guide/member-management/MemberList';
import MemberProfile from '../pages/user-guide/member-management/MemberProfile';
import MemberPermissions from '../pages/user-guide/member-management/MemberPermissions';
import MemberExport from '../pages/user-guide/member-management/MemberExport';

// 메시지 발송
import MessageOverview from '../pages/user-guide/messaging/MessageOverview';
import SendEmail from '../pages/user-guide/messaging/SendEmail';
import SendSMS from '../pages/user-guide/messaging/SendSMS';
import PushNotifications from '../pages/user-guide/messaging/PushNotifications';
import MessageTemplates from '../pages/user-guide/messaging/MessageTemplates';
import BulkMessaging from '../pages/user-guide/messaging/BulkMessaging';
import MessageHistory from '../pages/user-guide/messaging/MessageHistory';

// 결제 관리
import PaymentSetup from '../pages/user-guide/payment/PaymentSetup';
import PaymentMethods from '../pages/user-guide/payment/PaymentMethods';
import PaymentHistory from '../pages/user-guide/payment/PaymentHistory';
import RefundManagement from '../pages/user-guide/payment/RefundManagement';
import PaymentReports from '../pages/user-guide/payment/PaymentReports';

// 콘텐츠 관리
import ContentOverview from '../pages/user-guide/content/ContentOverview';
import BoardManagement from '../pages/user-guide/content/BoardManagement';
import PostManagement from '../pages/user-guide/content/PostManagement';
import CommentModeration from '../pages/user-guide/content/CommentModeration';
import FileManagement from '../pages/user-guide/content/FileManagement';

// 통계 및 분석
import AnalyticsOverview from '../pages/user-guide/analytics/AnalyticsOverview';
import UserAnalytics from '../pages/user-guide/analytics/UserAnalytics';
import UsageStatistics from '../pages/user-guide/analytics/UsageStatistics';
import ReportsExport from '../pages/user-guide/analytics/ReportsExport';

// 설정
import GeneralSettings from '../pages/user-guide/settings/GeneralSettings';
import SecuritySettings from '../pages/user-guide/settings/SecuritySettings';
import NotificationSettings from '../pages/user-guide/settings/NotificationSettings';
import BillingSettings from '../pages/user-guide/settings/BillingSettings';

// 개발자 문서
import APIReference from '../pages/developer/api/APIReference';
import Authentication from '../pages/developer/api/Authentication';
import SDKOverview from '../pages/developer/sdk/SDKOverview';
import WebhookSetup from '../pages/developer/integration/WebhookSetup';

// 공통 페이지
import DefaultPage from '../pages/common/DefaultPage';

// 📋 페이지 매핑 객체 - 카테고리별로 구조화
export const pageMapping = {
  // 🚀 시작하기
  'quick-start': { 
    component: QuickStart, 
    title: '빠른 시작 가이드', 
    breadcrumb: '빠른 시작 가이드',
    category: 'user-guide',
    subcategory: 'getting-started'
  },
  'account-setup': { 
    component: AccountSetup, 
    title: '계정 생성하기', 
    breadcrumb: '계정 생성하기',
    category: 'user-guide',
    subcategory: 'getting-started',
    description: 'BaaS 계정을 생성하고 첫 번째 프로젝트를 시작하는 방법을 안내합니다.'
  },
  'dashboard-overview': { 
    component: DashboardOverview, 
    title: '대시보드 둘러보기', 
    breadcrumb: '대시보드 둘러보기',
    category: 'user-guide',
    subcategory: 'getting-started',
    description: '관리자 대시보드의 각 기능과 사용법을 상세히 설명합니다.'
  },
  
  // 👥 회원 관리
  'member-overview': { 
    component: MemberOverview, 
    title: '회원 관리 개요', 
    breadcrumb: '회원 관리 개요',
    category: 'user-guide',
    subcategory: 'member-management'
  },
  'member-registration': { 
    component: MemberRegistration, 
    title: '회원 가입 설정', 
    breadcrumb: '회원 가입 설정',
    category: 'user-guide',
    subcategory: 'member-management',
    description: '사용자 회원가입 프로세스를 설정하고 관리하는 방법을 안내합니다.'
  },
  'member-list': { 
    component: MemberList, 
    title: '회원 목록 보기', 
    breadcrumb: '회원 목록 보기',
    category: 'user-guide',
    subcategory: 'member-management',
    description: '가입한 회원들의 목록을 확인하고 관리하는 방법을 설명합니다.'
  },
  'member-profile': { 
    component: MemberProfile, 
    title: '회원 정보 관리', 
    breadcrumb: '회원 정보 관리',
    category: 'user-guide',
    subcategory: 'member-management',
    description: '개별 회원의 정보를 수정하고 관리하는 방법을 안내합니다.'
  },
  'member-permissions': { 
    component: MemberPermissions, 
    title: '권한 설정하기', 
    breadcrumb: '권한 설정하기',
    category: 'user-guide',
    subcategory: 'member-management',
    description: '회원별 권한 등급을 설정하고 관리하는 방법을 설명합니다.'
  },
  'member-export': { 
    component: MemberExport, 
    title: '회원 데이터 내보내기', 
    breadcrumb: '회원 데이터 내보내기',
    category: 'user-guide',
    subcategory: 'member-management',
    description: '회원 정보를 CSV나 Excel 파일로 내보내는 방법을 안내합니다.'
  },
  
  // 📧 메시지 발송
  'message-overview': { 
    component: MessageOverview, 
    title: '메시지 서비스 개요', 
    breadcrumb: '메시지 서비스 개요',
    category: 'user-guide',
    subcategory: 'messaging'
  },
  'send-email': { 
    component: SendEmail, 
    title: '이메일 보내기', 
    breadcrumb: '이메일 보내기',
    category: 'user-guide',
    subcategory: 'messaging',
    description: '회원들에게 이메일을 발송하는 방법과 모범 사례를 안내합니다.'
  },
  'send-sms': { 
    component: SendSMS, 
    title: 'SMS 발송하기', 
    breadcrumb: 'SMS 발송하기',
    category: 'user-guide',
    subcategory: 'messaging',
    description: 'SMS 메시지를 발송하고 관리하는 방법을 상세히 설명합니다.'
  },
  'push-notifications': { 
    component: PushNotifications, 
    title: '푸시 알림 보내기', 
    breadcrumb: '푸시 알림 보내기',
    category: 'user-guide',
    subcategory: 'messaging',
    description: '모바일 앱 사용자에게 푸시 알림을 보내는 방법을 안내합니다.'
  },
  'message-templates': { 
    component: MessageTemplates, 
    title: '메시지 템플릿 만들기', 
    breadcrumb: '메시지 템플릿 만들기',
    category: 'user-guide',
    subcategory: 'messaging',
    description: '재사용 가능한 메시지 템플릿을 만들고 관리하는 방법을 설명합니다.'
  },
  'bulk-messaging': { 
    component: BulkMessaging, 
    title: '대량 메시지 발송', 
    breadcrumb: '대량 메시지 발송',
    category: 'user-guide',
    subcategory: 'messaging',
    description: '많은 수의 회원에게 한 번에 메시지를 발송하는 방법을 안내합니다.'
  },
  'message-history': { 
    component: MessageHistory, 
    title: '발송 내역 확인', 
    breadcrumb: '발송 내역 확인',
    category: 'user-guide',
    subcategory: 'messaging',
    description: '발송한 메시지들의 결과와 통계를 확인하는 방법을 설명합니다.'
  },
  
  // 💳 결제 관리
  'payment-setup': { 
    component: PaymentSetup, 
    title: '결제 시스템 설정', 
    breadcrumb: '결제 시스템 설정',
    category: 'user-guide',
    subcategory: 'payment',
    description: '온라인 결제 시스템을 설정하고 연동하는 방법을 안내합니다.'
  },
  'payment-methods': { 
    component: PaymentMethods, 
    title: '결제 수단 관리', 
    breadcrumb: '결제 수단 관리',
    category: 'user-guide',
    subcategory: 'payment',
    description: '다양한 결제 수단을 추가하고 관리하는 방법을 설명합니다.'
  },
  'payment-history': { 
    component: PaymentHistory, 
    title: '결제 내역 조회', 
    breadcrumb: '결제 내역 조회',
    category: 'user-guide',
    subcategory: 'payment',
    description: '결제 내역을 조회하고 분석하는 방법을 안내합니다.'
  },
  'refund-management': { 
    component: RefundManagement, 
    title: '환불 처리하기', 
    breadcrumb: '환불 처리하기',
    category: 'user-guide',
    subcategory: 'payment',
    description: '고객의 환불 요청을 처리하고 관리하는 방법을 설명합니다.'
  },
  'payment-reports': { 
    component: PaymentReports, 
    title: '결제 리포트 보기', 
    breadcrumb: '결제 리포트 보기',
    category: 'user-guide',
    subcategory: 'payment',
    description: '결제 관련 리포트를 생성하고 분석하는 방법을 안내합니다.'
  },
  
  // 📝 콘텐츠 관리
  'content-overview': { 
    component: ContentOverview, 
    title: '콘텐츠 관리 개요', 
    breadcrumb: '콘텐츠 관리 개요',
    category: 'user-guide',
    subcategory: 'content',
    description: '앱 내 콘텐츠를 관리하는 전반적인 방법을 설명합니다.'
  },
  'board-management': { 
    component: BoardManagement, 
    title: '게시판 만들기', 
    breadcrumb: '게시판 만들기',
    category: 'user-guide',
    subcategory: 'content',
    description: '공지사항, 커뮤니티 등의 게시판을 만들고 관리하는 방법을 안내합니다.'
  },
  'post-management': { 
    component: PostManagement, 
    title: '게시글 관리하기', 
    breadcrumb: '게시글 관리하기',
    category: 'user-guide',
    subcategory: 'content',
    description: '게시글을 작성, 수정, 삭제하고 관리하는 방법을 설명합니다.'
  },
  'comment-moderation': { 
    component: CommentModeration, 
    title: '댓글 관리하기', 
    breadcrumb: '댓글 관리하기',
    category: 'user-guide',
    subcategory: 'content',
    description: '댓글을 모니터링하고 관리하는 방법을 안내합니다.'
  },
  'file-management': { 
    component: FileManagement, 
    title: '파일 업로드 관리', 
    breadcrumb: '파일 업로드 관리',
    category: 'user-guide',
    subcategory: 'content',
    description: '파일 업로드 기능을 설정하고 관리하는 방법을 설명합니다.'
  },
  
  // 📊 통계 및 분석
  'analytics-overview': { 
    component: AnalyticsOverview, 
    title: '통계 대시보드', 
    breadcrumb: '통계 대시보드',
    category: 'user-guide',
    subcategory: 'analytics',
    description: '서비스 이용 현황을 한눈에 볼 수 있는 대시보드 사용법을 안내합니다.'
  },
  'user-analytics': { 
    component: UserAnalytics, 
    title: '사용자 분석', 
    breadcrumb: '사용자 분석',
    category: 'user-guide',
    subcategory: 'analytics',
    description: '사용자 행동과 패턴을 분석하는 방법을 설명합니다.'
  },
  'usage-statistics': { 
    component: UsageStatistics, 
    title: '사용량 통계', 
    breadcrumb: '사용량 통계',
    category: 'user-guide',
    subcategory: 'analytics',
    description: '서비스 사용량 통계를 확인하고 분석하는 방법을 안내합니다.'
  },
  'reports-export': { 
    component: ReportsExport, 
    title: '리포트 내보내기', 
    breadcrumb: '리포트 내보내기',
    category: 'user-guide',
    subcategory: 'analytics',
    description: '분석 결과를 다양한 형태로 내보내는 방법을 설명합니다.'
  },
  
  // ⚙️ 설정
  'general-settings': { 
    component: GeneralSettings, 
    title: '일반 설정', 
    breadcrumb: '일반 설정',
    category: 'user-guide',
    subcategory: 'settings',
    description: '서비스의 기본적인 설정을 변경하고 관리하는 방법을 안내합니다.'
  },
  'security-settings': { 
    component: SecuritySettings, 
    title: '보안 설정', 
    breadcrumb: '보안 설정',
    category: 'user-guide',
    subcategory: 'settings',
    description: '계정 보안과 데이터 보호를 위한 설정 방법을 설명합니다.'
  },
  'notification-settings': { 
    component: NotificationSettings, 
    title: '알림 설정', 
    breadcrumb: '알림 설정',
    category: 'user-guide',
    subcategory: 'settings',
    description: '각종 알림을 설정하고 관리하는 방법을 안내합니다.'
  },
  'billing-settings': { 
    component: BillingSettings, 
    title: '요금 및 결제 설정', 
    breadcrumb: '요금 및 결제 설정',
    category: 'user-guide',
    subcategory: 'settings',
    description: '요금제와 결제 방법을 설정하고 관리하는 방법을 설명합니다.'
  },
  
  // 👨‍💻 개발자 문서
  'api-reference': { 
    component: APIReference, 
    title: 'API 레퍼런스', 
    breadcrumb: 'API 레퍼런스',
    category: 'developer',
    subcategory: 'api',
    description: 'RESTful API 엔드포인트와 상세 사용법을 제공합니다.'
  },
  'authentication': { 
    component: Authentication, 
    title: '인증 가이드', 
    breadcrumb: '인증 가이드',
    category: 'developer',
    subcategory: 'api',
    description: 'API 인증 방법과 보안 토큰 관리에 대해 설명합니다.'
  },
  'sdk-overview': { 
    component: SDKOverview, 
    title: 'SDK 개요', 
    breadcrumb: 'SDK 개요',
    category: 'developer',
    subcategory: 'sdk',
    description: '다양한 언어별 SDK 설치와 기본 사용법을 안내합니다.'
  },
  'webhook-setup': { 
    component: WebhookSetup, 
    title: '웹훅 설정', 
    breadcrumb: '웹훅 설정',
    category: 'developer',
    subcategory: 'integration',
    description: '실시간 이벤트 수신을 위한 웹훅 설정 방법을 설명합니다.'
  }
};

// 카테고리별 섹션 분류 헬퍼 함수
export const getSectionsByCategory = (category) => {
  return Object.entries(pageMapping)
    .filter(([key, value]) => value.category === category)
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
};

// 하위 카테고리별 섹션 분류 헬퍼 함수
export const getSectionsBySubcategory = (category, subcategory) => {
  return Object.entries(pageMapping)
    .filter(([key, value]) => 
      value.category === category && value.subcategory === subcategory
    )
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
};

// 기본 페이지 설정
export const getDefaultPage = (category) => {
  const defaults = {
    'user-guide': 'quick-start',
    'developer': 'api-reference',
    'help': 'faq-common'
  };
  return defaults[category] || 'quick-start';
};