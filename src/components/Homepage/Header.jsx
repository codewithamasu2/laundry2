import LaundryIcon from '../../assets/icons/laundry.svg';
import LocationMarkerIcon from '../../assets/icons/location.svg';
export default function Header({ user, branch }) {
  return (
    <header className="bg-blue-200 px-4 py-3 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium font-poppins text-gray-800">{user}</p>
        <div className="flex items-center text-xs text-gray-700">
          <img src={LocationMarkerIcon} className="h-4 w-4 mr-2" alt="location icon" />
          <span>{branch}</span>
        </div>
      </div>
      <img src={LaundryIcon} className="h-8 w-8" alt="laundry icon" />
    </header>
  );
}
