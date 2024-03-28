import styled from "styled-components";
import { theme } from "../../theme/index.jsx";
export default function Tab({Icon}) {
  return <TabStyled>
    <div className="icon">{Icon}</div>
    </TabStyled>;
}

const TabStyled = styled.button`
  height: 43px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: relative;
  left: 5%;
  top: 1px;
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  //fonts
  font-size: ${theme.fonts.sizes.P0};
  color: ${theme.colors.greySemiDark};
  //border
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};

  //border-radius
  border-radius: 5px 5px 0px 0px;
  

  :hover{
   
    border-bottom:2px solid ${theme.colors.background_white} ;
  }
.icon{
   display: flex;
}
`;
