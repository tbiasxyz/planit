import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import Heading from "../../ui/Heading";

const StyledProjectsView = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
`;

const StyledProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
`;

const StyledProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: auto;
`;

function ProjectsList() {
  return (
    <StyledProjectsView>
      <StyledProjectsSection>
        <StyledProjectsList>
          <Heading as="h3">In Progress</Heading>
          {Array.from({ length: 3 }).map((item, i) => (
            <ProjectItem key={i} id={i + 10} solo={i % 2 === 0} />
          ))}
        </StyledProjectsList>
      </StyledProjectsSection>

      <StyledProjectsSection>
        <StyledProjectsList>
          <Heading as="h3">Future Projects</Heading>
          {Array.from({ length: 1 }).map((item, i) => (
            <ProjectItem key={i} id={i + 10} solo={i % 2 !== 0} />
          ))}
        </StyledProjectsList>
      </StyledProjectsSection>

      <StyledProjectsSection>
        <StyledProjectsList>
          <Heading as="h3">Completed</Heading>
          {Array.from({ length: 5 }).map((item, i) => (
            <ProjectItem key={i} id={i + 10} solo={i % 2 == 0} />
          ))}
        </StyledProjectsList>
      </StyledProjectsSection>
    </StyledProjectsView>
  );
}

export default ProjectsList;
