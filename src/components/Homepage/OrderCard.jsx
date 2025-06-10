import TimeIcon from "../../assets/icons/time.svg";
import OnProgressBadgeIcon from "../../assets/icons/on-progress-badge.svg";
import CompletedIcon from "../../assets/icons/complete-badge.svg";
import LaundryOnGoingOrderIcon from "../../assets/icons/laundry-on-going-order.svg";
import LaundryCompletedIcon from "../../assets/icons/laundry-completed-order.svg";
export default function OrderCard({ time, date, status, estimate, color }) {
  const percent = status === "Completed" ? 100 : 80;

  return (
    <div className="bg-white rounded-xl p-4 shadow-md mb-4">
      {/* Header: Order Time, Time/Date & Badge */}
      <div className="flex items-start justify-between mb-2">
        {/* Left side: full-width label + time/date */}
        <div className="flex-1">
          {/* <h2 className="text-sm font-light text-gray-900 mb-1">Ganti dengan orderId di localstorage</h2> */}
          <div className="flex items-center text-xs text-gray-600">
            <img
              src={TimeIcon}
              alt="time icon"
              className="h-4 w-4 mr-1 flex-shrink-0"
            />
            <span>
              {time} | {date}
            </span>
          </div>
        </div>

        {/* Badge di pojok kanan */}
        <div className="ml-3 flex-shrink-0">
          <span
            className={`
                inline-flex items-center justify-center
                px-2 py-0.5 text-xs font-medium rounded-full
                text-${color}-700 bg-${color}-100
              `}
          >
            {status === "On Progress" ? (
              <img
                src={OnProgressBadgeIcon}
                alt="on progress"
                className="h-20 w-20"
              />
            ) : (
              <img src={CompletedIcon} alt="completed" className="h-20 w-20" />
            )}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-200 rounded-full mb-3">
        <div
          className={`h-1 rounded-full ${
            color === "green" ? "bg-[#36BC74]" : "bg-[#1974AC]"
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Body: icon laundry + status detail */}
      <div className="flex items-center">
        {status === "On Progress" ? (
          <img
            src={LaundryOnGoingOrderIcon}
            className="mr-3 h-25 w-25"
            alt="on going"
          />
        ) : (
          <img
            src={LaundryCompletedIcon}
            className="mr-3 h-25 w-25"
            alt="completed"
          />
        )}
        <div className="text-sm text-gray-700">
          <p>
            <span className="font-medium">Status:</span>{" "}
            {status === "On Progress" ? "On Progress" : "Ready for Pickup"}
          </p>
          <p>
            <span className="font-medium">Estimate Done:</span> {estimate}
          </p>
        </div>
      </div>
    </div>
  );
}
