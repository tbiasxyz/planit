import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  parse,
  startOfMonth,
  startOfToday,
} from "date-fns";
import styled from "styled-components";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { useState } from "react";

const StyledCalendar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.25rem 0.5rem;

  & button {
    border: none;
    background-color: transparent;
    padding: 0.25rem;
    border-radius: 50%;
    transition: 0.15s ease;
    cursor: pointer;
    & svg {
      font-size: 1.25rem;
      color: var(--color-grey-700);
    }
    &:hover {
      background-color: var(--color-accent-700);
      & svg {
        color: var(--color-white);
      }
    }
  }
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 1rem 2rem;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);

  & span {
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-accent-700);
    color: var(--color-white);
    padding: 0.5rem;
    border-radius: var(--border-radius-md);
    font-weight: 500;
    font-size: 1.125rem;
    width: 4rem;
  }
`;

const MonthDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 1rem 2rem;
  column-gap: 1rem;
  row-gap: 0.75rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
`;

const MonthDay = styled.button`
  /* background-color: var(--color-white-0); */
  color: var(--color-grey-700);
  border: none;
  padding: 2.75rem;
  cursor: pointer;
  font-size: 1.25rem;
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-md);

  grid-column-start: ${(props) => (props.weekDay === 0 ? "7" : props.weekDay)};

  position: relative;

  & time {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-accent-500);
    color: var(--color-white);
    border-radius: 50%;
  }
`;

function Calendar() {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [selectedMonth, setSelectedMonth] = useState(format(today, "MMM-yyyy"));
  const firstDaySelectedMonth = parse(selectedMonth, "MMM-yyyy", new Date());

  const monthDays = eachDayOfInterval({
    start: firstDaySelectedMonth,
    end: endOfMonth(firstDaySelectedMonth),
  });

  function handlePreviousMonth() {
    const firstDayPreviousMonth = add(firstDaySelectedMonth, { months: -1 });
    setSelectedMonth(format(firstDayPreviousMonth, "MMM-yyyy"));
  }

  function handleNextMonth() {
    const firstDayNextMonth = add(firstDaySelectedMonth, { months: 1 });
    setSelectedMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <StyledCalendar>
      <Row>
        <Heading as="h4">{format(firstDaySelectedMonth, "MMMM yyyy")}</Heading>
        <Buttons>
          <button onClick={handlePreviousMonth}>
            <HiArrowSmallLeft />
          </button>
          <button onClick={handleNextMonth}>
            <HiArrowSmallRight />
          </button>
        </Buttons>
      </Row>
      <WeekDays>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </WeekDays>
      <MonthDays>
        {monthDays.map((day, i) => (
          <MonthDay
            key={i}
            index={i}
            onClick={() => setSelectedDay(day)}
            weekDay={getDay(day)}
          >
            <time dateTime={format(day, "yyyy-MMM-dd")}>
              {format(day, "d")}
            </time>
          </MonthDay>
        ))}
      </MonthDays>
    </StyledCalendar>
  );
}

export default Calendar;
