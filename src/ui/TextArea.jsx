import styled, { css } from "styled-components";

const TextArea = styled.textarea`
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  height: 100px;
  padding: 1rem;
  font-weight: 500;
  font-size: 1rem;
  resize: none;
  outline: none;
  font-family: "Poppins", sans-serif;

  ${(props) =>
    props.gridArea &&
    css`
      grid-column: ${props.gridArea.column};
      grid-row: ${props.gridArea.row};
    `}
`;

export default TextArea;
