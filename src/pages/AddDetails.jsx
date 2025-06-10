import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/CustomerData/Header";
import FooterNav from "../components/FooterNav";
import ItemCard from "../components/Details/ItemCard";
import BeddingCard from "../components/Details/BeddingCard";
import TshirtIcon from "../assets/icons/t-shirt-details.svg";
import ShirtIcon from "../assets/icons/shirt-details.svg";
import PantsIcon from "../assets/icons/pants-details.svg";
import JacketIcon from "../assets/icons/jacket-details.svg";
import UnderwearIcon from "../assets/icons/underwear-details.svg";

const itemList = [
  { key: "tshirt", label: "T-Shirt", icon: TshirtIcon },
  { key: "shirt", label: "Shirt", icon: ShirtIcon },
  { key: "pants", label: "Pants", icon: PantsIcon },
  { key: "jacket", label: "Jacket", icon: JacketIcon },
  { key: "underwear", label: "Underwear", icon: UnderwearIcon },
];

const initialQty = {
  tshirt: 5,
  shirt: 3,
  pants: 4,
  jacket: 0,
  underwear: 5,
  bedding: {
    "Bed Cover": 1,
    Blanket: 0,
    Pillow: 2,
    Bolster: 2,
    Duvet: 0,
  },
};

function getNextOrderId() {
  const last = Number(localStorage.getItem("lastOrderId") || "1000");
  const next = last + 1;
  localStorage.setItem("lastOrderId", next);
  return String(next).padStart(4, "0");
}

export default function AddDetailsPage() {
  const navigate = useNavigate();

  // Saat pertama kali mount, coba load dari localStorage jika ada
  const [qty, setQty] = useState(() => {
    const stored = localStorage.getItem("addDetailsQty");
    return stored ? JSON.parse(stored) : initialQty;
  });

  // Sync ke localStorage setiap qty berubah
  useEffect(() => {
    localStorage.setItem("addDetailsQty", JSON.stringify(qty));
  }, [qty]);

  // Helper untuk akumulasi total
  const total =
    itemList.reduce((sum, item) => sum + qty[item.key], 0) +
    Object.values(qty.bedding).reduce((sum, v) => sum + v, 0);

  // Handler increase/decrease item qty
  const handleQtyChange = (key, val) => {
    setQty((prev) => ({
      ...prev,
      [key]: Math.max(0, val),
    }));
  };

  // Handler increase/decrease bedding qty
  const handleBeddingChange = (name, val) => {
    setQty((prev) => ({
      ...prev,
      bedding: { ...prev.bedding, [name]: Math.max(0, val) },
    }));
  };

  // Saat tombol Done di-klik:
  const handleDone = () => {
    // Ambil order id baru:
    const orderId = getNextOrderId();
    // Masukkan orderId ke qty
    const dataWithOrderId = { ...qty, orderId };
    localStorage.setItem("addDetailsQty", JSON.stringify(dataWithOrderId));
    // Pindah halaman
    navigate("/customer-selection/add-details/choose-payment");
  };

  return (
    <div className="min-h-screen pb-24 bg-gray-100">
      <Header title="Add Details" />

      <div className="px-4 pt-2 pb-4">
        {/* Item Cards */}
        {itemList.map((item) => (
          <ItemCard
            key={item.key}
            label={item.label}
            qty={qty[item.key]}
            onIncrease={() => handleQtyChange(item.key, qty[item.key] + 1)}
            onDecrease={() => handleQtyChange(item.key, qty[item.key] - 1)}
            icon={item.icon}
          />
        ))}

        {/* Bedding */}
        <BeddingCard
          beddingQty={qty.bedding}
          onBeddingChange={handleBeddingChange}
        />

        {/* Total & Done */}
        <div className="mt-4 mb-2 flex justify-between items-center">
          <span className="font-semibold text-lg text-gray-800">
            Total Item
          </span>
          <span className="font-bold text-xl text-gray-800">{total}</span>
        </div>
        <hr />
        <Link to="/customer-selection/add-details/choose-payment">
            <button
              className="w-full mt-4 bg-[#7E99A3] text-white font-semibold py-3 rounded-lg text-lg shadow-md active:opacity-90 hover:cursor-pointer hover:bg-[#7E89A3]"
              onClick={handleDone}
            >
              Done
            </button>
        </Link>
      </div>
      <FooterNav />
    </div>
  );
}
