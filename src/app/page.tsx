"use client";

import { useStore } from "@/lib/useStore";
import { counterStore } from "@/store/counterStore";

function CounterDisplay() {
  const count = useStore(counterStore);
  return (
    <div>
      <h2>Display</h2>
      <span>{count}</span>
    </div>
  );
}

function CounterController() {
  const count = useStore(counterStore);

  const increment = () => counterStore.setState(count + 1);

  return (
    <div>
      <h2>Control</h2>
      <button type="button" onClick={increment}>
        숫자 올리기
      </button>
      <span>{count}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <CounterDisplay />
      <CounterController />
    </main>
  );
}
