import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Divider from "./Divider";
import {
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineCog6Tooth,
  HiOutlineFolderOpen,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi2";

const StyledNavbar = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    padding: 0.75rem 1.25rem;
    transition: 0.2s ease;
    color: var(--color-grey-200);
    font-weight: 500;
    font-size: 1.125rem;
    border-radius: 1.25rem;
  }

  &:active,
  &:hover,
  &.active:link,
  &.active:visited {
    box-shadow: var(--shadow-md);
    color: var(--color-accent-700);
    background-color: var(--color-grey-50);
  }

  & svg {
    height: 1.5rem;
    width: 1.5rem;
    color: var(--color-grey-200);
    transition: 0.2s ease;
  }

  &:hover svg,
  &:active svg,
  &.active:visited svg,
  &.active:link svg {
    color: var(--color-accent-700);
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <li>
        <StyledNavLink to="dashboard">
          <HiOutlineChartBar />
          <span>Dashboard</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="projects">
          <HiOutlineFolderOpen />
          <span>Projects</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="calendar">
          <HiOutlineCalendarDays />
          <span>Calendar</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="messages">
          <HiOutlineChatBubbleLeftEllipsis />
          <span>Messages</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="users">
          <HiOutlineUserGroup />
          <span>Users</span>
        </StyledNavLink>
      </li>
      <Divider />
      <li>
        <StyledNavLink to="profile">
          <HiOutlineUser />
          <span>My Profile</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="settings">
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </StyledNavLink>
      </li>
    </StyledNavbar>
  );
}

export default Navbar;
