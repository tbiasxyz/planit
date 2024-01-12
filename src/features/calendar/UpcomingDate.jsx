import { useNavigate } from "react-router-dom";
import { capitalize } from "lodash";
import { HiOutlineClock } from "react-icons/hi2";
import { format } from "date-fns";
import styled from "styled-components";

import ProjectTag from "../projects/ProjectTag";

const StyledUpcomingDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  justify-content: center;
  background-color: var(--color-grey-50);
  color: var(--color-grey-500);
  padding: 1rem 1.25rem;
  border-radius: var(--border-radius-sm);
  &:hover {
    background-color: var(--color-grey-0-transparent);
  }
`;

const ProjectTitle = styled.span`
  color: var(--color-accent-500);
  font-weight: 500;
  font-size: 1.25rem;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  & div {
    max-width: 9rem;
  }
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & svg {
    font-size: 1.25rem;
  }
  & p {
    font-size: 1rem;
    color: var(--color-grey-500);
    & span {
      font-style: italic;
    }
  }
`;

function UpcomingDate({ data }) {
  const navigate = useNavigate();
  return (
    <StyledUpcomingDate
      onClick={() => navigate(`/app/projects/project/${data.projectId}`)}
    >
      <ProjectTitle>{data.title}</ProjectTitle>
      <ProjectInfo>
        <ProjectTag
          tag={`${capitalize(data.priority)} priority`}
          color={data.priority}
        />
        <ProjectTag tag={capitalize(data.status)} color={data.status} />
      </ProjectInfo>
      <Date>
        <HiOutlineClock />
        <p>
          {data.field}: <span>{format(data.date, "MMMM d, yyyy")}</span>
        </p>
      </Date>
    </StyledUpcomingDate>
  );
}

export default UpcomingDate;
