import { describe, expect, it, vi } from 'vitest';
import { createStore } from './createStore';

describe('createStore', () => {
  it('초기 상태 반환해야 함', () => {
    const store = createStore(0);
    const result = store.getState();
    const expected = 0;
    expect(result).toBe(expected);
  });

  it('상태 업데이트 후 리스너 호출 필요', () => {
    const store = createStore(0);
    const listener = vi.fn();
    store.subscribe(listener);
    store.setState(1);
    expect(listener).toHaveBeenCalled();
    const result = store.getState();
    const expected = 1;
    expect(result).toBe(expected);
  });

  it('구독 해제 후에는 리스너 호출 금지', () => {
    const store = createStore(0);
    const listener = vi.fn();
    const unsubscribe = store.subscribe(listener);
    unsubscribe();
    store.setState(2);
    expect(listener).not.toHaveBeenCalled();
  });
});
