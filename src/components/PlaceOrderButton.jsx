export default function PlaceOrderButton({ className = "" }) {
  return (
    <a
      href="https://wa.me/+5511965270711"
      target="_blank"
      rel="noreferrer"
      className="cursor-pointer "
    >
      <button
        className={`bg-blue-600 h-12 px-6 border-radius text-white font-medium rounded-full hover:bg-blue-700 ease-in-out duration-200 ${className}`}
      >
        Solicite um orçamento
      </button>
    </a>
  );
}
