import styled from "styled-components";

import LoginForm from "../features/authentication/LoginForm";
import Row from "../ui/Row";
import Heading from "../ui/Heading";

const LoginLayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Login() {
  return (
    <LoginLayoutContainer>
      <Row>
        <Heading as="h2">Login</Heading>
      </Row>
      <LoginForm />
    </LoginLayoutContainer>
  );
}

export default Login;
