import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";

import LinkButton from "../ui/LinkButton";

const StyledAuthPage = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-grey-50);
`;

const AuthContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 40rem;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  max-width: 90rem;
  width: 90rem;
  max-height: 52rem;
  height: 52rem;
`;

const AuthMain = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
  padding: 1.5rem 0;
`;

const AuthImageContainer = styled.div`
  max-height: 52rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
`;

const AuthImage = styled.img`
  height: 100%;
  max-height: 100%;
  width: 100%;
  object-fit: contain;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  background-color: var(--color-accent-50);
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  border-radius: var(--border-radius-md);
`;

function AuthPage() {
  const location = useLocation();
  const { pathname } = location;
  const currentAuthPage = pathname.split("/").at(-1);
  return (
    <StyledAuthPage>
      <AuthContainer>
        <AuthMain>
          <NavButtons>
            <LinkButton
              role="button"
              to="/"
              variation="accentHover"
              cursor={true}
            >
              Homepage
            </LinkButton>
            <LinkButton
              role="button"
              to="/auth/login"
              variation="accentHover"
              cursor={true}
              active={currentAuthPage === "login"}
            >
              Login
            </LinkButton>
            <LinkButton
              role="button"
              to="/auth/signup"
              variation="accentHover"
              cursor={true}
              active={currentAuthPage === "signup"}
            >
              Sign Up
            </LinkButton>
          </NavButtons>

          <Outlet />
        </AuthMain>
        <AuthImageContainer>
          <AuthImage src="https://dr.savee-cdn.com/things/6/3/d5deb8a89950b3b8c276df.webp" />
        </AuthImageContainer>
      </AuthContainer>
    </StyledAuthPage>
  );
}

export default AuthPage;
