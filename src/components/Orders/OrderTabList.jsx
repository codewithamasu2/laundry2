import OrderCard from "./OrderCard";

export default function OrderTabList({ orders, onOrderClick }) {
  return (
    <div className="mt-2 px-4">
      {orders.map((order) => (
        <OrderCard
          key={order.orderId}
          {...order}
          onClick={() => onOrderClick(order)}
        />
      ))}
    </div>
  );
}
