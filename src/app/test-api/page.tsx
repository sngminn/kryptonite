import { fetchClient } from "@/lib/fetchClient";

export default async function TextApi() {
  const data = await fetchClient<any>("/cards?locale=ko_KR&pageSize=30");

  return (
    <main>
      <ul>
        {data.cards.map((card) => (
          <li key={card.id}>
            {card.name} / {card.image}
          </li>
        ))}
      </ul>
    </main>
  );
}
