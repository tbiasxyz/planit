import styled, { css } from "styled-components";
import { useAccentColor } from "../context/AccentColorContext";

const StyledAccentColor = styled.button`
  background-color: ${(props) =>
    `var(--color-accent-${props.color}-preview-500)`};
  outline: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      `var(--color-accent-${props.color}-preview-700)`};
  }
  ${(props) =>
    props.isActive
      ? css`
          border: 2px solid var(--color-grey-700);
        `
      : css`
          border: 2px solid transparent;
        `}
`;

function AccentColor({ color }) {
  const { toggleAccentColor, accentColor } = useAccentColor();
  return (
    <StyledAccentColor
      color={color}
      onClick={() => toggleAccentColor(color)}
      isActive={accentColor === color}
    />
  );
}

export default AccentColor;
