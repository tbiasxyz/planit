import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledToggle = styled.div`
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem;
  box-shadow: var(--shadow-md);
  width: fit-content;
  height: fit-content;
`;

const ToggleButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  color: var(--color-grey-700);
  font-size: 1.1rem;
  font-weight: 500;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-accent-500);
      color: var(--color-white);
      cursor: not-allowed;
    `}
  &:hover {
    background-color: var(--color-accent-500);
    color: var(--color-white);
  }
`;

function Toggle({ options, field, style = {} }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentView = searchParams.get(field) || options[0].value;

  function handleSetView(view) {
    searchParams.set(field, view);
    setSearchParams(searchParams);
  }

  return (
    <StyledToggle style={style}>
      {options.map((option) => (
        <ToggleButton
          key={option.value}
          active={currentView === option.value}
          disabled={currentView === option.value}
          onClick={() => handleSetView(option.value)}
        >
          {option.tag}
        </ToggleButton>
      ))}
    </StyledToggle>
  );
}

export default Toggle;
