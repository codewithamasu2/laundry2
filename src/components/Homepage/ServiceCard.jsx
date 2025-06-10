import { Link } from "react-router-dom";
export default function ServiceCard({ icon, title, linkTo }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center shadow-md hover:shadow-lg">
      <Link to={linkTo}>
        <img src={icon} className="h-12 w-12 mb-2 text-gray-800 " alt="icon" />
        <span className="text-sm font-medium text-gray-900">{title}</span>
      </Link>
    </div>
  );
}
