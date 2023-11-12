import {
  HiMiniEllipsisHorizontal,
  HiMiniEllipsisVertical,
} from "react-icons/hi2";
import styled, { css } from "styled-components";

const types = {
  project: css`
    &:hover svg {
      color: var(--color-accent-700);
    }
  `,
  avatar: css`
    &:hover svg {
      background-color: var(--color-accent-200);
    }
  `,
};

const StyledDots = styled.div`
  position: absolute;
  z-index: 10;
  right: ${(props) => props.right}%;
  top: ${(props) => props.top}%;
  transform: translate(-${(props) => props.right}%, -${(props) => props.top}%);
  cursor: cursor;

  & svg {
    font-size: 2rem;
    border-radius: 50%;
    padding: 0.25rem;
    transition: 0.1s ease;
    color: var(--color-grey-700);
  }

  ${(props) => types[props.type]}
`;

function Dots({ top, right, direction }) {
  return (
    <StyledDots top={top} right={right}>
      {direction === "vertical" && <HiMiniEllipsisVertical />}
      {direction === "horizontal" && <HiMiniEllipsisHorizontal />}
    </StyledDots>
  );
}

Dots.defaultProps = {
  top: 0,
  right: 0,
  direction: "vertical",
};

export default Dots;
