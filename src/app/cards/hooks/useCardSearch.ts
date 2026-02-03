"use client";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { type CardsResponse, fetchCardsAction } from "../actions";

function useDebounce<T>(value: T, delay: 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export default function useCardSearch() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const triggerRef = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery<CardsResponse>({
    queryKey: ["cards", debouncedSearch],
    queryFn: ({ pageParam }) =>
      fetchCardsAction((pageParam as number) || 1, debouncedSearch),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.cards.length > 0 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 60 * 24,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );
    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const cards = data?.pages.flatMap((page) => page.cards) || [];

  return {
    cards,
    triggerRef,
    setSearch,
    isLoading: status === "pending",
    isFetchingNext: isFetchingNextPage,
    error: error?.message,
  };
}
