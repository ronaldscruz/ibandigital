import "./PlaceOrderButton.styles.css";

export default function PlaceOrderButton({ className = "" }) {
  return (
    <a
      href="#contact-form"
      className="cursor-pointer"
      aria-label="Solicite um orçamento"
    >
      <div className={className}>
        <button className={`place-order-button ${className}`}>
          <span className="place-order-button-text">
            Quero transformar meu negócio
          </span>
        </button>
      </div>
    </a>
  );
}
