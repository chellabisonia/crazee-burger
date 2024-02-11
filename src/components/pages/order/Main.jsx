import styled from "styled-components";
import {theme} from "../../../theme/index";
export default function Main() {
  return <MainStyled></MainStyled>;
}

const MainStyled = styled.div`
  background:${theme.colors.background_white};
  flex: 1; // or I can also use this: height: calc(95vh - 10vh);
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px #00000033 inset;

`;
