import { Link } from "react-router-dom";
export default function Button({ children }) {
  return (
    <Link to="/home">
      <button className="w-full bg-[#248CBC] border border-[#D6D6D6] hover:bg-[#1A9DBE] text-white font-medium py-3 sm:py-4 rounded-lg transition-colors duration-200 mb-4 sm:mb-6">
        <span className="font-light">{children}</span>
      </button>
    </Link>
  );
}
