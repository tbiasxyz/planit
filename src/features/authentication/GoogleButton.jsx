import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";

const StyledGoogleButton = styled.button`
  padding: 0.8rem 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-grey-50);
  color: var(--color-grey-500);
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  transition: 0.3s ease;

  & span {
    font-weight: 500;
    font-size: 1.125rem;
  }

  & div {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius-md);
    transition: 0.3s ease;
  }

  & svg {
    font-size: 1.25rem;
  }

  &:hover {
    background-color: var(--color-accent-50);

    & div {
      background-color: var(--color-accent-200);
    }
  }
`;

function GoogleButton({ children, onClick }) {
  return (
    <StyledGoogleButton type="button" onClick={onClick}>
      <div>
        <FcGoogle />
      </div>
      <span>{children}</span>
    </StyledGoogleButton>
  );
}

export default GoogleButton;
