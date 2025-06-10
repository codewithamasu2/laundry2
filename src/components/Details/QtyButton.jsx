export default function QtyButton({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-8 h-8 rounded-full flex items-center justify-center text-2xl text-gray-500 border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-30"
      type="button"
    >
      {children}
    </button>
  );
}
