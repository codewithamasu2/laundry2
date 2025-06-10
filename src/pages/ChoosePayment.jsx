import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/ConfirmOrder/Header";
import FooterNav from "../components/FooterNav";
import ItemSummaryCard from "../components/ConfirmOrder/ItemSummaryCard";
import PaymentSection from "../components/ConfirmOrder/PaymentSection";

const ITEM_PRICES = {
  tshirt: 700,
  shirt: 700,
  pants: 1000,
  jacket: 3000,
  underwear: 300,
  bedding: {
    "Bed Cover": 20000,
    Blanket: 25000,
    Pillow: 15000,
    Bolster: 8000,
    Duvet: 30000,
  },
};

const SERVICE_TYPE = "Regular";

export default function ChoosePaymentPage() {
  const [qty, setQty] = useState({
    tshirt: 0,
    shirt: 0,
    pants: 0,
    jacket: 0,
    underwear: 0,
    bedding: {
      "Bed Cover": 0,
      Blanket: 0,
      Pillow: 0,
      Bolster: 0,
      Duvet: 0,
    },
  });
  const [payment, setPayment] = useState("cash");

  // Ambil qty dari localStorage
  useEffect(() => {
    const stored = localStorage.getItem("addDetailsQty");
    if (stored) {
      try {
        setQty(JSON.parse(stored));
      } catch {
        console.error("Failed to parse qty from localStorage");
      }
    }
  }, []);

  // Kalkulasi subtotal
  const subtotal =
    qty.tshirt * ITEM_PRICES.tshirt +
    qty.shirt * ITEM_PRICES.shirt +
    qty.pants * ITEM_PRICES.pants +
    qty.jacket * ITEM_PRICES.jacket +
    qty.underwear * ITEM_PRICES.underwear +
    (qty.bedding?.["Bed Cover"] || 0) * (ITEM_PRICES.bedding["Bed Cover"] || 0);
  // bedding lain kalau ada harga, bisa ditambah di sini

  const totalItems =
    qty.tshirt +
    qty.shirt +
    qty.pants +
    qty.jacket +
    qty.underwear +
    Object.values(qty.bedding || {}).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen pb-24 bg-gray-100">
      <Header title="Choose Payment" />

      <div className="px-4 pt-2 pb-4">
        {/* Ringkasan Pesanan */}
        <ItemSummaryCard qty={qty} />

        <div className="py-2 flex justify-between items-center">
          <span className="font-semibold text-gray-500">Total Item</span>
          <span className="font-bold">{totalItems}</span>
        </div>
        <div className="py-2 flex justify-between items-center">
          <span className="font-semibold text-gray-500">Service</span>
          <span className="font-bold">{SERVICE_TYPE}</span>
        </div>
        <div className="py-2 flex justify-between items-center border-b">
          <span className="font-semibold text-gray-500">Subtotal</span>
          <span className="font-bold text-[#213555]">
            Rp. {subtotal.toLocaleString("id-ID", { minimumFractionDigits: 2 })}
          </span>
        </div>

        {/* Payment */}
        <PaymentSection selected={payment} setSelected={setPayment} />

        <Link to="/customer-selection/add-details/invoice">
            <button className="w-full mt-6 bg-white text-[#8D8D8D] border border-gray-300 font-semibold py-3 rounded-lg text-md shadow active:opacity-90 hover:bg-gray-50 transition-colors duration-200 hover:cursor-pointer hover:text-black">
              Done
            </button>
        </Link>
      </div>
      <FooterNav />
    </div>
  );
}

