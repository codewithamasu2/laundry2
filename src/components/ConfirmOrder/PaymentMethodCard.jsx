import CashIcon from "../../assets/icons/payment-cash.svg";
import TransferIcon from "../../assets/icons/payment-transfer.svg";
import EdcIcon from "../../assets/icons/payment-edc.svg";

const ICONS = {
  cash: { src: CashIcon, label: "Cash" },
  transfer: { src: TransferIcon, label: "Transfer" },
  edc: { src: EdcIcon, label: "EDC" },
};

export default function PaymentMethodCard({ type, selected, onClick }) {
  const { src, label } = ICONS[type];

  return (
    <button
      type="button"
      className={`flex items-center justify-between w-full px-4 py-3 bg-white rounded-xl shadow-md border mb-3 transition-all hover:cursor-pointer hover:shadow-lg ${
        selected ? "ring-2 ring-blue-400" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <img src={src} className="h-6 w-6 mr-3" alt={label} />
        <span className="font-semibold text-gray-800">{label}</span>
      </div>
      <span
        className={`w-5 h-5 rounded-full border-2 ${
          selected ? "border-blue-600 bg-blue-600" : "border-gray-400"
        } flex items-center justify-center`}
      >
        {selected && (
          <span className="w-2 h-2 bg-white rounded-full block"></span>
        )}
      </span>
    </button>
  );
}
