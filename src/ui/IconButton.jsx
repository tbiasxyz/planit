import styled from "styled-components";

const IconButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  background-color: var(--color-accent-700);
  color: var(--color-white);
  padding: 0.75rem;
  border-radius: var(--border-radius-sm);
  text-decoration: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;

  & svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--color-white);
  }

  &:hover {
    background-color: var(--color-accent-900);
  }
`;

export default IconButton;
