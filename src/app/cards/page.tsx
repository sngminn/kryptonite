"use client";

import { useEffect, useRef, useState } from "react";
import { fetchCardsAction } from "./actions";
import type { Card } from "@/types/card.type";
import CardList from "./components/CardList";

export default function Cards() {
  const [cards, setCards] = useState<Card[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const triggerRef = useRef(null);

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
        const data = await fetchCardsAction(page, search);

        if (isCurrent) {
          if (page === 1) {
            setCards(data.cards);
          } else {
            setCards((prev) => [...prev, ...(data.cards || [])]);
          }
        }
      },
      page === 1 ? 500 : 0,
    );

    return () => {
      isCurrent = false;
      clearTimeout(timer);
    };
  }, [search, page]);

  return (
    <main>
      <input
        type="text"
        placeholder="카드 검색..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <CardList cards={cards} />
      <div ref={triggerRef} />
    </main>
  );
}
