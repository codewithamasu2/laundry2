import OrderCard from "./OrderCard";
import { useState } from "react";
const initialOrders = [
  {
    id: 1,
    time: "08:00",
    date: new Date().toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    status: "On Progress",
    estimate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(
      "id-ID",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    ),
    color: "blue",
  },
  {
    id: 2,
    time: "08:00",
    date: new Date().toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    status: "Completed",
    estimate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(
      "id-ID",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    ),
    color: "green",
  },
];

export default function OrderList() {
  const [orders, setOrders] = useState(initialOrders);
  const [viewedMore, setViewedMore] = useState(false);

  const handleViewMore = () => {
    if (viewedMore) return;
    const newId = orders.length + 1;
    const today = new Date();
    const formattedDate = today.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const newOrder = {
      id: newId,
      time: "08:00",
      date: formattedDate,
      status: "Completed",
      estimate: formattedDate,
      color: "green",
    };
    setOrders((prev) => [...prev, newOrder]);
    setViewedMore(true);
  };

  return (
    <section className="px-4 my-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        On Going Order
      </h2>
      {orders.map((o) => (
        <OrderCard
          key={o.id}
          time={o.time}
          date={o.date}
          status={o.status}
          estimate={o.estimate}
          color={o.color}
        />
      ))}
      {!viewedMore && (
        <div className="text-center mt-2">
          <button
            onClick={handleViewMore}
            className="text-sm text-blue-500 hover:underline hover:cursor-pointer"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}
