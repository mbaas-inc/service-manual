# 🚀 BaaS 서비스 매뉴얼 페이지

React로 제작된 BaaS(Backend as a Service) 서비스 매뉴얼 웹사이트입니다. 

## 📋 프로젝트 개요

- **기술 스택**: React, CSS3, GitHub Pages
- **주요 기능**: 반응형 레이아웃, 단계별 가이드, 검색 기능, 다크모드
- **배포**: GitHub Pages를 통한 자동 배포

## 🛠️ 설치 및 실행

### 필수 요구사항
- Node.js (v16 이상)
- npm 또는 yarn
- Git

### 로컬 개발 환경 설정

1. **저장소 클론**
```bash
git clone https://github.com/mbaas-inc/service-manual.git
cd service-manual
```

2. **의존성 설치**
```bash
npm install
```

3. **개발 서버 실행**
```bash
npm start
```

4. **브라우저에서 확인**
- http://localhost:3000 자동 열림

## 🚀 배포 방법

### GitHub Pages 자동 배포

1. **gh-pages 라이브러리 설치**
```bash
npm install --save-dev gh-pages
```

2. **package.json 설정 확인**
```json
{
  "homepage": "https://mbaas-inc.github.io/service-manual/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **배포 실행**
```bash
npm run deploy
```

4. **GitHub Pages 설정**
- GitHub 레포지토리 → Settings → Pages
- Source: `Deploy from a branch`
- Branch: `gh-pages` 선택
- Save 클릭

5. **배포 확인**
- 5-10분 후 `https://mbaas-inc.github.io/service-manual/`에서 확인

## 📁 프로젝트 구조

```
service-manual/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/          # React 컴포넌트
│   │   ├── Header.js       # 상단 네비게이션
│   │   ├── Sidebar.js      # 좌측 사이드바
│   │   ├── MainContent.js  # 메인 콘텐츠
│   │   └── TOC.js          # 목차 (Table of Contents)
│   ├── pages/              # 페이지 컴포넌트
│   │   └── QuickStart.js   # 빠른 시작 가이드
│   ├── styles/             # CSS 스타일
│   │   └── common.css      # 공통 스타일
│   ├── App.js              # 메인 앱 컴포넌트
│   └── index.js            # 엔트리 포인트
├── package.json
└── README.md
```

## 🌿 브랜치 관리

### 작업 브랜치 구조
- **`main`** : 소스 코드 관리 (개발 작업용)
- **`gh-pages`** : 배포용 브랜치 (자동 생성, 직접 수정 금지)

### 작업 흐름
```bash
# 1. main 브랜치에서 작업
git checkout main

# 2. 코드 수정 후 커밋
git add .
git commit -m "기능 추가: 검색 기능 구현"
git push origin main

# 3. 로컬에서 테스트
npm start

# 4. 배포 (gh-pages 브랜치 자동 업데이트)
npm run deploy
```

### ⚠️ 주의사항
- **절대 `gh-pages` 브랜치에서 직접 작업하지 마세요!**
- 모든 개발 작업은 `main` 브랜치에서 진행
- `npm run deploy` 명령어가 자동으로 `gh-pages` 브랜치 관리


## 🐛 문제 해결

### 배포 관련 문제

**❌ 404 에러**
```bash
# package.json의 homepage 확인
"homepage": "https://mbaas-inc.github.io/service-manual/"
```

**❌ 빈 페이지 표시**
```bash
# 캐시 삭제 후 재배포
npm run build
npm run deploy
```

**❌ CSS 미적용**
- 상대 경로 문제 가능성
- 브라우저 캐시 삭제 후 재확인

### 개발 환경 문제

**❌ npm start 실행 안됨**
```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install
```

**❌ 포트 충돌**
```bash
# 다른 포트로 실행
npm start -- --port 3001
```

## 📞 지원 및 기여

### 버그 리포트
- GitHub Issues를 통해 버그 신고
- 재현 가능한 단계와 스크린샷 첨부

### 기여 방법
1. Fork 후 feature 브랜치 생성
2. 변경사항 구현 및 테스트
3. Pull Request 생성

### 연락처
- **이메일**: [이메일 주소]
- **GitHub**: [GitHub 프로필]

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 🔄 업데이트 로그

### v1.0.0 (2024-01-XX)
- ✅ 초기 React 프로젝트 설정
- ✅ 반응형 레이아웃 구현
- ✅ 사이드바 네비게이션 구현
- ✅ 단계별 가이드 콘텐츠 추가
- ✅ GitHub Pages 배포 설정

### 향후 계획
- 🔍 검색 기능 추가
- 🌙 다크 모드 구현
- 📄 인쇄 최적화
- 🔗 페이지 라우팅 구현

---

💡 **개발 팁**: 코드 수정 후 `npm start`로 로컬 테스트를 거쳐 `npm run deploy`로 배포하는 것을 권장합니다.