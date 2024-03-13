import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";

export default function Menu() {

const [menu, setMenu] = useState(fakeMenu2);




  return <MenuStyled>
{menu.map((produit)=>{
return <div className="produit">{produit.title}</div>


})}
  </MenuStyled>;
}

const MenuStyled = styled.div`
  background: #F5F5F7;;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  grid-column-gap: 50px;
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items:center ;
  overflow-y: scroll;
  .produit{
  background: white;
  color: black;
  width: 240px;
  height: 330px;
  box-shadow: -8px 8px 20px  rgb(0 0 0 / 20%); 

  }
`;
