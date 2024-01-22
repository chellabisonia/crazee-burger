import { useNavigate } from "react-router-dom";
export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      Error page
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Retourner à la page d'accueil
      </button>
    </div>
  );
}
