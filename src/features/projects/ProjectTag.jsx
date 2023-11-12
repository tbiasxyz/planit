import styled from "styled-components";

const StyledProjectTag = styled.div`
  display: flex;
  gap: 1rem;
  background-color: var(--color-${(props) => props.color}-100);
  padding: 0.25rem;
  width: 80%;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-md);
`;

const StatusTag = styled.span`
  color: var(--color-${(props) => props.color}-700);
  font-weight: 500;
  font-size: 1rem;
`;

const StatusDot = styled.span`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: var(--color-${(props) => props.color}-700);
`;

function ProjectTag({ tag, color, type }) {
  return (
    <StyledProjectTag color={color}>
      {type === "status" && <StatusDot color={color} />}
      <StatusTag color={color}>{tag}</StatusTag>
    </StyledProjectTag>
  );
}

export default ProjectTag;
