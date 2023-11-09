import styled from "styled-components";

const StyledProjectProgressBar = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ProgressBar = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  height: 0.875rem;
  max-width: 125px;
  &::-webkit-progress-bar {
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-md);
  }

  &::-webkit-progress-value {
    background-color: var(--color-accent-700);
    border-radius: var(--border-radius-md);
  }
`;

function ProjectProgressBar({ progress }) {
  return (
    <StyledProjectProgressBar>
      <ProgressBar max={100} value={progress} />
      <span>{progress}&nbsp;%</span>
    </StyledProjectProgressBar>
  );
}

export default ProjectProgressBar;
