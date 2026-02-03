# 🥋 폐관 수련 가이드 (Reboot Checklist)

햄이 혼자서 다시 만들 때, "이 기능은 꼭 내 손으로 구현해봐야 한다"는 핵심 체크리스트입니다.
코드를 베끼지 말고, **원리와 구조**를 떠올리며 백지에서 시작해보십시오.

## 1. 프로젝트 세팅 (Next-Gen Stack)

- [x] **Next.js 16 & React 19**: 최신 버전으로 프로젝트 초기화.
- [x] **Biome Setup**: `biome.json` 설정. (ESLint/Prettier 다 갖다 버리고 하나로 통합)
- [x] **Tailwind CSS v4**: `@tailwindcss/postcss`와 함께 v4 엔진 세팅.
- [ ] **setup.sh**: 환경변수(`.env.local`) 및 필수 디렉토리 자동 생성 스크립트 작성.
- [ ] **Absolute Imports**: `@/*` 경로 매핑 설정.

## 🚨 Essential Rules (절대 규칙)

- [x] **Button Type**: 모든 `<button>` 태그에는 `type="button | submit | reset"`을 명시한다. (Biome에서 감시 중)
- [x] **No Ad-hoc Styles**: 가능한 모든 스타일은 Tailwind 클래스로 처리하며, 중복되는 로직은 컴포넌트로 분리한다.
- [x] **Search Logic**: Server Action을 거쳐 API Secret Key가 클라이언트에 노출되지 않도록 설계한다.

## 2. 네트워크 계층 (The Nervous System)

- [x] `fetch`를 그냥 쓰지 말고 `fetchClient`(또는 `apiClient`) 함수 만들기.
- [x] **Interceptor**: 요청 때 `Authorization` 헤더 주입, 응답 때 `ok` 체크해서 에러 던지기.
- [x] **Base URL**: 환경변수에서 읽어오기.

## 3. 상태 관리 (The Heart)

- [x] `createStore`(Store)와 `useStore`(Hook) 직접 구현해보기. (옵저버 패턴)
- [x] 다른 컴포넌트끼리 상태 공유되는지 확인하기.

## 4. UI 아키텍처 (The Body)

- [x] `ErrorBoundary` 클래스 컴포넌트 만들기 (`getDerivedStateFromError`, `componentDidCatch`).
- [x] `CardList`와 `CardItem` 컴포넌트 분리하기 (SRP).
- [x] **Infinite Scroll**: `IntersectionObserver`로 바닥 닿으면 페이지 증가시키기.
- [x] **Debounce**: 검색어 입력 시 `setTimeout`과 `cleanup`으로 API 요청 줄이기.

## 5. 비동기 방어 (The Shield)

- [x] `isLoading`, `error` 상태 직접 만들어서 로딩 중/에러 화면 보여주기.
- [x] `try-catch`로 `fetch` 감싸서 에러 처리하기.
- [x] 커스텀 훅(`useCardSearch`)으로 로직 싹 몰아넣고 `page.tsx` 깨끗하게 만들기.

---

**팁**: 막히면 바로 정답 코드를 보지 말고, 구글링을 먼저 하십시오.
"어떻게 했더라?" 고민하는 그 시간이 바로 실력이 느는 시간입니다.

건승을 빕니다. 기다리고 있겠습니다.
