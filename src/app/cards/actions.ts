"use server";

import { fetchClient } from "@/lib/fetchClient";
import type { Card } from "@/types/card.type";

export interface CardsResponse {
  cards: Card[];
  cardCount: number;
  pageCount: number;
  page: number;
}

export async function fetchCardsAction(page: number, textFilter: string) {
  return await fetchClient<CardsResponse>(
    `/cards?locale=ko_KR&page=${page}&pageSize=30&textFilter=${textFilter}`,
  );
}
