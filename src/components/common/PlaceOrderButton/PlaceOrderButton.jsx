import "./PlaceOrderButton.styles.css";

export default function PlaceOrderButton({ className = "" }) {
  return (
    <a
      href="https://wa.me/+5511965270711"
      target="_blank"
      rel="noreferrer"
      className="cursor-pointer"
      aria-label="Solicite um orçamento"
    >
      <button className="place-order-button">
        <span className="place-order-button-text">Solicite um orçamento</span>
      </button>
    </a>
  );
}
