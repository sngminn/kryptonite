export function createStore<T>(initialState: T) {
  let state = initialState;
  const listeners = new Set<() => void>();
  const getState = () => state;

  function setState(nextState: T) {
    state = nextState;
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  return { getState, setState, subscribe };
}
