# 📜 Curriculum & Progress Status

## Phase 0: Environment & Infrastructure (기반)

- [x] **Shell Script Setup**: `setup.sh` (환경변수 생성) ✅
- [x] **Dockerization**: `Dockerfile` & `docker-compose.yml` ✅
- [ ] **Git Workflow**: Custom `pre-commit` hook ⬜

## Phase 1: Core Concepts - 성공 (createStore, useStore, fetchClient, OAuth 연동)

- [ ] Phase 2: React Deep Dive - 시작 (UI 아키텍처 및 심화 훅)

## Phase 1: Core Concepts (바닐라 & 기초)

- [x] **State Management from Scratch**: `createStore.ts` (완료), `useStore.ts` (완료) ✅
- [x] **Network Layer**: `fetchClient.ts` (Interceptor, OAuth, Cache 완료) ✅

## Phase 2: React Deep Dive (심화) - 진행 중 🚧

- [x] **Advanced Search**: Debounce (`setTimeout` + Cleanup) ✅
- [x] **Infinite Scroll**: `Intersection Observer` API 직접 구현 ✅
- [x] **Modern Server Tech**: `Server Actions` (Client-side secret leak 방지 및 보안 강화) ✅
- [x] **Architecture**: SRP 기반 컴포넌트 분리 (`CardList`, `CardItem`) ✅
- [/] **Resilience**: `isLoading`, `error` 상태 관리 및 API Error Boundary 🚧
- [ ] **Advanced Hooks**: `useMemo`, `useCallback` (성능 최적화) ⬜
- [ ] **Error Handling**: `ErrorBoundary` Class Component로 구현 ⬜

## Phase 3: Modern Tech Stack (실전)

- ⬜ **Authentication**: Middleware, `Jose` JWT Handling
- ⬜ **Server State**: Tanstack Query (Infinite Scroll, Optimistic Update)
- ⬜ **Forms**: RHF + Zod (Complex Validation)
- ⬜ **Client State**: Zustand (Persist)

## Phase 4: Quality Assurance (품질)

- [/] **Vitest**: Unit Testing (createStore.ts 시작) 🚧
- ⬜ **Storybook**: Component Documentation

## Phase 5: Deployment (DevOps)

- ⬜ **AWS EC2**, **Nginx & Certbot**, **deploy.sh**
