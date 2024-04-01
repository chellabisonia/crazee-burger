import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { theme } from "../../../theme/index";
import { useState } from "react";
// import OrderContext from "../../../../src/context/OrderContext";
import OrderContext from "../../../context/OrderContext.jsx";

export default function OrderPage() {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAddTabSelected, setIsAddTabSelected] = useState(true);
  const [isEditTabSelected, setIsEditTabSelected] = useState(false);
  //comportement
const orderContextValue = {isModeAdmin, setIsModeAdmin,isCollapsed, setIsCollapsed, isAddTabSelected, setIsAddTabSelected, isEditTabSelected, setIsEditTabSelected};
  //affichage

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar  />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}
const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
