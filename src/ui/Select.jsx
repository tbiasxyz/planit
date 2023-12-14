import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { HiChevronDown } from "react-icons/hi2";
import Searchbar from "./Searchbar";
import { capitalize } from "lodash";
import { useClickOutside } from "../hooks/useClickOutside";

const StyledSelect = styled.div`
  padding: 0.75rem 0.875rem;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  border: none;
  box-shadow: var(--shadow-md);
  outline: none;
  border-radius: var(--border-radius-md);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  & svg {
    font-size: 1.25rem;
  }
`;

const Options = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background-color: var(--color-grey-50);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  padding: 1rem;
  max-height: 200px;
  overflow: auto;
  width: 100%;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--color-accent-100);
    border-radius: var(--border-radius-md);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-accent-700);
    border-radius: var(--border-radius-md);
  }
`;

const Option = styled.span`
  padding: 8px;
  color: var(--color-accent-700);
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease;
  position: relative;
  &:hover {
    background-color: var(--color-accent-50);
  }
  ${(props) =>
    props.isSelected &&
    css`
      background-color: var(--color-accent-50);
    `}
`;

function Select({
  register,
  options,
  id,
  setValue,
  type,
  setSearchValue,
  defaultValue,
  required = true,
}) {
  const [selectedValue, setSelectedValue] = useState(() => {
    if (!defaultValue) return "";
    if (typeof defaultValue === "object" || typeof defaultValue === "string")
      return defaultValue;
    if (typeof defaultValue === "boolean") return options[0];
  });

  const ref = useClickOutside(() => {
    setIsOpen(false);
  });

  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(option) {
    setSelectedValue(option);
    setValue(id, option);
  }

  useEffect(() => {
    setValue(id, selectedValue.value);
  }, [setValue, id, selectedValue]);

  return (
    <>
      <StyledSelect
        role="select"
        onClick={() => {
          if (!isOpen) setIsOpen(true);
          else return;
        }}
        type={type}
      >
        <span onClick={() => setIsOpen((s) => !s)}>
          {selectedValue.tag || capitalize(selectedValue)}
        </span>
        <HiChevronDown />
        {isOpen && (
          <Options type={type} ref={ref}>
            {type === "search" && <Searchbar setSearchValue={setSearchValue} />}
            {options.map((option, i) => (
              <Option
                role="option"
                key={i}
                onClick={() => {
                  handleSelect(option);
                  setIsOpen((s) => !s);
                  if (setSearchValue) setSearchValue("");
                }}
                isSelected={option.value === selectedValue.value}
              >
                {option.tag}
              </Option>
            ))}
          </Options>
        )}
      </StyledSelect>
      <input
        type="hidden"
        id={id}
        name={id}
        {...register?.(id, required && { required: "This field is required" })}
      />
    </>
  );
}

export default Select;
