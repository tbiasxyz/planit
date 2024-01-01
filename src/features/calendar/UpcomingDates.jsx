import styled from "styled-components";
import UpcomingDate from "./UpcomingDate";
import Heading from "../../ui/Heading";
import { DATES_ITEMS_PER_PAGE } from "../../utils/constants";
import Pagination from "../../ui/Pagination";
import { useUpcomingDates } from "../../hooks/useUpcomingDates";

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
  const { datesToShow, sortedDates } = useUpcomingDates(projects);

  return (
    <StyledUpcomingDates>
      <Heading as="h5">Upcoming dates</Heading>
      {datesToShow.length > 0 ? (
        datesToShow.map((date) => <UpcomingDate data={date} key={date.id} />)
      ) : (
        <p>No upcoming dates</p>
      )}
      {sortedDates.length > DATES_ITEMS_PER_PAGE && (
        <Pagination items={sortedDates} itemsPerPage={DATES_ITEMS_PER_PAGE} />
      )}
    </StyledUpcomingDates>
  );
}

export default UpcomingDates;
