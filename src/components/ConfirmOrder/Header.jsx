import ArrowLeftIcon from "../../assets/icons/left-arrow.svg";
import { Link } from "react-router-dom";
export default function Header({ title }) {
  return (
    <header className="flex items-center px-4 py-3 bg-white">
      <Link to="/customer-selection/add-details">
        <button className="p-1 mr-2 hover:cursor-pointer">
          <img src={ArrowLeftIcon} className="h-6 w-6 text-gray-800" />
        </button>
      </Link>
      <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
    </header>
  );
}
