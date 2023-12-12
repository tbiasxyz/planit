import styled from "styled-components";
import FontOption from "./FontOption";

const StyledFontToggle = styled.div`
  align-items: center;
  padding: 0 0.5rem;
  display: flex;
  gap: 1rem;
`;

function FontToggle() {
  return (
    <StyledFontToggle>
      <FontOption font="Poppins" />
      <FontOption font="Montserrat" />
      <FontOption font="Mukta" />
    </StyledFontToggle>
  );
}

export default FontToggle;
