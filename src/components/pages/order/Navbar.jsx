import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar() {
  const { username } = useParams();
  return (
    <NavbarStyled>
      <div className="left-side">Left</div>
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;

  .left-side {
    background: purple;
  }
`;
