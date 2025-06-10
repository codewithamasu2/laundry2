export default function CustomerItem({ customer, selectedId, onSelect }) {
  const isSelected = selectedId === customer.id;
  return (
    <div
      className="flex items-start justify-between py-3 cursor-pointer"
      onClick={() => onSelect(customer.id)}
    >
      <div>
        <p className="text-sm font-medium text-gray-900">{customer.name}</p>
        <p className="text-xs text-gray-600">{customer.phone}</p>
        <p className="text-xs text-gray-600">{customer.address}</p>
      </div>
      <input
        type="radio"
        checked={isSelected}
        onChange={() => onSelect(customer.id)}
        className="h-4 w-4 text-blue-500"
      />
    </div>
  );
}
