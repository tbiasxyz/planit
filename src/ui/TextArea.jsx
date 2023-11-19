import styled, { css } from "styled-components";

const TextArea = styled.textarea.attrs({
  placeholder: "Short project description",
})`
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-sm);
  height: 100px;
  padding: 1rem;
  font-weight: 500;
  font-size: 1rem;
  resize: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  border: 2px solid transparent;
  transition: 0.2s ease;

  &:focus {
    border: 2px solid var(--color-accent-700);
  }

  ${(props) =>
    props.gridArea &&
    css`
      grid-column: ${props.gridArea.column};
      grid-row: ${props.gridArea.row};
    `}
`;

export default TextArea;
