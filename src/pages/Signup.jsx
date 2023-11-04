import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const SignupLayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Signup() {
  return (
    <SignupLayoutContainer>
      <Row>
        <Heading as="h2">Sign Up</Heading>
      </Row>
      <SignupForm />
    </SignupLayoutContainer>
  );
}

export default Signup;
