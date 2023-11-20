import styled from "styled-components";
import LinkButton from "./LinkButton";

const StyledLandingHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  width: 100%;
  border-radius: var(--border-radius-md);
  justify-content: center;
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 1.2rem;
  background-color: var(--color-accent-50);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
`;

function LandingHeader() {
  return (
    <StyledLandingHeader>
      <StyledButtons>
        <LinkButton
          role="button"
          to="/login"
          variation="accentHover"
          cursor={false}
        >
          Login
        </LinkButton>
        <LinkButton
          role="button"
          to="/signup"
          variation="accentHover"
          cursor={false}
        >
          Sign Up
        </LinkButton>
      </StyledButtons>
    </StyledLandingHeader>
  );
}

export default LandingHeader;
