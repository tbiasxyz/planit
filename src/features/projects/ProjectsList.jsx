import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import Heading from "../../ui/Heading";

const StyledProjectsView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
`;

function ProjectsList({ projects }) {
  const projectsCount = projects.length;
  console.log(projectsCount);
  return projectsCount ? (
    <StyledProjectsView>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </StyledProjectsView>
  ) : (
    <Heading as="h4">Start by creating new project</Heading>
  );
}

export default ProjectsList;
