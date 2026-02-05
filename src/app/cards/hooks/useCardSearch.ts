import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCardsAction } from "../actions";
import { useIntersection } from "./useIntersection";

export default function useCardSearch() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["cards", debouncedSearch],
    queryFn: ({ pageParam }) => fetchCardsAction(pageParam, debouncedSearch),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.pageCount) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  const { ref, isIntersecting } = useIntersection();

  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return {
    cards: data?.pages.flatMap((page) => page.cards) || [],
    isLoading,
    error: error?.message,
    setSearch,
    triggerRef: ref,
    isFetchingNextPage,
    refetch,
  };
}
