import styled from "styled-components";
import { useCurrentUser } from "../authentication/useCurrentUser";

import ProjectItem from "./ProjectItem";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";

const StyledProjectsView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
`;

function ProjectsList({ projects }) {
  const projectsCount = projects.length;
  const { user, isPending } = useCurrentUser();
  if (isPending) return <Spinner size="page" />;
  const userData = user.user_metadata;
  return projectsCount ? (
    <StyledProjectsView>
      {projects?.map((project) => (
        <ProjectItem project={project} key={project.id} user={userData} />
      ))}
    </StyledProjectsView>
  ) : (
    <Heading as="h4">No projects to show</Heading>
  );
}

export default ProjectsList;
