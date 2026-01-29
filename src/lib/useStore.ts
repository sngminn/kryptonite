import { useEffect, useState } from "react";

interface Store<T> {
  getState: () => T;
  subscribe: (listener: () => void) => () => void;
}

export function useStore<T>(store: Store<T>) {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const listener = () => setState(store.getState());
    const unsubscribe = store.subscribe(listener);
    return unsubscribe;
  }, [store]);

  return state;
}
