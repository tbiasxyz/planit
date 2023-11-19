import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";

const SignupLayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-grey-50);
`;

function Signup() {
  return (
    <SignupLayoutContainer>
      <SignupForm />
    </SignupLayoutContainer>
  );
}

export default Signup;
