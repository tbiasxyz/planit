import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from "date-fns";
import styled, { css } from "styled-components";
import Heading from "./Heading";
import Row from "./Row";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useClickOutside } from "../hooks/useClickOutside";

const StyledDatePicker = styled.div`
  background-color: var(--color-grey-700);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: var(--border-radius-md);
  & h5 {
    padding: 0.5rem;
  }

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  & svg {
    color: var(--color-grey-0);
    font-size: 1.25rem;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      color: var(--color-grey-100);
    }
  }
`;

const Calendar = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0.5rem;
  column-gap: 0.75rem;

  & span {
    background-color: var(--color-accent-700);
    color: var(--color-white);
    display: inline-block;
    text-align: center;
    padding: 0.25rem 0.5rem;
    border-radius: var(--border-radius-md);
    font-weight: 500;
  }
`;

const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0.5rem;
  column-gap: 0.75rem;
  row-gap: 0.5rem;
`;

const Day = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: 500;
  font-size: 1rem;
  grid-column-start: ${(props) =>
    props.weekDay === 0 ? "7" : props.weekDay}; // 0 = sunday

  ${(props) =>
    !props.isSelected &&
    css`
      &:hover {
        background-color: var(--color-grey-0-transparent);
        color: var(--color-grey-50);
      }
    `}

  ${(props) =>
    props.isSameMonth &&
    css`
      color: var(--color-grey-0);
    `}

  ${(props) =>
    !props.isSameMonth &&
    css`
      color: var(--color-grey-200);
    `}

    ${(props) =>
    props.isToday &&
    props.isSelected &&
    css`
      background-color: var(--color-accent-700);
      color: var(--color-white);
    `}

    ${(props) =>
    props.isToday &&
    !props.isSelected &&
    css`
      color: var(--color-accent-700);
    `}

    ${(props) =>
    !props.isToday &&
    props.isSelected &&
    css`
      background-color: var(--color-accent-500);
      color: var(--color-white);
    `}
`;

function DatePicker({ setSelectedFormDate, close }) {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const newDays = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function handlePreviousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }
  function handleNextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  const ref = useClickOutside(close);

  return (
    <StyledDatePicker ref={ref}>
      <Row>
        <Heading as="h5">{format(firstDayCurrentMonth, "MMMM yyyy")}</Heading>
        <Buttons>
          <HiChevronLeft role="button" onClick={handlePreviousMonth} />
          <HiChevronRight role="button" onClick={handleNextMonth} />
        </Buttons>
      </Row>

      <Calendar>
        <WeekDays>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
          <span>S</span>
        </WeekDays>
        <CalendarDays>
          {newDays.map((day, i) => (
            <Day
              key={i}
              onClick={(e) => {
                e.preventDefault();
                setSelectedDay(day);
                setSelectedFormDate(format(day, "MMMM-dd-yyyy"));
              }}
              isToday={isToday(day)}
              isSameMonth={isSameMonth(day, today)}
              isSelected={isEqual(day, selectedDay)}
              weekDay={getDay(day)}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </Day>
          ))}
        </CalendarDays>
      </Calendar>
    </StyledDatePicker>
  );
}

export default DatePicker;
