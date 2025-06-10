import React, { useState, useEffect } from "react";
import ContactIcon from "../assets/icons/contact-book.svg";
import Header from "../components/CustomerData/Header";
import CustomerList from "../components/CustomerData/CustomerList";
import AddCustomerButton from "../components/CustomerData/AddCustomerButton";
import UseButton from "../components/CustomerData/UseButton";
import FooterNav from "../components/FooterNav";

export default function CustomerSelectionPage() {
  const [customers, setCustomers] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("customers");
    if (stored) {
      try {
        setCustomers(JSON.parse(stored));
      } catch {
        console.error("Failed to parse customers from localStorage");
      }
    }
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  const handleAdd = () => {
    window.location.hash = "#/add-new-customer";
  };

  const handleUse = () => {
    const selected = customers.find((c) => c.id === selectedId);
    if (selected) {
      console.log("Using customer:", selected);
      window.location.hash = "#/customer-selection/add-details";
    }
  };

  return (
    <div className="min-h-screen pb-16 bg-gray-100">
      <Header title="Add Details" onBack={handleBack} />

      <div className="mx-4 mt-4 bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-gray-200 rounded-lg mr-2">
            <img src={ContactIcon} className="h-6 w-6" alt="contact icon" />
          </div>
          <h2 className="text-sm font-medium text-gray-900">Choose Customer</h2>
        </div>

        <CustomerList
          customers={customers}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <AddCustomerButton onAdd={handleAdd} />
      </div>

      <UseButton disabled={!selectedId} onClick={handleUse} />

      <FooterNav />
    </div>
  );
}
