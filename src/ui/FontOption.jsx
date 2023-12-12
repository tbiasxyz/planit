import styled, { css } from "styled-components";
import { useFont } from "../context/FontContext";

const StyledFontOption = styled.div.attrs({ role: "button" })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  font-family: ${(props) => props.font}, sans-serif;
  height: 100%;
  width: 8rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: var(--border-radius-md);
  &:hover {
    background-color: var(--color-accent-500);
    & span,
    p {
      color: var(--color-white);
    }
  }
  ${(props) =>
    props.isSelected &&
    css`
      background-color: var(--color-accent-500);
      & span,
      p {
        color: var(--color-white);
      }
    `}
`;

const FontPreview = styled.span`
  font-size: 2rem;
  color: var(--color-grey-500);
  height: 3rem;
  display: flex;
  align-items: center;
`;
const FontName = styled.p`
  color: var(--color-grey-500);
  height: 2rem;
  display: flex;
  align-items: center;
`;

function FontOption({ font }) {
  const { font: activeFont, toggleFont } = useFont();
  return (
    <StyledFontOption
      font={font}
      isSelected={activeFont === font}
      onClick={() => toggleFont(font)}
    >
      <FontPreview>Aa</FontPreview>
      <FontName>{font}</FontName>
    </StyledFontOption>
  );
}

export default FontOption;
