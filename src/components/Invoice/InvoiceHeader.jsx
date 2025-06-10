import LaundryIcon from "../../assets/icons/laundry-washer.svg";
export default function InvoiceHeader() {
  return (
    <div className="text-center mb-4">
      <header className="bg-gray-500 py-4 text-white text-xl">
        <h1>Transaction Detail</h1>
      </header>
      <div className="flex items-center justify-center gap-2 mt-4">
        <img src={LaundryIcon} className="h-20 w-20 " alt="laundry icon" />
      </div>
      <div className="text-xs mt-1 text-white bg-green-400 mt-2 px-2 py-1 w-15 rounded mx-auto font-semibold">Paid</div>
    </div>
  );
}
