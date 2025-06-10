import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Import icons sebagai modul (bukan string path!)
import SplashScreenIcon1 from "../assets/icons/splash-screen-1.svg";
import SplashScreenIcon2 from "../assets/icons/splash-screen-2.svg";
import SplashScreenIcon3 from "../assets/icons/splash-screen-3.svg";
import SplashScreenIcon4 from "../assets/icons/splash-screen-1.svg";

const SPLASH_ICONS = [
  SplashScreenIcon1,
  SplashScreenIcon2,
  SplashScreenIcon3,
  SplashScreenIcon4,
];

export default function SplashScreen() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (step < SPLASH_ICONS.length - 1) {
      const timer = setTimeout(() => setStep((s) => s + 1), 600);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(
        () => navigate("/login", { replace: true }),
        600
      );
      return () => clearTimeout(timer);
    }
  }, [step, navigate]);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        background:
          "url('/images/splash-screen-bg.png') center/cover no-repeat",
      }}
    >
      <img
        src={SPLASH_ICONS[step]}
        alt="Splash Icon"
        className="w-20 h-20 mb-8 transition-all duration-500 ease-in-out"
        style={{ filter: "drop-shadow(0 4px 16px rgba(33,53,85,0.18))" }}
      />
    </div>
  );
}
