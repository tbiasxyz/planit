import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Heading from "../ui/Heading";
import PrimaryButton from "../ui/PrimaryButton";

const StyledPageNotFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <StyledPageNotFound>
      <Heading as="h3">Page not found</Heading>
      <PrimaryButton onClick={() => navigate("/app/dashboard")}>
        Go back
      </PrimaryButton>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
