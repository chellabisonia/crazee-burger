import styled from "styled-components";
export default function Product({ title, price, imageSource }) {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>

      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="price">{price}</div>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  background: white;
  color: black;
  width: 240px;
  height: 330px;
  box-shadow: -8px 8px 20px rgb(0 0 0 / 20%);
  border-radius: 15px;
  display: grid;
  grid-template-rows: 65% 1fr;
  box-sizing: border-box;
  padding: 20px 20px 10px;
  .image {
    border: 1px solid red;
    height: auto;
    width: 100%;
    margin-top: 30px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .info-text{

    border: 1px solid skyblue;
  }
  .description {
    border: 1px solid blue;
  }
`;
