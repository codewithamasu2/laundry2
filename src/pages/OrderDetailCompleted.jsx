import React from "react";
import { Link } from "react-router-dom";
import HangerIcon from "../assets/icons/hanger.svg"; 
import FooterNav from "../components/FooterNav";
import ArrowLeftIcon from "../assets/icons/left-arrow.svg";
import CompeletedIcon from "../assets/icons/complete-badge.svg"

export default function OrderDetailPage() {
  return (
    <div className="min-h-screen pb-24 bg-gray-100">
      {/* Header */}
      <header className="flex items-center px-4 py-3 bg-white">
        <Link to="/orders">
          <button className="p-1 mr-2 hover:cursor-pointer">
            <img
              src={ArrowLeftIcon}
              className="h-6 w-6 text-gray-800"
              alt="back"
            />
          </button>
        </Link>
        <h1 className="text-lg font-semibold text-[#213555]">Order Detail</h1>
      </header>

      {/* Main Card */}
      <main className="px-4 pt-6">
        <div className="bg-white rounded-2xl shadow-lg mx-auto max-w-md p-5">
          {/* Order header */}
          <div className="flex items-center justify-between mb-2">
            <div className="font-bold text-[#213555] text-base">
              Order #000001
            </div>
            <img src={CompeletedIcon} alt="completed" />
          </div>
          <hr />

          {/* Icon */}
          <div className="flex justify-center py-4">
            <img src={HangerIcon} alt="hanger" className="h-16 w-16" />
          </div>

          {/* Service Details */}
          <div className="mb-3">
            <div className="font-semibold text-sm mb-1 text-[#213555]">
              Service Details
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span>Regular</span>
              <span>21</span>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span>Dry Clean</span>
              <span>1</span>
            </div>
            {/* Bedding detail */}
            <div className="ml-2 border-l-2 border-gray-200 pl-3 text-xs text-gray-700 flex justify-between">
              <span>Bed Cover</span>
              <span>Queen size</span>
            </div>
          </div>

          {/* Weight Total */}
          <div className="flex justify-between font-semibold text-sm mb-3">
            <span>Weight Total</span>
            <span className="text-base">2 kg</span>
          </div>

          {/* Payment Details */}
          <div className="font-semibold text-sm mb-1 text-[#213555]">
            Payment Details
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Sub Total</span>
            <span>Rp. 150,000.00</span>
          </div>
          <div className="flex justify-between text-sm mb-3">
            <span>Payment Method</span>
            <span>Cash</span>
          </div>

          <hr className="mb-4" />

          {/* Status */}
          <div className="w-full bg-[#88EEAC] rounded-lg py-3 text-center font-semibold text-[#213555] mt-2">
            Order is completed.
          </div>
        </div>
      </main>
      <FooterNav />
    </div>
  );
}
