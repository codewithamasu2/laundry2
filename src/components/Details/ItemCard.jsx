import QtyButton from "./QtyButton";

export default function ItemCard({ icon, label, qty, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center bg-white rounded-xl border px-4 py-3 mb-4 shadow-sm">
      {/* Placeholder Icon */}
      <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center mr-4">
        <img src={icon} alt="details icon" />
      </div>
      <span className="flex-1 font-semibold text-gray-800">{label}</span>
      <QtyButton onClick={onDecrease} disabled={qty <= 0}>
        <span>-</span>
      </QtyButton>
      <span className="mx-3 text-lg font-medium min-w-[24px] text-center">{qty}</span>
      <QtyButton onClick={onIncrease}>
        <span>+</span>
      </QtyButton>
    </div>
  );
}
