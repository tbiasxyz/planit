import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const StyledProjectsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function ProjectsList() {
  return (
    <StyledProjectsList>
      {Array.from({ length: 7 }).map((item, i) => (
        <ProjectItem key={i} id={+i + 10} />
      ))}
    </StyledProjectsList>
  );
}

export default ProjectsList;
