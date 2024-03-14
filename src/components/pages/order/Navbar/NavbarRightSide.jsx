import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">Admin button</div> */}
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}
const NavbarRightSideStyled = styled.div`
  align-items: center;
  display: flex;
  padding-right: 50px;
  /* .admin-button {
    background: lightblue;
 
  } */
`;
