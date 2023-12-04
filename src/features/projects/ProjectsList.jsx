import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import Heading from "../../ui/Heading";
import { useCurrentUser } from "../authentication/useCurrentUser";
import Spinner from "../../ui/Spinner";

const StyledProjectsView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
`;

function ProjectsList({ projects }) {
  const projectsCount = projects.length;
  const { user, isPending } = useCurrentUser();
  const userData = user.user_metadata;
  if (isPending) return <Spinner size="page" />;
  return projectsCount ? (
    <StyledProjectsView>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} user={userData} />
      ))}
    </StyledProjectsView>
  ) : (
    <Heading as="h4">Start by creating new project</Heading>
  );
}

export default ProjectsList;
