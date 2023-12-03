import styled from "styled-components";
import Icon from "./Icon";
import { useThemeMode } from "../context/ThemeModeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const StyledAppHeader = styled.header`
  background-color: var(--color-grey-0);
  grid-column: 2 / -1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem;
  border-bottom: 1px solid var(--color-grey-50);
`;

function AppHeader() {
  const { isDarkThemeMode, toggleThemeMode } = useThemeMode();
  return (
    <StyledAppHeader>
      <Icon size="large" onClick={toggleThemeMode}>
        {isDarkThemeMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Icon>
    </StyledAppHeader>
  );
}

export default AppHeader;
