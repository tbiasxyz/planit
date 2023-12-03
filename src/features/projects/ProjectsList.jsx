import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const StyledProjectsView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
`;

function ProjectsList({ projects }) {
  return (
    <StyledProjectsView>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </StyledProjectsView>
  );
}

export default ProjectsList;
