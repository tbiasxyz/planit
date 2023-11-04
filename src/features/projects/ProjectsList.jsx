import styled from "styled-components";
import Project from "./Project";

const StyledProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
`;

function ProjectsList() {
  return (
    <StyledProjectsList>
      {Array.from({ length: 30 }).map((item, i) => (
        <Project key={i} />
      ))}
    </StyledProjectsList>
  );
}

export default ProjectsList;
