import LoginBanner from "../../assets/images/login-banner.svg";
export default function Logo() {
  return (
    <div className="flex justify-center mb-6 sm:mb-8 md:mb-12 relative h-28">
      <img
        src={LoginBanner}
        alt="Banner"
        className="absolute top-0 w-full object-cover"
      />
    </div>
  );
}
