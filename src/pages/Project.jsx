import { useParams } from "react-router-dom";
import Heading from "../ui/Heading";
import styled from "styled-components";
import { useProjects } from "../features/projects/useProjects";
import Spinner from "../ui/Spinner";
import ProjectUsers from "../features/projects/ProjectUsers";
import { useCurrentUser } from "../features/authentication/useCurrentUser";
import Breadcrumb from "../ui/BreadCrumb";
import Row from "../ui/Row";
import { format } from "date-fns";
import {
  HiOutlinePlus,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import IconButton from "../ui/IconButton";

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
    font-size: 2rem;
    color: var(--color-accent-500);
  }
`;

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const HeaderPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--color-white);
  & span:first-of-type {
    font-weight: 700;
  }
  & span:last-of-type {
    font-weight: 300;
  }
`;

function Project() {
  const { projectID } = useParams();
  const { projects, isPending: isLoadingProjects } = useProjects();
  const { user, isPending: isLoadingUser } = useCurrentUser();
  const userData = user.user_metadata;

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
          </HeaderDescription>
          <HeaderMain>
            {/* <HeaderPart>
                <span>Created</span>
                <span>
                  {format(new Date(openedProject.created_at), "MMM dd, yyyy")}
                </span>
              </HeaderPart> */}
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
              <HiOutlinePlus />
              <span>Invite member</span>
            </IconButton>
          </HeaderMain>
        </ProjectHeader>
      </StyledProject>
    </>
  );
}

export default Project;
