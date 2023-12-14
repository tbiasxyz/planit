import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Heading from "../ui/Heading";
import styled from "styled-components";
import { useProjects } from "../features/projects/useProjects";
import Spinner from "../ui/Spinner";
import ProjectUsers from "../features/projects/ProjectUsers";
import { useCurrentUser } from "../features/authentication/useCurrentUser";
import Breadcrumb from "../ui/Breadcrumb";
import {
  HiMiniUserPlus,
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlinePencilSquare,
} from "react-icons/hi2";

import IconButton from "../ui/IconButton";
import ProjectToggleView from "../features/projects/ProjectToggleView";
import ProjectOverview from "../features/projects/ProjectOverview";
import ProjectDashboard from "../features/projects/ProjectDashboard";
import ProjectTasks from "../features/projects/ProjectTasks";

const StyledProject = styled.div`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  height: 50rem;
  width: 100%;
  padding: 1rem 1.75rem;
  display: flex;
  flex-direction: column;
`;

const ProjectHeader = styled.div`
  display: flex;
  background-color: var(--color-accent-500);
  padding: 1rem;
  border-radius: var(--border-radius-md);
  height: 10rem;
  align-items: flex-end;
  justify-content: space-between;
  margin: 1rem 0 1.2rem 0;
  box-shadow: var(--shadow-md);
  position: relative;
`;

const HeaderDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 0.5rem;
`;

const ProjectLogo = styled.span.attrs({ role: "img" })`
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  & svg {
    font-size: 2.125rem;
    color: var(--color-accent-500);
  }
`;

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const EditProjectButton = styled.div`
  position: absolute;
  top: 10%;
  right: 1.5%;
  cursor: pointer;
  background-color: var(--color-accent-700);
  padding: 0.75rem;
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    color: var(--color-white);
    font-size: 1.25rem;
  }
  &:hover {
    background-color: var(--color-accent-900);
  }
`;

const ProjectMain = styled.div`
  display: flex;
  flex-direction: column;
`;

function Project() {
  const navigate = useNavigate();
  const { projectID } = useParams();
  const { projects, isPending: isLoadingProjects } = useProjects();
  const { user, isPending: isLoadingUser } = useCurrentUser();
  const userData = user.user_metadata;
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view") || "overview";

  if (isLoadingProjects || isLoadingUser) return <Spinner size="page" />;

  const openedProject = projects.find((project) => project.id === +projectID);
  console.log(openedProject);

  return (
    <>
      <StyledProject>
        <Breadcrumb currentPart={openedProject.name} />
        <ProjectHeader>
          <HeaderDescription>
            <ProjectLogo>
              {openedProject.solo ? <HiOutlineUser /> : <HiOutlineUserGroup />}
            </ProjectLogo>
            <Heading as="h2">{openedProject.name}</Heading>
            <EditProjectButton
              onClick={() =>
                navigate("/app/projects/project/edit", { state: openedProject })
              }
            >
              <HiOutlinePencilSquare />
            </EditProjectButton>
          </HeaderDescription>
          <HeaderMain>
            <ProjectUsers>
              <img src={userData.avatar} alt="user" />
              {!openedProject.solo && (
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="user"
                />
              )}
            </ProjectUsers>
            <IconButton>
              <HiMiniUserPlus />
              <span>Invite</span>
            </IconButton>
          </HeaderMain>
        </ProjectHeader>

        <ProjectMain>
          <ProjectToggleView />
          {view === "overview" && <ProjectOverview project={openedProject} />}
          {view === "dashboard" && <ProjectDashboard project={openedProject} />}
          {view === "tasks" && <ProjectTasks project={openedProject} />}
        </ProjectMain>
      </StyledProject>
    </>
  );
}

export default Project;
