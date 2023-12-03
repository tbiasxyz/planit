import styled, { css } from "styled-components";

const StyledIcon = styled.span`
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
  cursor: pointer;
  ${(props) =>
    props.inputIcon &&
    css`
      position: absolute;
      top: 50%;
      right: 2%;
      transform: translate(-2%, -50%);
    `}
  & svg {
    ${(props) =>
      props.size === "normal" &&
      css`
        font-size: 1.25rem;
      `}
    ${(props) =>
      props.size === "large" &&
      css`
        font-size: 1.75rem;
      `}
    color: var(--color-grey-500);
  }
  &:hover {
    background-color: var(--color-accent-50);
    & svg {
      color: var(--color-accent-700);
    }
  }
`;

StyledIcon.defaultProps = {
  size: "normal",
  inputIcon: false,
};

function Icon({ children, onClick, inputIcon, size }) {
  return (
    <StyledIcon onClick={() => onClick?.()} inputIcon={inputIcon} size={size}>
      {children}
    </StyledIcon>
  );
}

export default Icon;
