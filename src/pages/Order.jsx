import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderTabHeader from "../components/Orders/OrderTabHeader";
import OrderTabList from "../components/Orders/OrderTabList";
import FooterNav from "../components/FooterNav";

const dummyCompleted = [
  {
    orderId: 4,
    serviceType: "Regular",
    date: "24 Maret 2025",
    status: "Completed",
    estimate: "26 Maret 2025",
    totalItem: 22,
  },
  {
    orderId: 3,
    serviceType: "Regular",
    date: "24 Maret 2025",
    status: "Completed",
    estimate: "26 Maret 2025",
    totalItem: 21,
  },
  {
    orderId: 2,
    serviceType: "Regular",
    date: "24 Maret 2025",
    status: "Completed",
    estimate: "26 Maret 2025",
    totalItem: 25,
  },
  {
    orderId: 34,
    serviceType: "Regular",
    date: "24 Maret 2025",
    status: "Completed",
    estimate: "26 Maret 2025",
    totalItem: 18,
  },
  {
    orderId: 1,
    serviceType: "Regular",
    date: "24 Maret 2025",
    status: "Completed",
    estimate: "26 Maret 2025",
    totalItem: 20,
  },
];
const dummyQueue = [
  {
    orderId: 1001,
    serviceType: "Regular",
    date: "25 Maret 2025",
    status: "Queue",
    estimate: "28 Maret 2025",
    totalItem: 9,
  },
  {
    orderId: 1002,
    serviceType: "Regular",
    date: "25 Maret 2025",
    status: "Queue",
    estimate: "28 Maret 2025",
    totalItem: 12,
  },
  {
    orderId: 1003,
    serviceType: "Regular",
    date: "25 Maret 2025",
    status: "Queue",
    estimate: "28 Maret 2025",
    totalItem: 10,
  },
  {
    orderId: 1004,
    serviceType: "Regular",
    date: "25 Maret 2025",
    status: "Queue",
    estimate: "28 Maret 2025",
    totalItem: 8,
  },
  {
    orderId: 1005,
    serviceType: "Regular",
    date: "25 Maret 2025",
    status: "Queue",
    estimate: "28 Maret 2025",
    totalItem: 13,
  },
];
const dummyOngoing = [
  {
    orderId: 2001,
    serviceType: "Regular",
    date: "25 Maret 2025",
    status: "On Progress",
    estimate: "27 Maret 2025",
    totalItem: 11,
  },
  {
    orderId: 2002,
    serviceType: "Regular",
    date: "25 Maret 2025",
    status: "On Progress",
    estimate: "27 Maret 2025",
    totalItem: 14,
  },
  {
    orderId: 2003,
    serviceType: "Regular",
    date: "25 Maret 2025",
    status: "On Progress",
    estimate: "27 Maret 2025",
    totalItem: 15,
  },
  {
    orderId: 2004,
    serviceType: "Regular",
    date: "25 Maret 2025",
    status: "On Progress",
    estimate: "27 Maret 2025",
    totalItem: 13,
  },
  {
    orderId: 2005,
    serviceType: "Regular",
    date: "25 Maret 2025",
    status: "On Progress",
    estimate: "27 Maret 2025",
    totalItem: 10,
  },
];

export default function OrderPage() {
  const [tab, setTab] = useState("completed");
  const navigate = useNavigate();

  const ORDERS = {
    queue: dummyQueue,
    "on-going": dummyOngoing,
    completed: dummyCompleted,
  };

  const handleOrderClick = (order) => {
    if (order.status === "Completed") {
      navigate(`/orders/completed/${order.orderId}`);
    } else if (order.status === "On Progress") {
      navigate(`/orders/on-going/${order.orderId}`);
    } else if (order.status === "Queue") {
      navigate(`/orders/queue/${order.orderId}`);
    }
  };

  return (
    <div className="min-h-screen pb-24 bg-gray-100">
      <OrderTabHeader tab={tab} setTab={setTab} />
      <OrderTabList orders={ORDERS[tab]} onOrderClick={handleOrderClick} />
      <FooterNav />
    </div>
  );
}
