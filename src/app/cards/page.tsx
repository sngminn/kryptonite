"use client";

import CardList from "./components/CardList";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import useCardSearch from "./hooks/useCardSearch";
import Spinner from "@/components/common/Spinner";

export default function Cards() {
  const { triggerRef, cards, setSearch, isLoading, error } = useCardSearch();
  return (
    <main className="space-y-4 p-4">
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 rounded border p-2"
          placeholder="카드 검색..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ErrorBoundary>
        {error && <span>{error}</span>}
        <CardList cards={cards} />
        {isLoading && <Spinner />}
      </ErrorBoundary>

      <div ref={triggerRef} />
    </main>
  );
}
