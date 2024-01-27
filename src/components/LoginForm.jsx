import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

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
      <div className="inputContainer">
        <BsPersonCircle className="icon" />
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom "
          required="required"
        />
      </div>
      <br />
      <button>Accéder à mon espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  background: green;
  max-width: 500px;
  min-width: 400px;
  padding: 2.5rem 2rem;
  margin: 0px auto;
  text-align: center;
  border-radius: 5px;
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

  .inputContainer {
    display: flex;
    /* border: 1px solid red; */
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 18px 24px 18px 24px;
    margin-bottom: 18px;
    border-radius: 5px;
  }
  .icon {
    font-size: 15px;
    color: gray;
    margin-right: 8px;
  }
  input {
    border: none;
    color: #17161a;
    font-size: 15px;
    background: white;
    width: 100%;
  }
  &::placeholder {
    background: white;
    color: lightgray;
  }
  button {
    font-family: Arial, Helvetica, sans-serif;
    width: 240px;
    height: 35px;
  }
`;
