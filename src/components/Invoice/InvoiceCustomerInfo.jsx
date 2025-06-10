export default function InvoiceCustomerInfo({ customer, staffId, orderId }) {
  return (
    <div className="bg-[#F7FAFC] rounded-lg p-4 mb-3 text-sm">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-gray-600">Customer</span>
        <span className="font-medium text-gray-800">
          {customer?.name || "-"}
        </span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-500">Order ID</span>
        <span className="text-gray-700">{orderId}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-500">Phone</span>
        <span className="text-gray-700">{customer?.phone || "-"}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-500">Staff ID</span>
        <span className="text-gray-700">{staffId}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Date</span>
        <span className="text-gray-700">
          {new Date().toLocaleDateString("id-ID")}
        </span>
      </div>
    </div>
  );
}
