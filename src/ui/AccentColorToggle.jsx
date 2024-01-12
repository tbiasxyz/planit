import styled from "styled-components";

import AccentColor from "./AccentColor";

const AccentColors = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0 0.5rem;
`;

function AccentColorToggle() {
  return (
    <AccentColors>
      <AccentColor color="purple" />
      <AccentColor color="blue" />
      <AccentColor color="red" />
      <AccentColor color="orange" />
      <AccentColor color="green" />
      {/* <AccentColor color="black" /> */}
    </AccentColors>
  );
}

export default AccentColorToggle;
