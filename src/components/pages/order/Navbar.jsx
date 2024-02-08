import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const { username } = useParams();
  return (
    <NavbarStyled>
      <div className="left-side">Left</div>
      <div className="right-side">
        <h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  
  .right-side {
    font-size: 5px;
    background: pink;
  }
  .left-side {
    background: purple;
  }
`;
