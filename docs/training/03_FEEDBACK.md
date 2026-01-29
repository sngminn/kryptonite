# 🩸 Feedback & Growth Archive

## 🔍 Area of Improvement (Weakness)

- **Shell Syntax**: 변수 참조(`$`)와 할당/입력 시 변수 이름 사용의 차이에 대한 이해 필요.
- **Path Handling**: 상대 경로 사용 시 실행 위치(cwd)에 따른 의존성 문제 인지 필요.
- **TypeScript Generics**: 제네릭 쉐도잉(Shadowing)에 대한 주의 필요.

## Code Review Logs

### [Review #01] Shell Script Setup

- **Target**: `scripts/setup.sh`
- **Date**: 2026-01-24
- **Comments**:
  - `read` 시 `$`를 붙이면 안 됨.
  - 출력 리다이렉션(`>`) 대상이 변수일 때 `$` 누락.
  - `if-else` 블록 내의 `fi` 위치 오류(수정됨).
- **Verdict**: **REJECTED** (Buggy)

### [Review #02] Vanilla Store (`createStore.ts`)

- **Target**: `src/lib/createStore.ts`
- **Date**: 2026-01-27
- **Comments**:
  - **Type Shadowing**: `setState<T>`로 타입을 중복 정의하여 외부의 `T`와 충돌 가능성 발생. 유연한 타입 처리를 위해 외부 제네릭을 재사용해야 함.
  - **Closure Architecture**: `state`를 클로저 내부에 숨긴 점은 매우 훌륭함.
  - **Return Value**: 함수형 프로그래밍의 기본인 '결과물 반환'이 누락됨. 팩토리 함수는 반드시 생성된 객체를 반환해야 함.

### [Review #03] Custom Hook Connectivity (`useStore.ts`)

- **Target**: `src/lib/useStore.ts`
- **Date**: 2026-01-28
- **Comments**:
  - **Execution vs Definition**: `setState`를 즉시 실행하여 리스너에 `undefined`가 담기는 치명적 오류 발생. 콜백 함수(`() => void`)의 개념 정립 필요.
  - **Dependency Management**: `useEffect` 의존성 배열에 `store` 객체 자체를 넣어 객체 참조 변경에 대응해야 함.
- **Verdict**: **REJECTED** (Logic Error)

### [Review #04] Network Layer (`fetchClient.ts`)

- **Target**: `src/lib/fetchClient.ts`
- **Date**: 2026-01-28
- **Comments**:
  - **Stream Handling Error**: `response.body`를 직접 문자열에 포함하는 실수를 저지름. `ReadableStream`은 별도의 파싱(`json()`, `text()`)이 필요함.
  - **Error Architecture**: 단순 `Error` 객체 사용으로 인해 에러의 의미(상태 코드 등)를 유실함. 확장된 `ApiError` 클래스 도입이 시급함.
- **Verdict**: **REJECTED** (Buggy)
