export default function InvoiceSummary({
  totalItems,
  subtotal,
  paymentMethod,
  estimatedDone = "24 Maret 2025",
}) {
  return (
    <div className="bg-[#F7FAFC] rounded-lg p-4 mb-4">
      <div className="flex justify-between mb-2 text-sm">
        <span className="font-semibold text-gray-600">Total Item</span>
        <span className="font-bold text-gray-900">{totalItems}</span>
      </div>
      <div className="flex justify-between mb-2 text-sm">
        <span className="font-semibold text-gray-600">Subtotal</span>
        <span className="font-bold text-[#213555]">
          Rp. {subtotal.toLocaleString("id-ID")}
        </span>
      </div>
      <div className="flex justify-between mb-2 text-sm">
        <span className="font-semibold text-gray-600">Payment</span>
        <span className="font-bold text-[#213555] capitalize">
          {paymentMethod}
        </span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="font-semibold text-gray-600">Estimated Done</span>
        <span className="text-gray-800">{estimatedDone}</span>
      </div>
    </div>
  );
}
