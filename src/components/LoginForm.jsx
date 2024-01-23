import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`/order-page/${inputValue}`);
  };
  const handleChange = (event) => {
    const valueAfterChange = event.target.value;
    setInputValue(valueAfterChange);
  };
  //affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous!</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom..."
        required="required"
      />
      {/* <Link to="/order-page"> */}
      <button>Accéder à votre espace</button>
      {/* </Link> */}
    </form>
  );
}
