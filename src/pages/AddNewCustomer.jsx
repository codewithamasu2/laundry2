import React, { useState, useEffect } from "react";
import Header from "../components/CustomerData/Header";
import SaveButton from "../components/AddNewCustomer/SaveButton";
import FooterNav from "../components/FooterNav";
import UserIcon from "../assets/icons/person.svg";
import LocationMarkerIcon from "../assets/icons/location.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import NewCustomerAddedIcon from "../assets/images/notification-new-customer.svg";

export default function AddNewCustomer() {
  // load existing customers dari localStorage
  const [customers, setCustomers] = useState(() => {
    const stored = localStorage.getItem("customers");
    return stored ? JSON.parse(stored) : [];
  });

  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [showModal, setShowModal] = useState(false);

  // helper untuk persist ke localStorage setiap kali customers berubah
  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = () => {
    // buat objek customer baru dengan ID unik
    const newCustomer = {
      id: Date.now(),
      name: form.name.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
    };

    // update state & otomatis tersimpan di localStorage via effect
    setCustomers((prev) => [...prev, newCustomer]);

    // tampilkan modal notifikasi
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2500);

    // reset form
    setForm({ name: "", phone: "", address: "" });
  };

  const isValid =
    form.name.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.address.trim() !== "";

  return (
    <>
      {/* Halaman Utama */}
      <div className="min-h-screen pb-16 bg-gray-100">
        <Header title="Add New Customer" />
        <main className="mx-auto mt-4 px-4 w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="font-semibold mb-4 text-[#213555]">
              New Customer Data
            </h1>
            {/* Name */}
            <div className="mb-4">
              <div className="relative">
                <img
                  src={UserIcon}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                />
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border-b border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
                />
              </div>
            </div>
            {/* Phone */}
            <div className="mb-4">
              <div className="relative">
                <img
                  src={PhoneIcon}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                />
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border-b border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
                />
              </div>
            </div>
            {/* Address */}
            <div className="mb-4">
              <div className="relative">
                <img
                  src={LocationMarkerIcon}
                  className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                />
                <textarea
                  id="address"
                  rows={3}
                  placeholder="Address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border-b border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-semibold"
                />
              </div>
            </div>
            {/* Save Button */}
            <div className="mt-4">
              <SaveButton
                disabled={!isValid || showModal}
                onClick={handleSave}
              />
            </div>
          </div>
        </main>
        <FooterNav />
      </div>

      {/* Modal Notification */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-blur-sm">
          <img
            src={NewCustomerAddedIcon}
            alt="New Added"
            className="h-80 w-80 text-gray-800"
          />
        </div>
      )}
    </>
  );
}
