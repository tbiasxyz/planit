import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi2";
import { useEffect, useState } from "react";
import DatePicker from "./DatePicker";

const StyledDateInput = styled.div`
  position: relative;

  padding: 0.75rem 0.875rem;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  border: 2px solid transparent;
  box-shadow: var(--shadow-md);
  outline: none;
  border-radius: var(--border-radius-md);
  font-size: 1.1rem;
  transition: 0.2s ease;
  cursor: pointer;

  & svg {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translate(-5%, -50%);
  }
`;

function DateInput({ date, id, setValue, register }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedFormDate] = useState(date);

  function handleSelectFormDate(day) {
    setSelectedFormDate(day);
    setValue(id, day);
  }

  const close = () => setIsOpen(false);

  useEffect(() => {
    setValue(id, selectedDate !== "Unknown" ? selectedDate : null);
  }, [id, selectedDate, setValue]);

  return (
    <>
      <StyledDateInput onClick={() => setIsOpen((s) => !s)}>
        <span>{selectedDate}</span>
        <HiChevronDown />
      </StyledDateInput>
      {isOpen && (
        <DatePicker setSelectedFormDate={handleSelectFormDate} close={close} />
      )}
      <input type="hidden" id={id} name={id} {...register(id)} />
    </>
  );
}

export default DateInput;
