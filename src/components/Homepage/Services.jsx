import ServiceCard from "./ServiceCard";
import ExpressIcon from "../../assets/icons/clothes-shirt.svg";
import IroningIcon from "../../assets/icons/iron.svg";
import WashFoldIcon from "../../assets/icons/laundy-wash-and-fold.svg";
import RegularIcon from "../../assets/icons/laundry-washer.svg";

const services = [
  {
    key: "express",
    icon: ExpressIcon,
    title: "Express",
    linkTo: "/customer-selection",
  },
  {
    key: "ironing",
    icon: IroningIcon,
    title: "Ironing",
    linkTo: "/customer-selection",
  },
  {
    key: "washfold",
    icon: WashFoldIcon,
    title: "Wash & Fold",
    linkTo: "/customer-selection",
  },
  {
    key: "regular",
    icon: RegularIcon,
    title: "Regular",
    linkTo: "/customer-selection",
  },
];

export default function Services() {
  return (
    <section className="px-4 my-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Services</h2>
      <div className="grid grid-cols-2 gap-4">
        {services.map((s) => (
          <ServiceCard key={s.key} icon={s.icon} title={s.title} linkTo={s.linkTo} />
        ))}
      </div>
    </section>
  );
}
