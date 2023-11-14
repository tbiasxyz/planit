import styled from "styled-components";

const StyledUpcomingDates = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  padding: 1rem;
`;

function UpcomingDates() {
  return <StyledUpcomingDates>Upcoming dates</StyledUpcomingDates>;
}

export default UpcomingDates;
