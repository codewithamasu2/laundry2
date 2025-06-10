// src/pages/ProfilePage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FooterNav from "../components/FooterNav";
import ArrowLeftIcon from "../assets/icons/left-arrow.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import ProfilePic from "../assets/icons/user-profile-svgrepo-com.svg";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [checkInOut, setCheckInOut] = useState(false);
  const [shiftsRemain, setShiftsRemain] = useState(3); 
  const [shiftSchedule, setShiftSchedule] = useState("Senin-Jum'at, 09:00-17:00");

  useEffect(() => {
    // load customer data
    const stored = localStorage.getItem("customers");
    if (stored) {
      try {
        const arr = JSON.parse(stored);
        if (arr.length) {
          const last = arr[arr.length - 1];
          setProfile({ name: last.name, phone: last.phone });
        }
      } catch {
        console.log("Failed to parse customers from localStorage");
      }
    }
  }, []);

  const handleCheck = () => {
    setCheckInOut((prev) => !prev);
  };

  const handleShift = () => {
    Swal.fire({
      title: "Jadwal Shift",
      text: shiftSchedule,
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen pb-24 bg-[#A9C0C9]">
      {/* Header */}
      <header className="flex items-center px-4 py-3">
        <button onClick={() => navigate(-1)} className="p-1 mr-2">
          <img src={ArrowLeftIcon} alt="back" className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold text-[#213555]">Profile</h1>
      </header>

      {/* Profile Info */}
      <div className="flex flex-col items-center mt-4">
        <img
          src={ProfilePic}
          alt="profile"
          className="h-24 w-24 rounded-full border-4 border-white shadow-md"
        />
        <h2 className="mt-3 text-2xl font-bold text-[#213555]">
          Elon Musk
        </h2>
        <p className="text-sm text-gray-700">Kasir</p>
      </div>

      {/* Shifts Remain */}
      <div className="mx-4 mt-6 bg-white rounded-lg shadow px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full border-2 ${
                i < 4 - shiftsRemain
                  ? "bg-[#213555] border-[#213555]"
                  : "border-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">{shiftsRemain} Remain</span>
      </div>

      {/* Actions */}
      <div className="mx-4 mt-4 space-y-3">
        <button
          onClick={handleCheck}
          className="w-full bg-white rounded-lg shadow px-4 py-3 flex items-center justify-between"
        >
          <span className="font-medium text-[#213555]">
            Check-In & Check-Out
          </span>
          {checkInOut && <span className="text-green-600 font-bold">✓</span>}
        </button>

        <button
          onClick={handleShift}
          className="w-full bg-white rounded-lg shadow px-4 py-3 flex items-center justify-between"
        >
          <span className="font-medium text-[#213555]">Jadwal Shift</span>
          <img
            src={CalendarIcon}
            alt="calendar"
            className="h-6 w-6 text-gray-600"
          />
        </button>

        <button
          onClick={handleLogout}
          className="w-full bg-red-400 text-white rounded-lg shadow px-4 py-3 flex items-center justify-between"
        >
          <span className="font-medium">Log Out</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7"
            />
          </svg>
        </button>
      </div>

      <FooterNav />
    </div>
  );
}
