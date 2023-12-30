import styled from "styled-components";
import Calendar from "../features/calendar/Calendar";
import UpcomingDates from "../features/calendar/UpcomingDates";
import { useProjects } from "../features/projects/useProjects";
import { useCurrentUser } from "../features/authentication/useCurrentUser";
import Spinner from "../ui/Spinner";

const StyledCalendarPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 25rem;
  column-gap: 3rem;
  height: 100%;
`;

function CalendarPage() {
  const { projects, isPending } = useProjects();
  const { user, isPending: isLoadingUser } = useCurrentUser();
  if (isPending || isLoadingUser) return <Spinner size="page" />;
  const filteredProjects = projects?.filter((project) =>
    project?.user_ids?.includes(user.id)
  );
  return (
    <StyledCalendarPage>
      <Calendar projects={filteredProjects} />
      <UpcomingDates projects={filteredProjects} />
    </StyledCalendarPage>
  );
}

export default CalendarPage;
