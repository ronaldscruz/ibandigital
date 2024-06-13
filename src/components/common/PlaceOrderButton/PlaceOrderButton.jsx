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
      <div className={className}>
        <button className={`place-order-button ${className}`}>
          <span className="place-order-button-text">Solicite um orçamento</span>
        </button>
      </div>
    </a>
  );
}
