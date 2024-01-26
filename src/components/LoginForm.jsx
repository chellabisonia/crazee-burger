import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous!</h1>
        <br />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom "
          required="required"
        />

        <br />
        
        <button>Accéder à mon espace</button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  background: green;
`;
