import styled from "styled-components";

const StyledAppHeader = styled.header`
  background-color: var(--color-grey-0);
  grid-column: 2 / -1;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-grey-50);
`;

function AppHeader() {
  return <StyledAppHeader>Header</StyledAppHeader>;
}

export default AppHeader;
