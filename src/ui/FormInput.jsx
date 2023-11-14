import styled from "styled-components";

const FormInput = styled.input`
  padding: 0.75rem 0.875rem;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  border: 2px solid transparent;
  box-shadow: var(--shadow-md);
  outline: none;
  border-radius: var(--border-radius-md);
  font-size: 1.1rem;
  transition: 0.2s ease;

  &::placeholder {
    color: var(--color-grey-100);
    font-size: 0.975rem;
  }

  &:focus {
    border: 2px solid var(--color-accent-500);
  }
`;

export default FormInput;
