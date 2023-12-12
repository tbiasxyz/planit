import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      /* color: var(--color-grey-700); */
      background-image: linear-gradient(
        to top left,
        var(--color-accent-100) 10%,
        var(--color-accent-500) 42%,
        var(--color-accent-700) 48%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 18rem;
      height: auto;
      text-transform: uppercase;
      text-align: center;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.5rem;
      color: var(--color-white);
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      color: var(--color-grey-500);
      font-size: 1.875rem;
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-grey-700);
    `}
    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 1rem;
      color: var(--color-grey-500);
    `}
`;

export default Heading;
