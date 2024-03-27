import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">Admin</div>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  border: 3px solid green;
  background: ${theme.colors.background_white};
  /* flex: 1; // or I can also use this: height: calc(95vh - 10vh); */
  height:calc(95vh - 10vh);
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: grid;
  /* overflow-y: scroll; */
  //this code will be used for Basket
  /* grid-template-columns: 25% 1fr; */
  /* .basket {
    background: pink;
  } */
  .menu-and-admin {
    position: relative;
    overflow-y:hidden ;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    .admin {
      background: red;
      position: absolute;
      height: 250px;
      bottom: 0;
      left: 0;
      right: 0;
   
    }
  }
`;
