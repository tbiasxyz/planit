import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { HiBars3, HiOutlineSquares2X2 } from "react-icons/hi2";

const StyledToggleView = styled.div`
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem;
  box-shadow: var(--shadow-md);
`;

const ToggleViewButton = styled.button`
  background-color: var(--color-grey-0);
  border: 1px solid transparent;
  padding: 0.25rem;
  transition: 0.2s;
  cursor: pointer;
  border-radius: var(--border-radius-md);

  & svg {
    color: var(--color-grey-700);
    width: 1.5rem;
    height: 1.5rem;
  }
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-accent-200);
      border: 1px solid var(--color-accent-500);
      & svg {
        color: var(--color-accent-700);
      }
    `}
  &:hover {
    background-color: var(--color-accent-200);
    border: 1px solid var(--color-accent-500);
  }
  &:hover svg {
    color: var(--color-accent-700);
  }
`;

function ToggleView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentView = searchParams.get("view") || "list";

  function handleSetView(view) {
    searchParams.set("view", view);
    setSearchParams(searchParams);
  }

  return (
    <StyledToggleView>
      <ToggleViewButton
        onClick={() => handleSetView("list")}
        active={currentView === "list"}
      >
        <HiOutlineSquares2X2 />
      </ToggleViewButton>
      <ToggleViewButton
        onClick={() => handleSetView("table")}
        active={currentView === "table"}
      >
        <HiBars3 />
      </ToggleViewButton>
    </StyledToggleView>
  );
}

export default ToggleView;
