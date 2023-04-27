import "./card.css";

interface CardProps {
  price: number;
  title: string;
  image: string;
}

export function card({ price, title, image }: CardProps) {
  return (
    <div className="card">
      <img src={image} />
      <h2>{title}</h2>
      <p>
        <b>Preço: R${price}</b>
      </p>
    </div>
  );
}

export default card;
