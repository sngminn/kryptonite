'use server';

import { fetchClient } from '@/lib/fetchClient';

export async function fetchCardsAction(page: number, textFilter: string) {
  return await fetchClient<any>(
    `/cards?locale=ko_KR&page=${page}&pageSize=30&textFilter=${textFilter}`,
  );
}
