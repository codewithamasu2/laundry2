import QtyButton from "./QtyButton";
import BeddingIcon from "../../assets/icons/bedding-details.svg";
const beddingList = ["Bed Cover", "Blanket", "Pillow", "Bolster", "Duvet"];

export default function BeddingCard({ beddingQty, onBeddingChange }) {
  return (
    <div className="bg-white rounded-xl border px-4 py-3 mb-4 shadow-sm">
      <div className="flex items-center mb-2">
        <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center mr-4">
          <img src={BeddingIcon} alt="details icon" />
        </div>
        <span className="font-semibold text-gray-800">Bedding</span>
      </div>
      <div className="divide-y divide-gray-200">
        {beddingList.map((name) => (
          <div className="flex items-center py-1" key={name}>
            <span className="flex-1 text-sm text-gray-800">{name}</span>
            <QtyButton
              onClick={() => onBeddingChange(name, beddingQty[name] - 1)}
              disabled={beddingQty[name] <= 0}
            >
              -
            </QtyButton>
            <span className="mx-2 text-base font-medium min-w-[20px] text-center">
              {beddingQty[name]}
            </span>
            <QtyButton
              onClick={() => onBeddingChange(name, beddingQty[name] + 1)}
            >
              +
            </QtyButton>
          </div>
        ))}
      </div>
    </div>
  );
}
