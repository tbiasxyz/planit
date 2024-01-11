import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 1rem 0;
  ${(props) =>
    props.direction === "horizontal" &&
    css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      & > div:nth-of-type(2) {
        display: flex;
        gap: 1rem;
      }
    `}
  ${(props) =>
    props.direction === "vertical" &&
    css`
      flex-direction: column;
      gap: 2.4rem;
    `}
`;

Row.defaultProps = {
  direction: "horizontal",
};

export default Row;
