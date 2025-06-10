import React, { useEffect } from "react";
import PaymentMethodCard from "./PaymentMethodCard";

export default function PaymentSection({ selected, setSelected }) {
  useEffect(() => {
    localStorage.setItem("paymentMethod", selected);
  }, [selected]);

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-[#213555]">Payment Method</span>
      </div>
      <PaymentMethodCard
        type="cash"
        selected={selected === "cash"}
        onClick={() => setSelected("cash")}
      />
      <PaymentMethodCard
        type="transfer"
        selected={selected === "transfer"}
        onClick={() => setSelected("transfer")}
      />
      <PaymentMethodCard
        type="edc"
        selected={selected === "edc"}
        onClick={() => setSelected("edc")}
      />
    </div>
  );
}
