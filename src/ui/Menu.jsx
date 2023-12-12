import { createContext, useContext, useState } from "react";
import styled, { css } from "styled-components";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useClickOutside } from "../hooks/useClickOutside";
import { createPortal } from "react-dom";

const StyledOpen = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.4rem;
  border-radius: 50%;
  & svg {
    font-size: 1.5rem;
  }
  &:hover {
    background-color: var(--color-grey-0-transparent);
  }
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  position: fixed;
  z-index: 1000;
  ${(props) =>
    props.position &&
    css`
      left: ${props.position.x}px;
      top: ${props.position.y}px;
    `}
`;

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: var(--color-grey-700);
  font-size: 1rem;
  &:hover {
    background-color: var(--color-accent-500);
    color: var(--color-white);
  }
  &:first-child {
    border-top-left-radius: var(--border-radius-md);
    border-top-right-radius: var(--border-radius-md);
  }
  &:last-child {
    border-bottom-left-radius: var(--border-radius-md);
    border-bottom-right-radius: var(--border-radius-md);
  }
`;

const MenuContext = createContext();

function Menu({ children }) {
  const [openMenuId, setOpenMenuId] = useState("");
  const [openMenuPosition, setOpenMenuPosition] = useState(null);
  const openMenu = (id, position) => {
    setOpenMenuId(id);
    setOpenMenuPosition(position);
  };
  const closeMenu = () => setOpenMenuId("");

  return (
    <MenuContext.Provider
      value={{
        openMenuId,
        openMenu,
        closeMenu,
        openMenuPosition,
        setOpenMenuPosition,
        setOpenMenuId,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function Open({ openId }) {
  const { openMenu, closeMenu, openMenuId } = useContext(MenuContext);

  function handleOpen(e) {
    e.stopPropagation();
    const domRect = e.target.closest("div").getBoundingClientRect();
    const newPosition = {
      y: domRect.y + 36,
      x: domRect.x - domRect.width - 66,
    };
    openMenuId !== openId ? openMenu(openId, newPosition) : closeMenu();
  }
  return (
    <StyledOpen onClick={handleOpen}>
      <HiEllipsisVertical />
    </StyledOpen>
  );
}

function List({ children, openId }) {
  const { openMenuId, closeMenu, openMenuPosition } = useContext(MenuContext);
  const ref = useClickOutside(closeMenu, false);

  if (openMenuId !== openId) return null;
  return createPortal(
    <StyledList ref={ref} position={openMenuPosition}>
      {children}
    </StyledList>,
    document.body
  );
}

function ListItem({ icon, children }) {
  return (
    <StyledListItem>
      {icon}
      <span>{children}</span>
    </StyledListItem>
  );
}

Menu.Open = Open;
Menu.List = List;
Menu.ListItem = ListItem;

export default Menu;
