import { useState } from "react";
import styled from "styled-components";
import { fakeMenu } from "../../../../fakeData/fakeMenu";

export default function Menu() {

const [menu, setMenu] = useState(fakeMenu);




  return <MenuStyled></MenuStyled>;
}

const MenuStyled = styled.div`
  background: purple;
`;
