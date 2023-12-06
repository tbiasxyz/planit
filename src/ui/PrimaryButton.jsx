import styled from "styled-components";

const PrimaryButton = styled.button`
  padding: 0.875rem 1.5rem;
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
  &:has(svg) {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    & svg {
      font-size: 1.5rem;
    }
  }
`;

export default PrimaryButton;
