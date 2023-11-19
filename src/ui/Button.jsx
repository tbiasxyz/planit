import styled, { css } from "styled-components";

const variations = {
  accent: css`
    background-color: var(--color-accent-200);
    color: var(--color-accent-700);
  `,
  accentHover: css`
    color: var(--color-accent-700);
    background-color: var(--color-accent-50);

    &:hover {
      background-color: var(--color-accent-200);
    }
  `,
  icon: css`
    background-color: var(--color-accent-700);
    & svg {
      width: 1.75rem;
      height: 1.75rem;
      color: var(--color-grey-0);
    }
  `,

  form: css`
    background-color: var(--color-accent-700);
    color: var(--color-white);
  `,
};

const sizes = {
  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
  `,
  icon: css`
    padding: 0.5rem 0.75rem;
  `,
};

const types = {
  normal: css`
    border-radius: var(--border-radius-md);
  `,
  rounded: css`
    border-radius: var(--border-radius-rounded);
  `,
  icon: css`
    border-radius: var(--border-radius-sm);
  `,
};

const Button = styled.button`
  text-decoration: none;
  border: none;
  transition: 0.5s ease;

  ${(props) => variations[props.variation]}
  ${(props) => sizes[props.size]}
  ${(props) => types[props.type]}

  ${(props) =>
    props.cursor === "false" &&
    css`
      cursor: none;
    `}
  ${(props) =>
    props.cursor === "true" &&
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
    `}
`;

Button.defaultProps = {
  variation: "accent",
  size: "medium",
  type: "normal",
  cursor: "true",
  withIcon: false,
};

export default Button;
