import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
      />
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
