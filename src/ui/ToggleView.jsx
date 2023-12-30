import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledToggleView = styled.div`
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  box-shadow: var(--shadow-md);
`;

const ToggleViewButton = styled.button`
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

function ToggleView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentView = searchParams.get("view") || "table";

  function handleSetView(view) {
    searchParams.set("view", view);
    setSearchParams(searchParams);
  }

  return (
    <StyledToggleView>
      <ToggleViewButton
        onClick={() => handleSetView("table")}
        active={currentView === "table"}
        disabled={currentView === "table"}
      >
        Table
      </ToggleViewButton>
      <ToggleViewButton
        onClick={() => handleSetView("list")}
        active={currentView === "list"}
        disabled={currentView === "list"}
      >
        List
      </ToggleViewButton>
    </StyledToggleView>
  );
}

export default ToggleView;
