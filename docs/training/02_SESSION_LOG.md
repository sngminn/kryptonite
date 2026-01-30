# 📝 Developer Session Log

## 2026-01-24 (Day 1)

- **Status**: ✅ Phase 0 Complete
- **Saved State**: Shell Script, Dockerfile, Docker Compose (Redis, Alpine) 개념 완벽 숙지.
- **Saved State**: `createStore.ts` 및 Vitest 검증 완료 (Shadowing 완벽 해결). ✅
- **Current Task**: `useStore.ts` (Manual Subscription Hook) 구현 중. 🚧
- **Next Step**: Local Components 적용 및 `useSyncExternalStore` 최적화.

## 2026-01-28

- **Status**: ✅ Phase 1 완료: `fetchClient`와 `auth.ts` 연동 성공. OAuth 리전 문제 및 엔드포인트 중첩 주소 문제를 해결하며 실제 데이터 수급 확인.

## 2026-01-29

- **Status**: 🚧 Phase 2 진행 중 - 리액트 심화 및 실전 아키텍처
- **Successes**:
  - **Server Actions**: `"use client"` 컴포넌트에서 API Secret Key를 직접 읽을 수 없는 문제를 Server Action(`actions.ts`) 도입으로 해결. 보안과 편리함을 동시에 잡는 법 습득.
  - **Advanced Search**: `useEffect` Cleanup과 `setTimeout`을 활용한 Debounce 로직 구현. Race Condition 방지를 위한 `isCurrent` 플래그 활용 숙지.
  - **Infinite Scroll**: `Intersection Observer` API를 활용하여 하단 스캔 시 자동으로 다음 페이지 데이터를 Append하는 로직 완성.
  - **Refactoring**: 거대한 `page.tsx`를 `CardList`, `CardItem`으로 분리하여 관심사 분리(SRP) 달성.
- **Failures**:
  - 초기 로딩 시 검색 Debounce가 겹쳐서 발생하는 중복 요청 문제와 레이스 컨디션을 경험했으나 `isCurrent`와 조건부 딜레이 로직으로 해결.
- **Takeaway**: "Client Component에서는 절대 Secret을 다룰 수 없다"는 Next.js의 보안 모델을 몸소 체험함.
- **Next Step**: Error Boundary 구현을 통한 회복탄력성 강화 및 등급별 UI 스타일링.
