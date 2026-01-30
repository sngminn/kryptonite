import { useEffect, useRef, useState } from "react";
import { fetchCardsAction } from "../actions";
import type { Card } from "@/types/card.type";

export default function useCardSearch() {
  const [cards, setCards] = useState<Card[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const triggerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setPage(1);
    setCards([]);
  }, [search]);

  useEffect(() => {
    let isCurrent = true;

    const timer = setTimeout(
      async () => {
        try {
          setIsLoading(true);
          const data = await fetchCardsAction(page, search);

          if (isCurrent) {
            if (page === 1) {
              setCards(data.cards);
            } else {
              setCards((prev) => [...prev, ...(data.cards || [])]);
            }
          }
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("알 수 없는 오류 발생");
          }
        } finally {
          setIsLoading(false);
        }
      },
      page === 1 ? 500 : 0,
    );

    return () => {
      isCurrent = false;
      clearTimeout(timer);
    };
  }, [search, page]);

  return {
    cards,
    triggerRef,
    setSearch,
    isLoading,
    error,
  };
}
