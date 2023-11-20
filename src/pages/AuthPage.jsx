import styled from "styled-components";
import SignupForm2 from "../features/authentication/SignupForm-2";
import { Outlet } from "react-router-dom";

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

function AuthPage() {
  return (
    <StyledAuthPage>
      <AuthContainer>
        <Outlet />
        <AuthImageContainer>
          <AuthImage src="https://dr.savee-cdn.com/things/6/3/d5deb8a89950b3b8c276df.webp" />
        </AuthImageContainer>
      </AuthContainer>
    </StyledAuthPage>
  );
}

export default AuthPage;
