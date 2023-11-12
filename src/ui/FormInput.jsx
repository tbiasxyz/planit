import styled from "styled-components";

const FormInput = styled.input`
  padding: 0.75rem 0.875rem;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  border: none;
  box-shadow: var(--shadow-md);
  outline: none;
  border-radius: var(--border-radius-md);
  font-size: 1.1rem;

  &::placeholder {
    color: var(--color-grey-100);
    font-size: 0.975rem;
  }
`;

export default FormInput;
