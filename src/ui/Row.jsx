import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  position: relative;
  ${(props) =>
    props.direction === "horizontal" &&
    css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.direction === "vertical" &&
    css`
      flex-direction: column;
      gap: 2.4rem;
    `}

    & div:not(:first-child) {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

Row.defaultProps = {
  direction: "horizontal",
};

export default Row;
