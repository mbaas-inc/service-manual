// 사용자 가이드 페이지 import
import QuickStart from '../pages/user-guide/getting-started/QuickStartPage';
import AccountSetup from '../pages/user-guide/getting-started/AccountSetup';
import DashboardOverview from '../pages/user-guide/getting-started/DashboardOverview';

// 인증 관리
import AuthLogin from '../pages/user-guide/authentication/AuthLogin';
import AuthJoin from '../pages/user-guide/authentication/AuthJoin';
import AuthLog from '../pages/user-guide/authentication/AuthLog';

// 고객 관리
import MemberRegistration from '../pages/user-guide/member-management/MemberRegistration';
import MemberList from '../pages/user-guide/member-management/MemberList';
import MemberProfile from '../pages/user-guide/member-management/MemberProfile';
import MemberPermissions from '../pages/user-guide/member-management/MemberPermissions';
import MemberExport from '../pages/user-guide/member-management/MemberExport';

// 메시지 발송
import SendEmail from '../pages/user-guide/messaging/SendEmail';
import SendSMS from '../pages/user-guide/messaging/SendSMS';
import MessageTemplates from '../pages/user-guide/messaging/MessageTemplates';
import BulkMessaging from '../pages/user-guide/messaging/BulkMessaging';
import MessageHistory from '../pages/user-guide/messaging/MessageHistory';

// 결제 관리
import PaymentSetup from '../pages/user-guide/payment/PaymentSetup';
import PaymentMethods from '../pages/user-guide/payment/PaymentMethods';
import PaymentHistory from '../pages/user-guide/payment/PaymentHistory';
import RefundManagement from '../pages/user-guide/payment/RefundManagement';
import PaymentReports from '../pages/user-guide/payment/PaymentReports';

// 게시판 관리
import BoardManagement from '../pages/user-guide/board/BoardManagement';
import PostManagement from '../pages/user-guide/board/PostManagement';
import CommentModeration from '../pages/user-guide/board/CommentModeration';

// 푸시
import PushKey from '../pages/user-guide/push/PushKey';
import PushDevice from '../pages/user-guide/push/PushDevice';
import PushTopic from '../pages/user-guide/push/PushTopic';

// 설정
import GeneralSettings from '../pages/user-guide/settings/GeneralSettings';
import SecuritySettings from '../pages/user-guide/settings/SecuritySettings';
import NotificationSettings from '../pages/user-guide/settings/NotificationSettings';

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

  // 인증 관리 
  'auth-login': { 
    component: AuthLogin, 
    title: '로그인 설정', 
    breadcrumb: '로그인 설정',
    category: 'user-guide',
    subcategory: 'authentication',
    description: '소셜 로그인 설정을 할 수 있습니다.'
  },
  'auth-join': { 
    component: AuthJoin, 
    title: '회원가입 설정', 
    breadcrumb: '회원가입 설정',
    category: 'user-guide',
    subcategory: 'authentication',
    description: '회원가입 시 수집할 항목과 필수 입력 여부, 추가 설정을 관리할 수 있습니다.'
  },
  'auth-log': { 
    component: AuthLog, 
    title: '접속 로그', 
    breadcrumb: '접속 로그',
    category: 'user-guide',
    subcategory: 'authentication',
    description: '사용자의 로그인 기록과 접속 정보를 확인할 수 있습니다.'
  },
  
  // 👥 고객 관리
  'member-list': { 
    component: MemberList, 
    title: '고객 목록 보기', 
    breadcrumb: '고객 목록 보기',
    category: 'user-guide',
    subcategory: 'member-management',
    description: '가입한 회원들의 목록을 확인하고 관리하는 방법을 설명합니다.'
  },
  'member-profile': { 
    component: MemberProfile, 
    title: '고객 정보 관리', 
    breadcrumb: '고객 정보 관리',
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
    title: '고객 데이터 내보내기', 
    breadcrumb: '고객 데이터 내보내기',
    category: 'user-guide',
    subcategory: 'member-management',
    description: '고객 정보를 CSV나 Excel 파일로 내보내는 방법을 안내합니다.'
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
    
  // 📧 메시지 발송
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

  // 📝 게시판 관리
  'board-management': { 
    component: BoardManagement, 
    title: '게시판 만들기', 
    breadcrumb: '게시판 만들기',
    category: 'user-guide',
    subcategory: 'board',
    description: '공지사항, 커뮤니티 등의 게시판을 만들고 관리하는 방법을 안내합니다.'
  },
  'post-management': { 
    component: PostManagement, 
    title: '게시글 관리하기', 
    breadcrumb: '게시글 관리하기',
    category: 'user-guide',
    subcategory: 'board',
    description: '게시글을 작성, 수정, 삭제하고 관리하는 방법을 설명합니다.'
  },
  'comment-moderation': { 
    component: CommentModeration, 
    title: '댓글 관리하기', 
    breadcrumb: '댓글 관리하기',
    category: 'user-guide',
    subcategory: 'board',
    description: '댓글을 모니터링하고 관리하는 방법을 안내합니다.'
  },
  
  // 푸시 관리
  'push-key': { 
    component: PushKey, 
    title: 'Firebase key 업로드', 
    breadcrumb: 'Firebase key 업로드',
    category: 'user-guide',
    subcategory: 'push',
    description: 'Firebase 서비스 계정 키를 업로드하여 푸시 알림 서비스를 설정하세요. JSON 형식의 키 파일만 업로드 가능합니다.'
  },
  'push-device': { 
    component: PushDevice, 
    title: '디바이스 목록', 
    breadcrumb: '디바이스 목록',
    category: 'user-guide',
    subcategory: 'push',
    description: '등록된 디바이스 목록을 확인하고 푸시 알림 권한 상태를 관리할 수 있습니다. 디바이스별 푸시 동의 및 OS 권한을 한눈에 파악하세요.'
  },
  'push-topic': { 
    component: PushTopic, 
    title: '토픽 관리', 
    breadcrumb: '토픽 관리',
    category: 'user-guide',
    subcategory: 'push',
    description: '푸시 알림 토픽을 생성하고 관리할 수 있습니다. 토픽별로 구독자를 관리하고 맞춤형 푸시 알림을 발송하세요.'
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