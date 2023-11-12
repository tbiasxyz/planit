import styled, { css, keyframes } from "styled-components";

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.span`
  ${(props) =>
    props.size === "normal" &&
    css`
      width: 48px;
      height: 48px;
      border: 5px solid var(--color-accent-700);
    `}

  ${(props) =>
    props.size === "page" &&
    css`
      position: absolute;
      width: 7rem;
      height: 7rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 8px solid var(--color-accent-700);
    `}

  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;

  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

Spinner.defaultProps = {
  size: "normal",
};

export default Spinner;
