# 📝 Developer Session Log

## 2026-01-24 (Day 1)

- **Status**: ✅ Phase 0 Complete
- **Saved State**: Shell Script, Dockerfile, Docker Compose (Redis, Alpine) 개념 완벽 숙지.
- **Saved State**: `createStore.ts` 및 Vitest 검증 완료 (Shadowing 완벽 해결). ✅
- **Current Task**: `useStore.ts` (Manual Subscription Hook) 구현 중. 🚧
- **Next Step**: Local Components 적용 및 `useSyncExternalStore` 최적화.

## 2026-01-28

- **Status**: ✅ Phase 1 완료: `fetchClient`와 `auth.ts` 연동 성공. OAuth 리전 문제 및 엔드포인트 중첩 주소 문제를 해결하며 실제 데이터 수급 확인.

## 2026-01-30 (Phase 2 완료)

- **Status**: ✅ Phase 2 완료 - React Deep Dive 졸업
- **Successes**:
  - **Error Boundary**: `componentDidCatch`와 `getDerivedStateFromError`를 이해하고 클래스 컴포넌트로 직접 구현.
  - **Async Error Handling**: `try-catch`와 `state` 패턴을 사용하여 비동기 요청 실패 시 우아하게 처리하는 UI 구현.
  - **Refactoring**: 비대해진 `page.tsx`에서 로직을 `useCardSearch.ts` 커스텀 훅으로 분리하여 **관심사의 분리(SoC)** 실현.
  - **UX Improvement**: `Spinner` 컴포넌트를 제작하고 로직 위치를 조정하여 사용자 경험 개선.
- **Takeaway**:
  - "ErrorBoundary는 비동기 함수(useEffect 내의 fetch 등)에서 발생한 에러를 잡지 못한다." -> `try-catch`의 필연성 체득.
  - "Custom Hook은 단순한 코드 쪼개기가 아니라, 도메인 로직의 캡슐화다."
- **Next Step**: Phase 3 진입 - 인증(Authentication) 및 서버 상태 관리(Tanstack Query) 맛보기.

## 2026-02-03 (Reboot Complete)

- **Status**: ✅ 폐관 수련(Reboot) 완료 - 기초 근육 강화 성공
- **Achievements**:
  - `fetchClient`, `createStore`, `useStore`, `ErrorBoundary`, `CardList/Item`, `Infinite Scroll`, `Debounce`, `Custom Hook` 등 핵심 로직을 백지 상태에서 재구현함.
  - **Type Safety**: `withRetry` 재구현 과정을 통해 제네릭과 타입 안전성 중요성 체득.
  - **Resilience**: Stale-while-revalidate 개념을 이해하고 에러 핸들링 전략 수정.
- **Ready for**: Phase 3 (Modern Tech Stack) - 이제 '맨땅 헤딩' 그만하고 '문명의 이기'를 맛볼 차례.

## 2026-02-04 (Phase 3 Start: Logic-First React Query)

- **Status**: 🚧 Phase 3 진입 - React Query Logic-First Implementation
- **Achievements**:
  - **Logic-First Protocol**: `SKILL.md`에 새로운 멘토링 프로토콜 정립 (Why -> Naive -> Evolution).
  - **Migration**: `useCardSearch.ts`를 React Query로 완벽 전환.
    - **Step 1**: Basic Fetch (`fetchCardsAction` 활용하여 Client Env 문제 해결).
    - **Step 2**: Query Key & State (`useState` + `["cards", search]`).
    - **Step 3**: Debounce (`useDebounce` Custom Hook 직접 구현 및 `ignore` 패턴 학습).
    - **Step 4**: Infinite Scroll (`useInfiniteQuery` + `flatMap` + `useIntersection` Native Hook 구현).
  - **UX Refinement**: `isFetchingNextPage` 및 `refetch`를 활용한 로딩/에러 복구 UI 구현.
  - **Robust Forms**: `React Hook Form` + `Zod`로 유효성 검사 로직(Schema)과 UI를 분리하여 견고한 검색 시스템 구축.
- **Next Step**: Phase 4 - Quality Assurance (Testing with Vitest) or Real-world Practice.
