import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, ...restProps }) {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...restProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: ${theme.borderRadius.round};
  padding: 18px 24px 18px 24px;
  margin-bottom: 18px;

  .icon {
    font-size: ${theme.fonts.sizes.SM};
    color: ${theme.colors.greySemiDark};
    margin-right: 8px;
  }
  input {
    border: none;
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.sizes.SM};
    background: white;
    width: 100%;

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
