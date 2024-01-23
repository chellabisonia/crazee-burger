import { useNavigate } from "react-router-dom";

export default function OrderPage() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Déconnexion
      </button>
    </>
  );
}
