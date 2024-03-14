import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1; // or I can also use this: height: calc(95vh - 10vh);
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: grid;
  overflow-y: scroll;
  //this code will be used for Basket
  /* grid-template-columns: 25% 1fr; */
  /* .basket {
    background: pink;
  } */
`;
