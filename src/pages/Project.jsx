import { useParams } from "react-router-dom";
import Heading from "../ui/Heading";
import styled from "styled-components";

const StyledProject = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  height: 50rem;
  width: 90%;
  padding: 2rem 3rem;
`;

function Project() {
  const { projectId } = useParams();
  console.log(projectId);
  return (
    <StyledProject>
      <Heading as="h2">Project #{projectId}</Heading>
    </StyledProject>
  );
}

export default Project;
