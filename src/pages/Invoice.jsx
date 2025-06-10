import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InvoiceHeader from "../components/Invoice/InvoiceHeader";
import InvoiceCustomerInfo from "../components/Invoice/InvoiceCustomerInfo";
import InvoiceItemList from "../components/Invoice/InvoiceItemList";
import InvoiceSummary from "../components/Invoice/InvoiceSummary";
import FooterNav from "../components/FooterNav";

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

function getTotalItems(qty) {
  if (!qty) return 0;
  const basic =
    (qty.tshirt || 0) +
    (qty.shirt || 0) +
    (qty.pants || 0) +
    (qty.jacket || 0) +
    (qty.underwear || 0);
  const bedding = qty.bedding
    ? Object.values(qty.bedding).reduce((a, b) => a + b, 0)
    : 0;
  return basic + bedding;
}

function getSubtotal(qty) {
  if (!qty) return 0;
  return (
    (qty.tshirt || 0) * ITEM_PRICES.tshirt +
    (qty.shirt || 0) * ITEM_PRICES.shirt +
    (qty.pants || 0) * ITEM_PRICES.pants +
    (qty.jacket || 0) * ITEM_PRICES.jacket +
    (qty.underwear || 0) * ITEM_PRICES.underwear +
    ((qty.bedding && qty.bedding["Bed Cover"]) || 0) *
      ITEM_PRICES.bedding["Bed Cover"]
  );
}

export default function InvoicePage() {
  const [qty, setQty] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [staffId] = useState(() => Math.floor(1000 + Math.random() * 9000));
  const orderId = localStorage.getItem("addDetailsQty")
    ? JSON.parse(localStorage.getItem("addDetailsQty")).orderId
    : "";

  useEffect(() => {
    // Ambil qty dari localStorage
    const qtyStorage = localStorage.getItem("addDetailsQty");
    if (qtyStorage) setQty(JSON.parse(qtyStorage));

    // Ambil customer terbaru dari localStorage (ambil yang terakhir)
    const custStorage = localStorage.getItem("customers");
    if (custStorage) {
      const arr = JSON.parse(custStorage);
      setCustomer(arr && arr.length ? arr[arr.length - 1] : null);
    }

    // Ambil payment method
    const pm = localStorage.getItem("paymentMethod");
    if (pm) setPaymentMethod(pm);
  }, []);

  const subtotal = getSubtotal(qty);
  const totalItems = getTotalItems(qty);

  return (
    <div className="min-h-screen pb-24 bg-[#7E99A3]">
      <InvoiceHeader />
      <div className="px-4 pt-2 pb-4">
        <InvoiceCustomerInfo
          customer={customer}
          staffId={staffId}
          orderId={orderId}
        />
        <InvoiceItemList qty={qty || {}} />
        <InvoiceSummary
          totalItems={totalItems}
          subtotal={subtotal}
          paymentMethod={paymentMethod}
          estimatedDone="24 Maret 2025"
        />
        <div className="text-center mt-6">
          <Link to="/orders">
            <button className="w-full bg-white text-black font-semibold py-3 rounded-lg text-lg shadow-md hover:bg-gray-200 hover:shadow-lg transition-colors duration-200 hover:cursor-pointer hover:text-gray-800">
              Process Order
            </button>
          </Link>
        </div>
      </div>
      <FooterNav />
    </div>
  );
}
