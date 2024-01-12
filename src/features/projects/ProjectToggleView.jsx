import styled, { css } from "styled-components";
import { useSearchParams } from "react-router-dom";

const StyledProjectToggleView = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-50);
  align-self: flex-start;
  margin-bottom: 1.5rem;
`;

const ToggleButton = styled.button`
  outline: none;
  border: none;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  font-size: 1.125rem;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: var(--color-accent-500);
    color: var(--color-white);
  }

  ${(props) =>
    !props.isCurrent &&
    css`
      background-color: transparent;
      color: var(--color-grey-500);
    `}

  ${(props) =>
    props.isCurrent &&
    css`
      background-color: var(--color-accent-500);
      color: var(--color-white);
    `}
`;

function ProjectToggleView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentView = searchParams.get("view") || "overview";

  function handleSetView(view) {
    searchParams.set("view", view);
    setSearchParams(searchParams);
  }

  return (
    <StyledProjectToggleView>
      <ToggleButton
        isCurrent={currentView === "overview"}
        onClick={() => handleSetView("overview")}
      >
        Overview
      </ToggleButton>
      <ToggleButton
        isCurrent={currentView === "tasks"}
        onClick={() => handleSetView("tasks")}
      >
        Tasks
      </ToggleButton>
    </StyledProjectToggleView>
  );
}

export default ProjectToggleView;
