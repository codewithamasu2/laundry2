import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import CustomerSelectionPage from "./pages/CustomerSelection";
import AddNewCustomerPage from "./pages/AddNewCustomer";
import AddDetailsPage from "./pages/AddDetails";
import SplashScreen from "./pages/SplashScreen";
import ChoosePaymentPage from "./pages/ChoosePayment";
import InvoicePage from "./pages/Invoice";
import OrderPage from "./pages/Order";
import OrderDetailCompletedPage from "./pages/OrderDetailCompleted";
import OrderDetailOngoingPage from "./pages/OrderDetailOnGoing";
import OrderDetailQueuePage from "./pages/OrderDetailQueue";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Splash Screen  */}
        <Route path="/" element={<SplashScreen />} />
        {/* Halaman Login */}
        <Route path="/login" element={<Login />} />

        {/* Halaman Utama setelah login */}
        <Route path="/home" element={<Homepage />} />

        {/* Redirect semua path lain ke Login */}
        <Route path="*" element={<Navigate to="/" replace />} />

        {/* Halaman Customer Selection  */}
        <Route path="/customer-selection" element={<CustomerSelectionPage />} />

        {/* Halaman Add New Customer */}
        <Route
          path="/customer-selection/add-new-customer"
          element={<AddNewCustomerPage />}
        />

        {/* Halaman Add Details */}
        <Route
          path="/customer-selection/add-details"
          element={<AddDetailsPage />}
        />

        {/* Halaman Choose Payment */}
        <Route
          path="/customer-selection/add-details/choose-payment"
          element={<ChoosePaymentPage />}
        />

        {/* Halaman Invoice */}
        <Route
          path="/customer-selection/add-details/invoice"
          element={<InvoicePage />}
        />

        {/* Halaman Order  */}
        <Route path="/orders" element={<OrderPage />} />
        <Route
          path="/orders/completed/:orderId"
          element={<OrderDetailCompletedPage />}
        />
        <Route
          path="/orders/on-going/:orderId"
          element={<OrderDetailOngoingPage />}
        />
        <Route
          path="/orders/queue/:orderId"
          element={<OrderDetailQueuePage />}
        />
      </Routes>
    </Router>
  );
}
