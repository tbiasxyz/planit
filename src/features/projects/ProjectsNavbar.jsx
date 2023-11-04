import styled from "styled-components";
import Heading from "../../ui/Heading";
import ProjectsList from "./ProjectsList";
import Button from "../../ui/Button";
import { HiPlus } from "react-icons/hi2";

const StyledProjectsNavbar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 15rem;
  background-color: var(--color-white);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  height: 50rem;
  max-height: 50rem;
  overflow: auto;
  padding: 2rem 1rem;
`;

function ProjectsNavbar() {
  return (
    <StyledProjectsNavbar>
      <Heading as="h3">Projects</Heading>
      <Button withIcon variation="accentHover">
        <HiPlus />
        <span>New Project</span>
      </Button>
      <ProjectsList />
    </StyledProjectsNavbar>
  );
}

export default ProjectsNavbar;
