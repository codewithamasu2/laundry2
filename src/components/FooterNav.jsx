import HomeIcon from "../assets/icons/home-bottom-navbar.svg";
import OrderIcon from "../assets/icons/order-bottom-navbar.svg";
import UserIcon from "../assets/icons/user-bottom-navbar.svg";
import { Link } from "react-router-dom";
export default function FooterNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white py-2 flex justify-around h-18 rounded-t-lg border-t">
      <Link to="/home">
        <img
          src={HomeIcon}
          className="h-6 w-6 text-gray-400 hover:shadow-lg"
          alt="home icon"
        />
      </Link>
      <Link to="/orders">
        <img
          src={OrderIcon}
          className="h-6 w-6 text-gray-400 hover:shadow-lg"
          alt="order icon"
        />
      </Link>
      <Link to="/profile">
        <img
          src={UserIcon}
          className="h-6 w-6 text-gray-400 hover:shadow-lg"
          alt="user icon"
        />
      </Link>
    </nav>
  );
}
