import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

// URL에서 lang 파라미터 추출
const getLanguageFromURL = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang');
  return lang === 'en' ? 'en' : 'ko'; // ko가 기본값
};

i18n
  .use(HttpBackend) // 번역 파일 로드
  .use(initReactI18next) // react-i18next 연결
  .init({
    lng: getLanguageFromURL(), // URL 파라미터에서 언어 설정
    fallbackLng: 'ko', // 기본 언어는 한국어
    supportedLngs: ['ko', 'en'], // 지원 언어 목록

    backend: {
      // public/locales 폴더에서 번역 파일 로드
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/translation.json`,
    },

    interpolation: {
      escapeValue: false, // React는 XSS 방지가 내장되어 있음
    },

    react: {
      useSuspense: true, // Suspense 사용
    },
  });

// 언어 변경 함수 (URL 파라미터도 업데이트)
export const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);

  // URL 파라미터 업데이트
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url.toString());
};

// URL 파라미터 변경 감지하여 언어 변경
export const syncLanguageWithURL = () => {
  const lang = getLanguageFromURL();
  if (i18n.language !== lang) {
    i18n.changeLanguage(lang);
  }
};

export default i18n;
