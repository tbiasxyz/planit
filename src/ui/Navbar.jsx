import {
  HiCalendarDays,
  HiChartBar,
  HiChatBubbleLeftEllipsis,
  HiCog6Tooth,
  HiMiniUserGroup,
  HiRectangleStack,
  HiUser,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Divider from "./Divider";

const StyledNavbar = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 1rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    padding: 0.75rem 1.25rem;
    border-right: 4px solid transparent;
    transition: 0.2s ease;
    color: var(--color-grey-100);
    font-weight: 500;
    font-size: 1.125rem;
  }

  &:active,
  &:hover,
  &.active:link,
  &.active:visited {
    border-right: 4px solid var(--color-accent-500);
    color: var(--color-accent-500);
    font-weight: 700;
  }

  & svg {
    height: 2rem;
    width: 2rem;
    color: var(--color-grey-100);
    transition: 0.2s ease;
  }

  &:hover svg,
  &:active svg,
  &.active:visited svg,
  &.active:link svg {
    color: var(--color-accent-500);
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <li>
        <StyledNavLink to="dashboard">
          <HiChartBar />
          <span>Dashboard</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="projects">
          <HiRectangleStack />
          <span>Projects</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="calendar">
          <HiCalendarDays />
          <span>Calendar</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="messages">
          <HiChatBubbleLeftEllipsis />
          <span>Messages</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="users">
          <HiMiniUserGroup />
          <span>Users</span>
        </StyledNavLink>
      </li>
      <Divider />
      <li>
        <StyledNavLink to="profile">
          <HiUser />
          <span>My Profile</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="settings">
          <HiCog6Tooth />
          <span>Settings</span>
        </StyledNavLink>
      </li>
    </StyledNavbar>
  );
}

export default Navbar;
