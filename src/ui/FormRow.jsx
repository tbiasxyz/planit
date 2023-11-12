import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem;
  ${(props) =>
    props.gridArea &&
    css`
      grid-column: ${props.gridArea.column};
      grid-row: ${props.gridArea.row};
    `}
`;

const InputLabel = styled.label`
  font-weight: 700;
  font-size: 1.175rem;
  color: var(--color-grey-700);
  margin-bottom: 0.25rem;
`;

const ErrorMessage = styled.span`
  color: var(--color-high-700);
`;

function FormRow({ children, inputLabel, error, gridArea }) {
  return (
    <StyledFormRow gridArea={gridArea}>
      {inputLabel && <InputLabel>{inputLabel}</InputLabel>}
      {children}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledFormRow>
  );
}

export default FormRow;
