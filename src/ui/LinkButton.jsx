import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const variations = {
  accent: css`
    background-color: var(--color-accent-200);
    color: var(--color-accent-700);
  `,
  accentHover: css`
    color: var(--color-accent-700);

    &:hover {
      background-color: var(--color-accent-200);
    }
  `,
};

const sizes = {
  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
  `,

  large: css`
    padding: 1rem 3rem;
    font-size: 1rem;
    font-weight: 500;
  `,
};

const types = {
  normal: css`
    border-radius: var(--border-radius-md);
  `,
  rounded: css`
    border-radius: var(--border-radius-rounded);
  `,
};

const LinkButton = styled(Link)`
  text-decoration: none;
  border: none;
  transition: 0.5s ease;

  ${(props) => variations[props.variation]}
  ${(props) => sizes[props.size]}
  ${(props) => types[props.type]}

  ${(props) =>
    props.cursor === false &&
    css`
      cursor: none;
    `}
  ${(props) =>
    props.cursor === true &&
    css`
      cursor: pointer;
    `}

    ${(props) =>
    props.withIcon &&
    css`
      display: flex;
      gap: 0.5rem;
      align-items: center;
      & svg {
        transition: 0.3s ease;
        font-size: 1.5rem;
      }
      &:hover svg {
        transform: translateX(0.5rem);
      }
    `}
`;

LinkButton.defaultProps = {
  variation: "accent",
  size: "medium",
  type: "normal",
  cursor: true,
};

export default LinkButton;
