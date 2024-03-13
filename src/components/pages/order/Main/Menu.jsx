import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((produit) => {
        return( <div className="produit">
          <div className="image">
            <img src={produit.imageSource} alt={produit.title} />
          </div>

          <div className="info-text">
            <div className="title">{produit.title}</div>
            <div className="description">
              <div className="price">{produit.price}</div>
              <button className="add-button">Ajouter</button>
            </div>
          </div>
          </div>)
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  grid-column-gap: 50px;
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px #00000033 inset;

  .produit {
    background: white;
    color: black;
    width: 240px;
    height: 330px;
    box-shadow: -8px 8px 20px rgb(0 0 0 / 20%);
    border-radius: 15px;
  }
  .image{
   border: 1px solid fuchsia; 
   height:auto;
   width:100px;
   object-fit: contain;
  img{
    width: 100%;
    height: 100%;
  }
  
  }

`;
