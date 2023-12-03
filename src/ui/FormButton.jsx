import styled, { css } from "styled-components";

const FormButton = styled.button`
  ${(props) =>
    props.size === "normal" &&
    css`
      padding: 1rem 2rem;
    `}
  ${(props) =>
    props.size === "small" &&
    css`
      padding: 0.5rem 1rem;
    `}
  background-color: var(--color-accent-500);
  color: var(--color-white);
  font-size: 1.125rem;
  font-weight: 500;
  outline: none;
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    background-color: var(--color-accent-700);
  }
`;

FormButton.defaultProps = {
  size: "normal",
};

export default FormButton;
