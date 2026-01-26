function createStore<T>(initialState: T) {
  let state = initialState;
  const listeners = new Set<() => void>();
  const getState = () => state;
  function setState(nextState) {
    state = nextState;
  }
}
