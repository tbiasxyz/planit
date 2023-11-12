import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import Heading from "../../ui/Heading";

const StyledProjectsView = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

const StyledProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  /* padding: 0.5rem 1rem; */
`;

const StyledProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: auto;
  padding: 0.5rem;
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
`;

function ProjectsList({ projects }) {
  const activeProjects = projects.filter(
    (project) => project.status.toLowerCase() === "active"
  );
  const futureProjects = projects.filter(
    (project) => project.status.toLowerCase() === "tbd"
  );
  const finishedProjects = projects.filter(
    (project) => project.status.toLowerCase() === "finished"
  );

  return (
    <StyledProjectsView>
      <StyledProjectsSection>
        <Heading as="h3">Active</Heading>
        <StyledProjectsList>
          {activeProjects?.map((project) => (
            <ProjectItem key={project.id} id={project.id} project={project} />
          ))}
        </StyledProjectsList>
      </StyledProjectsSection>

      <StyledProjectsSection>
        <Heading as="h3">Future Projects</Heading>
        <StyledProjectsList>
          {futureProjects?.map((project) => (
            <ProjectItem key={project.id} id={project.id} project={project} />
          ))}
        </StyledProjectsList>
      </StyledProjectsSection>

      <StyledProjectsSection>
        <Heading as="h3">Completed</Heading>
        <StyledProjectsList>
          {finishedProjects?.map((project) => (
            <ProjectItem key={project.id} id={project.id} project={project} />
          ))}
        </StyledProjectsList>
      </StyledProjectsSection>
    </StyledProjectsView>
  );
}

export default ProjectsList;
