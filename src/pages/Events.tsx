import { Card } from "../components/Card";
import { cardInfo } from "../constants/cardInfo";

export function Events() {
  return (
    <div className="p-10 grid grid-cols-1 max-md:place-items-center md:grid-cols-3 gap-4">
      {cardInfo.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          link={"/events/" + index}
        />
      ))}
    </div>
  );
}
