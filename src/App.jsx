import "./App.css";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

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
