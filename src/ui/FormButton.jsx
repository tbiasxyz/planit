import styled from "styled-components";

const FormButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--color-accent-500);
  color: var(--color-white);
  font-size: 1.125rem;
  font-weight: 500;
  outline: none;
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    background-color: var(--color-accent-700);
  }
`;

export default FormButton;
