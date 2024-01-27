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
        <hr />
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
  /* background: green; */
  font-family: "Amatic SC", cursive;
  hr {
    border: 1px solid #f56a2c;
    margin-bottom: 40px;
  }
  h1 {
    color: white;
    font-size: 48px;
  }
  h2 {
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }
  button {
    font-family: Arial, Helvetica, sans-serif;
  }
`;
