import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  ${(props) =>
    props.direction === "horizontal" &&
    css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      & > div {
        display: flex;
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
