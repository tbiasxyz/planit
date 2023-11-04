import { HiMiniEllipsisVertical } from "react-icons/hi2";
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
  right: ${(props) => props.right}%;
  top: ${(props) => props.top}%;
  transform: translateY(-50%);
  cursor: pointer;

  & svg {
    font-size: 2rem;
    border-radius: 50%;
    padding: 0.25rem;
    transition: 0.1s ease;
  }

  ${(props) => types[props.type]}
`;

function Dots({ top, right }) {
  return (
    <StyledDots top={top} right={right}>
      <HiMiniEllipsisVertical />
    </StyledDots>
  );
}

Dots.defaultProps = {
  top: 0,
  right: 0,
};

export default Dots;
