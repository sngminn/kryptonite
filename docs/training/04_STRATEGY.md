# 🚀 Project Kryptonite: Strategic Growth Report

> **작성일**: 2026-01-30
> **수신자**: 햄 (예비 구글 엔지니어)
> **작성자**: 번7H-봇 (Senior Staff Engineer)

---

## 1. 🏛 The Architecture: 우리가 쌓아올린 것

햄이 지금까지 맨땅에 헤딩하며 만든 코드들은 단순한 '기능 구현'이 아닙니다. 모던 프론트엔드의 핵심 **멘탈 모델**을 밑바닥부터 구현한 것입니다.

### ① The Network Layer (`fetchClient.ts`)

- **What**: 단순한 `fetch` 래퍼가 아닙니다. **Interceptor Pattern**의 원형입니다.
- **Why**: 요청을 가로채서 `Base URL`, `Headers(Auth)`를 주입하고, 응답을 가로채서 `Error Parsing`을 수행합니다.
- **Insight**: Axios나 Tanstack Query 같은 라이브러리도 결국 이 원리입니다. 우리는 "라이브러리 없이" 통신의 제어권을 쥐는 법을 배웠습니다.

### ② State Management (`createStore.ts`)

- **What**: **Observer Pattern** (발행/구독 모델)의 구현체입니다.
- **Why**: 리액트의 상태가 변하면 -> 구독자(컴포넌트)에게 알리고 -> 리렌더링을 유발한다. 이 메커니즘을 `useExternalStoreSync` 없이 직접 구현했습니다.
- **Insight**: Redux, Zustand의 코어가 바로 이것입니다. "상태는 컴포넌트 밖에(Closure), UI 업데이트는 리액트 안에"라는 원칙을 이해했습니다.

### ③ Resilience UI (`ErrorBoundary`, `Async Try-Catch`)

- **What**: **Fail-Safe System** (실패해도 안전한 시스템).
- **Why**:
  - **동기 에러**: `ErrorBoundary`가 UI 폭발을 막고 대체 화면 제공.
  - **비동기 에러**: `try-catch` State 패턴으로 UX 방어.
- **Insight**: 프론트엔드 엔지니어의 실력은 "Happy Path"가 아니라 "Error Path"를 얼마나 우아하게 처리하느냐에서 갈립니다.

---

## 2. 📊 The Analyst: 햄의 전투력 측정

지금까지 지켜본 햄의 개발 스타일 분석입니다. (팩트 폭격 주의)

### 💪 Super Powers (강점)

1.  **Monster Execution (괴물 같은 실행력)**: "이거 필요해요" 하면 1초 만에 코드가 나옵니다. `Spinner` 컴포넌트 SVG 긁어와서 바로 적용하는 거 보고 솔직히 좀 놀랐습니다.
2.  **Structural Thinking (구조적 사고)**: `useCardSearch` 훅 분리 제안을 바로 이해하고 실행했습니다. 코드를 "어디에 둬야 예쁜지" 본능적으로 압니다.
3.  **Resilience (회복탄력성)**: 린터 에러나 버그가 터져도 당황하지 않고 바로 잡으려 듭니다 (비록 가끔 엉뚱한 걸 잡지만).

### 💀 Kryptonite (치명적 약점)

1.  **Type Safety Ignorance (타입 무시)**: `catch(err)`에서 `err`는 `unknown`입니다. 근데 그냥 막 씁니다. "에러 안 나면 그만"이라는 마인드는 대규모 앱에서 재앙을 부릅니다.
2.  **Async Edge Cases (비동기 허점)**: `isLoading` 위치 선정 실수 같은 **경계 조건(Boundary Condition)** 처리가 미흡합니다. "데이터가 0개일 때", "엄청 빨리 입력할 때", "네트워크가 끊겼을 때" 시나리오를 머릿속으로 시뮬레이션하는 훈련이 필요합니다.
3.  **Primitive Obsession**: `setError`에 객체를 넣으려 하는 등, 자바스크립트 기본 타입(Primitive vs Object)에 대한 감각이 가끔 무뎌집니다.

---

## 3. 🗺 Phase 3 & 4: 폭발적 성장을 위한 로드맵

이제 "돌아가는 코드"는 짤 줄 압니다. 이제는 **"대체 불가능한 코드"**를 짤 차례입니다.

### ⚔️ Phase 3: The Weaponry (무기 장착) - "왜 편한지 알아야 한다"

- **Tanstack Query (React Query)**:
  - **목표**: 우리가 짠 `useEffect` + `fetch` + `loading` + `error` + `try-catch` + `state`... 이 50줄짜리 코드를 **단 3줄**로 줄여버리는 마법을 경험합니다.
  - **핵심**: "Server State"와 "Client State"의 분리. (우리가 왜 그 고생을 했는지 깨닫게 될 겁니다.)

- **Zod + React Hook Form**:
  - **목표**: `unknown` 타입 지옥 탈출.
  - **핵심**: 런타임 데이터 검증(Schema Validation). 백엔드가 이상한 데이터 줘도 프론트가 안 죽게 만드는 **방탄조끼**입니다.

### ⚔️ Phase 4: Quality & DevOps - "프로는 증명한다"

- **Test-Driven Development (TDD)**:
  - **목표**: "버튼 눌러서 확인" 그만. 코드로 코드를 검증합니다.
  - **핵심**: `Vitest`로 `fetchClient`부터 비즈니스 로직까지 자동화 테스트 구축.

- **CI/CD**:
  - **목표**: 햄이 자고 있어도 코드가 자동으로 배포되는 시스템.

---

## 4. 🏁 Final Message

햄은 이미 **Junior 레벨**은 넘었습니다. 시중의 코딩 학원 수료생들보다는 훨씬 깊이 있는 코드를 짭니다.
하지만 **Senior**로 가려면 **"Detail"**과 **"Why"**에 집착해야 합니다.

- "이거 왜 여기서 호출하죠?"
- "이 타입은 확실한가요?"
- "사용자가 0.1초 만에 뒤로 가기를 누르면 어쩌죠?"

이 질문들을 스스로에게 던지는 순간, 햄은 구글이 아니라 어디든 골라서 갈 수 있습니다.
Phase 3, 준비되셨습니까?

**"Don't just write code. Architect it."**
