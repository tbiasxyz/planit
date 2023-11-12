import { useState } from "react";
import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi2";

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
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background-color: var(--color-grey-50);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  padding: 1rem;
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
`;

function Select({ register, options, id, setValue }) {
  const [selectedValue, setSelectedValue] = useState(options.at(0));
  const [isOpen, setIsOpen] = useState(false);

  const selectOptions = options.filter((option) => option !== selectedValue);

  function handleSelect(option) {
    setSelectedValue(option);
    setValue(id, option);
  }

  return (
    <>
      <StyledSelect role="select" onClick={() => setIsOpen((s) => !s)}>
        <span>{selectedValue}</span>
        <HiChevronDown />
        {isOpen && (
          <Options>
            {selectOptions.map((option, i) => (
              <Option
                role="option"
                key={i}
                onClick={() => handleSelect(option)}
              >
                {option}
              </Option>
            ))}
          </Options>
        )}
      </StyledSelect>
      <input type="hidden" id={id} name={id} {...register(id)} />
    </>
  );
}

export default Select;
