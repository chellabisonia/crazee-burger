import styled from "styled-components";

export default function TextInput({ value, onChange, Icon, ...restProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...restProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 18px 24px 18px 24px;
  margin-bottom: 18px;
  border-radius: 5px;

  .icon {
    font-size: 15px;
    color: gray;
    margin-right: 8px;
  }
  input {
    border: none;
    color: #17161a;
    font-size: 15px;
    background: white;
    width: 100%;
  }
  &::placeholder {
    background: white;
    color: lightgray;
  }
`;
