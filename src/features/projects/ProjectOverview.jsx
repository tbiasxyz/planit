import styled from "styled-components";
import ProjectTag from "./ProjectTag";
import { capitalize } from "lodash";
import { format } from "date-fns";
import { useCurrentUser } from "../authentication/useCurrentUser";
import Spinner from "../../ui/Spinner";

const StyledProjectOverview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & span {
    font-size: 1.1rem;
    color: var(--color-grey-500);
  }

  & img {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
  }
`;

const OverviewPart = styled.div`
  display: flex;
  gap: 1rem;
  align-self: flex-start;
  align-items: center;
  & > span:first-of-type {
    color: var(--color-grey-200);
    font-size: 1rem;
    font-weight: 500;
    align-self: flex-start;
  }
  margin-bottom: 1rem;
  & > span:nth-of-type(2),
  & > time,
  & > p {
    font-size: 1.1rem;
    color: var(--color-grey-500);
    max-width: 40rem;
  }
`;

function ProjectOverview({ project }) {
  const { user, isPending } = useCurrentUser();
  if (isPending) return <Spinner size="page" />;
  const userData = user.user_metadata;
  return (
    <StyledProjectOverview>
      <OverviewPart>
        <span>Creator:</span>
        <UserInfo>
          <span>{`${userData.firstName} ${userData.lastName}`}</span>
          <img
            src={userData.avatar}
            alt={`${userData.firstName} ${userData.lastName} avatar`}
          />
        </UserInfo>
      </OverviewPart>
      <OverviewPart>
        <span>Type:</span>
        <ProjectTag
          size="large"
          color="project"
          tag={capitalize(project.type).replace("-", " ")}
        />
      </OverviewPart>
      <OverviewPart>
        <span>Status:</span>
        <ProjectTag
          size="large"
          color={project.status}
          tag={capitalize(project.status)}
        />
      </OverviewPart>
      <OverviewPart>
        <span>Priority:</span>
        <ProjectTag
          size="large"
          color={project.priority}
          tag={capitalize(project.priority)}
        />
      </OverviewPart>
      <OverviewPart>
        <span>Description:</span>
        <p>{project.description}</p>
      </OverviewPart>
      <OverviewPart>
        <span>Created on:</span>
        <time dateTime={format(new Date(project.created_at), "yyyy-MMM-dd")}>
          {format(new Date(project.created_at), "d MMMM yyyy")}
        </time>
      </OverviewPart>
      <OverviewPart>
        <span>Start date:</span>
        {project.start_date ? (
          <time dateTime={format(new Date(project.start_date), "yyyy-MMM-dd")}>
            {format(new Date(project.start_date), "d MMMM yyyy")}
          </time>
        ) : (
          <span>Uknown</span>
        )}
      </OverviewPart>
      <OverviewPart>
        <span>Due date:</span>
        {project.due_date ? (
          <time dateTime={format(new Date(project.due_date), "yyyy-MMM-dd")}>
            {format(new Date(project.due_date), "d MMMM yyyy")}
          </time>
        ) : (
          <span>Uknown</span>
        )}
      </OverviewPart>
      <OverviewPart>
        <span>Finish date:</span>
        {project.finish_date ? (
          <time dateTime={format(new Date(project.due_date), "yyyy-MMM-dd")}>
            {format(new Date(project.finish_date), "d MMMM yyyy")}
          </time>
        ) : (
          <span>Unknown</span>
        )}
      </OverviewPart>
    </StyledProjectOverview>
  );
}

export default ProjectOverview;
