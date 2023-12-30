import { isAfter, isToday, startOfToday } from "date-fns";
import styled from "styled-components";
import UpcomingDate from "./UpcomingDate";
import Heading from "../../ui/Heading";

const StyledUpcomingDates = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  padding: 1rem;
  gap: 1.25rem;
  & p {
    color: var(--color-grey-200);
    font-weight: 500;
    font-size: 1.125rem;
  }
`;

function UpcomingDates({ projects }) {
  const today = startOfToday();
  const startDates = projects
    ?.filter((project) => project.start_date)
    ?.map((project) => ({
      projectId: project.id,
      type: "Start date",
      date: new Date(project.start_date),
    }));
  const dueDates = projects
    ?.filter((project) => project.due_date)
    ?.map((project) => ({
      projectId: project.id,
      type: "Due date",
      date: new Date(project.due_date),
    }));
  const sortedDates = [...dueDates, ...startDates]
    ?.filter((dateObj) => isAfter(dateObj.date, today) || isToday(dateObj.date))
    ?.sort((a, b) => a.date - b.date);
  return (
    <StyledUpcomingDates>
      <Heading as="h5">Upcoming dates</Heading>
      {sortedDates.length > 0 ? (
        sortedDates.map((date) => (
          <UpcomingDate
            date={date}
            project={projects.find((project) => project.id === date.projectId)}
            key={`${date.projectId}-${date.type}`}
          />
        ))
      ) : (
        <p>No upcoming dates</p>
      )}
    </StyledUpcomingDates>
  );
}

export default UpcomingDates;
