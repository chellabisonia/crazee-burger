import "./App.css";
import OrderPage from "./components/pages/order/Main/OrderPage";
import LoginPage from "./components/pages/login/LoginPage";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order-page/:username" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
