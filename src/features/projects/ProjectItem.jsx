import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import Dots from "../../ui/Dots";

const StyledProjectItem = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  height: 3rem;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-white);
  padding: 1rem 2rem;
  box-shadow: var(--shadow-sm);
  position: relative;
  display: flex;
  align-items: center;
  transition: 0.3s ease;

  & svg {
    color: var(--color-accent-500);
  }
  &:hover {
    background-color: var(--color-accent-100);
  }

  &.active {
    background-color: var(--color-accent-100);
  }
`;

function ProjectItem({ id }) {
  return (
    <StyledProjectItem to={`project/${id}`}>
      <Heading as="h4">Project {id}</Heading>
      <Dots top="50" right="5" />
    </StyledProjectItem>
  );
}

export default ProjectItem;
