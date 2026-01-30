import Image from 'next/image';
import type { Card } from '@/types/card.type';

export function CardItem({ card }: { card: Card }) {
  return (
    <li key={card.id} className="flex flex-col items-center justify-center">
      <div className="relative aspect-2/3 w-32">
        <Image alt={`${card.name} 이미지`} src={card.image} fill className="object-contain" />
      </div>
      <span>{card.name}</span>
    </li>
  );
}

export default function CardList({ cards }: { cards: Card[] }) {
  return (
    <ul className="grid grid-cols-4">
      {cards.length ? (
        cards.map((card) => <CardItem key={card.id} card={card} />)
      ) : (
        <span>카드가 없습니다</span>
      )}
    </ul>
  );
}
