import styled from "styled-components";
import Icon from "./Icon";
import { useThemeMode } from "../context/ThemeModeContext";
import {
  HiOutlineMoon,
  HiOutlineSun,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";
import Modal from "./Modal";
import ModalConfirm from "./ModalConfirm";
import { useSignOut } from "../features/authentication/useSignOut";

const StyledAppHeader = styled.header`
  background-color: var(--color-grey-0);
  grid-column: 2 / -1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem;
  border-bottom: 1px solid var(--color-grey-50);
`;

const Icons = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

function AppHeader() {
  const { isDarkThemeMode, toggleThemeMode } = useThemeMode();
  const { signOut, isSigningOut } = useSignOut();
  return (
    <StyledAppHeader>
      <Modal>
        <Icons>
          <Icon size="large" onClick={toggleThemeMode}>
            {isDarkThemeMode ? <HiOutlineSun /> : <HiOutlineMoon />}
          </Icon>
          <Modal.Open opens="signout">
            <Icon size="large">
              <HiArrowRightOnRectangle />
            </Icon>
          </Modal.Open>
          <Modal.Window name="signout">
            <ModalConfirm
              action="Sign out"
              onConfirm={signOut}
              isLoading={isSigningOut}
            />
          </Modal.Window>
        </Icons>
      </Modal>
    </StyledAppHeader>
  );
}

export default AppHeader;
