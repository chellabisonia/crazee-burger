import styled from "styled-components";
export default function Product({title, price, imageSource}) {
  return <ProductStyled>
            <div className="image">
              <img src={imageSource} alt={title} />
            </div>

            <div className="info-text">
              <div className="description">
                <div className="title">{title}</div>
                <div className="price">{price}</div>
                <button className="add-button">Ajouter</button>
              </div>
            </div>
          

  </ProductStyled>;
}

const ProductStyled = styled.div`
    background: white;
    color: black;
    width: 240px;
    height: 330px;
    box-shadow: -8px 8px 20px rgb(0 0 0 / 20%);
    border-radius: 15px;
  
  .image {
    border: 1px solid fuchsia;
    height: auto;
    width: 100px;
   
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .description{
    border: 1px solid fuchsia;
  }
  `