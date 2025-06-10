import TimeIcon from "../../assets/icons/time.svg";
import CompletedIcon from "../../assets/icons/complete-badge.svg";
import OnProgressBadgeIcon from "../../assets/icons/on-progress-badge.svg";
import LaundryCompletedIcon from "../../assets/icons/laundry-completed-order.svg";
import LaundryOnGoingOrderIcon from "../../assets/icons/laundry-on-going-order.svg";
import ArrowRightIcon from "../../assets/icons/arrow-right.svg";

export default function OrderCard({
  orderId,
  serviceType,
  date,
  status,
  estimate,
  totalItem,
  onClick,
}) {
  const badge =
    status === "Completed"
      ? { bg: "#36BC74", label: "Completed", icon: CompletedIcon }
      : status === "On Progress"
      ? { bg: "#1974AC", label: "On Progress", icon: OnProgressBadgeIcon }
      : { bg: "#F59E42", label: "Queue", icon: OnProgressBadgeIcon };
  const laundryIcon =
    status === "Completed" ? LaundryCompletedIcon : LaundryOnGoingOrderIcon;

  return (
    <div
      className="bg-white rounded-xl px-4 py-3 shadow mb-5 flex flex-col gap-2 border "
      onClick={onClick}
      tabIndex={0}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={TimeIcon} alt="time" className="h-5 w-5" />
          <div>
            <div className="font-bold text-[#213555] text-sm">
              #{String(orderId).padStart(5, "0")}
            </div>
            <div className="text-xs text-gray-500">
              {serviceType} | {date}
            </div>
          </div>
        </div>
        {/* Badge */}
        <span
          className="flex items-center text-xs px-3 py-0.5 rounded-full font-semibold"
          style={{ background: badge.bg, color: "#fff" }}
        >
          <img src={badge.icon} alt="badge" className="h-4 w-4 mr-1" />
          {badge.label}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-200 rounded-full">
        <div
          className="h-1 rounded-full"
          style={{
            background: badge.bg,
            width:
              status === "Completed"
                ? "100%"
                : status === "On Progress"
                ? "80%"
                : "50%",
          }}
        />
      </div>

      {/* Body */}
      <div className="flex items-center pt-1">
        <img src={laundryIcon} className="h-12 w-12 mr-3" alt="laundry" />
        <div className="flex-1 text-xs text-gray-800">
          <div>
            <span className="font-semibold">Status:</span>{" "}
            <span className="font-bold" style={{ color: badge.bg }}>
              {badge.label}
            </span>
          </div>
          <div>
            <span className="font-semibold">Estimate Done:</span> {estimate}
          </div>
          <div>
            <span className="font-semibold">Total Item:</span> {totalItem}
          </div>
        </div>
        <img
          src={ArrowRightIcon}
          alt="detail"
          className="h-7 w-7 ml-2 hover:shadow cursor-pointer transition-all"
        />
      </div>
    </div>
  );
}
