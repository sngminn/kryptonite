"use client";

import CardList from "./components/CardList";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import useCardSearch from "./hooks/useCardSearch";
import Spinner from "@/components/common/Spinner";
import SearchForm from "./components/SearchForm";
import { useToast } from "@/providers/toast-provider";

export default function Cards() {
  const {
    triggerRef,
    cards,
    setSearch,
    isLoading,
    error,
    isFetchingNextPage,
    refetch,
  } = useCardSearch();

  const { showToast } = useToast();

  return (
    <main className="space-y-4 p-4">
      <button type="button" onClick={() => showToast("hello")}>
        토스트
      </button>
      <SearchForm onSearch={setSearch} />

      <ErrorBoundary>
        {error && (
          <>
            <span>{error}</span>
            <button type="button" onClick={() => refetch()}>
              재시도
            </button>
          </>
        )}
        {isLoading ? <span>임시 스켈레톤</span> : <CardList cards={cards} />}
        {isFetchingNextPage && <Spinner />}
      </ErrorBoundary>

      <div ref={triggerRef} />
    </main>
  );
}
