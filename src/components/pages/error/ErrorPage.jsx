import { Link } from "react-router-dom";

export default function ErrorPage() {
 
  return (
    <div>
      Error page
      <Link to="/">
        <button>Retourner à la page d'accueil</button>
      </Link>
    </div>
  );
}
