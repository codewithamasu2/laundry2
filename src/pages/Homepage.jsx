import Header from "../components/Homepage/Header";
import Services from "../components/Homepage/Services";
import OrderList from "../components/Homepage/OrderList";
import FooterNav from "../components/FooterNav";

export default function Homepage() {
  return (
    <div className="min-h-screen pb-16 bg-gray-100">
      <Header user="Elon Musk" branch="Los Angeles 24th Street" />
      <div className="bg-white rounded-t-3xl pt-4">
        <Services />
        <OrderList />
      </div>
      <FooterNav />
    </div>
  );
}
