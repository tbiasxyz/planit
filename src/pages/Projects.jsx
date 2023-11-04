import styled from "styled-components";
import ProjectsNavbar from "../features/projects/ProjectsNavbar";
import { Outlet } from "react-router-dom";

const StyledProjects = styled.div`
  display: flex;
  gap: 1rem;
`;

function Projects() {
  return (
    <StyledProjects>
      <ProjectsNavbar />
      <Outlet />
    </StyledProjects>
  );
}

export default Projects;
