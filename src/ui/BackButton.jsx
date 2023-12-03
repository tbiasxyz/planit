import styled from "styled-components";

const BackButton = styled.button`
  padding: 1rem 1.75rem;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: var(--color-accent-500);
  color: var(--color-white);
  font-size: 1.1rem;
  border-radius: var(--border-radius-sm);
  transition: 0.3s ease;
  &:hover {
    background-color: var(--color-accent-700);
  }
`;

export default BackButton;
