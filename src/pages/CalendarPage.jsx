import styled from "styled-components";
import Calendar from "../features/calendar/Calendar";
import UpcomingDates from "../features/calendar/UpcomingDates";

const StyledCalendarPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 25rem;
  column-gap: 3rem;
  height: 100%;
`;

function CalendarPage() {
  return (
    <StyledCalendarPage>
      <Calendar />
      <UpcomingDates />
    </StyledCalendarPage>
  );
}

export default CalendarPage;
