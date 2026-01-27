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
- **Verdict**: **REJECTED** (Logic Incomplete)
