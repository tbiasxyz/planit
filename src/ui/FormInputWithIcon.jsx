import styled from "styled-components";

const StyledFormInputWithIcon = styled.div`
  position: relative;
  & input {
    width: 100%;
  }
`;

function InputWithIcon({ children }) {
  return <StyledFormInputWithIcon>{children}</StyledFormInputWithIcon>;
}

export default InputWithIcon;
