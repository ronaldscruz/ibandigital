export default function PlaceOrderButton({ className = "" }) {
  return (
    <a
      href="https://wa.me/+5511965270711"
      target="_blank"
      rel="noreferrer"
      className="cursor-pointer "
    >
      <button
        className={`bg-blue-500 h-12 px-6 border-radius text-white font-medium rounded-full ${className}`}
      >
        Solicite um orçamento
      </button>
    </a>
  );
}
