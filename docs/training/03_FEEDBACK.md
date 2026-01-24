# 🩸 Feedback & Growth Archive

## 🔍 Area of Improvement (Weakness)

- **Shell Syntax**: 변수 참조(`$`)와 할당/입력 시 변수 이름 사용의 차이에 대한 이해 필요.
- **Path Handling**: 상대 경로 사용 시 실행 위치(cwd)에 따른 의존성 문제 인지 필요.

## Code Review Logs

### [Review #01] Shell Script Setup

- **Target**: `scripts/setup.sh`
- **Comments**:
  - `read` 시 `$`를 붙이면 안 됨.
  - 출력 리다이렉션(`>`) 대상이 변수일 때 `$` 누락.
  - `if-else` 블록 내의 `fi` 위치 오류(수정됨).
- **Verdict**: **REJECTED** (Buggy)
