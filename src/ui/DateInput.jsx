import styled from "styled-components";
import { HiOutlineTrash } from "react-icons/hi2";
import { useEffect, useState } from "react";

import DatePicker from "./DatePicker";
import Icon from "./Icon";

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
  display: flex;
  justify-content: space-between;
`;

function DateInput({ date, id, setValue, register, required = false }) {
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
        <Icon
          onClick={() => {
            setSelectedFormDate("Unknown");
          }}
        >
          <HiOutlineTrash />
        </Icon>
      </StyledDateInput>
      {isOpen && (
        <DatePicker
          setSelectedFormDate={handleSelectFormDate}
          close={close}
          selectedDate={selectedDate}
        />
      )}
      <input
        type="hidden"
        id={id}
        name={id}
        {...register(id, {
          required: required ? "This field is required" : false,
        })}
      />
    </>
  );
}

export default DateInput;
