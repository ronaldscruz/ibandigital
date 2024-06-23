import "./PlaceOrderButton.styles.css";

export default function PlaceOrderButton({ className = "", reversed = false }) {
  return (
    <a
      href="#contact-form"
      className="cursor-pointer"
      aria-label="Solicite um orçamento"
    >
      <div className={className}>
        <button
          className={`${
            reversed ? "place-order-button-reversed" : "place-order-button"
          } ${className} sm:w-[290px] w-[270px] h-[56px] flex items-center justify-center rounded-full ease-in-out transition-all duration-300`}
        >
          <span className="place-order-button-text sm:text-lg text-[17px] transition-all ease-in-out duration-100">
            Fale com um especialista
          </span>
        </button>
      </div>
    </a>
  );
}
