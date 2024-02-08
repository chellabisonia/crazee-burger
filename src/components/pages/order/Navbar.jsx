import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const { username } = useParams();
  return (
    <NavbarStyled>
      navbar
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
`;
