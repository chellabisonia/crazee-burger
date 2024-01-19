import { useState } from "react";
export default function LoginPage() {
  //state
  const [inputValue, setInputValue] = useState("");
  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };
  const handleChange = (event) => {
    const valueAfterChange = event.target.value;
    setInputValue(valueAfterChange);
  };
  //affichage

  return (
    <div>
      <h1>Bienvenue chez nous!</h1>
      <br />
      <h2>Connectez-vous</h2>

      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom..."
          required
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}
