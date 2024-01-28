import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { IoChevronForwardOutline } from "react-icons/io5";
import Input from "./reusable-ui/Input";
import { BsPersonCircle } from "react-icons/bs";

export default function LoginForm() {
  //State
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
        <Input
          value={inputValue}
          onChange={handleChange}
          Icon={<BsPersonCircle className="icon" />}
          placeholder={"Entrez votre prénom "}
          required
        />
        <button className="button-with-icon">
          <span>Accéder à mon espace</span>
          <IoChevronForwardOutline className="icon" />
        </button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
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
  .button-with-icon {
    width: 100%;
    border: 1px solid #ff9f1b;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    font-family: Arial, Helvetica, sans-serif;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #ff9f1b;

    &:hover:not(:disabled) {
      background-color: white;
      color: #ff9f1b;
      border: 1px solid #ff9f1b;
      transition: all 200ms ease-out;
    }
    &:active {
      color: white;
      background-color: #ff9f1b;
      border: 1px solid #ff9f1b;
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .icon {
      display: flex;
      font-size: 15px;
      margin-left: 10px;
      justify-content: center;
      align-items: center;
    }
  }
`;
