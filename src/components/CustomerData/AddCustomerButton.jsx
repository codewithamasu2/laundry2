import PlusIcon from "../../assets/icons/plus.svg";
import { Link } from "react-router-dom";
export default function AddCustomerButton() {
  return (
    <Link to="/customer-selection/add-new-customer">
        <button className="w-full mt-4 h-12 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-gray-100">
          <img src={PlusIcon} className="h-6 w-6 text-gray-400" />
        </button>
    </Link>
  );
}
