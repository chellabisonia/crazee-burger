import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { IoChevronForwardOutline } from "react-icons/io5";
import TextInput from "./reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from "./reusable-ui/PrimaryButton";

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
        <TextInput
          value={inputValue}
          onChange={handleChange}
          Icon={<BsPersonCircle className="icon" />}
          placeholder={"Entrez votre prénom "}
          required
        />
        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<IoChevronForwardOutline className="icon" />}
        />
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
  .icon {
    display: flex;
    font-size: 15px;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
  }
`;
