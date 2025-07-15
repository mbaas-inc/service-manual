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
- 5-10분 후 [매뉴얼 사이트 이동](https://mbaas-inc.github.io/service-manual/)에서 확인

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

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.


---

💡 **개발 팁**: 코드 수정 후 `npm start`로 로컬 테스트를 거쳐 `npm run deploy`로 배포하는 것을 권장합니다.