import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineFolderOpen,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { useCurrentUser } from "../features/authentication/useCurrentUser";

const StyledNavbar = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1rem 0 2rem 2rem;
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
    border-right: 4px solid transparent;
  }

  &:active,
  &:hover,
  &.active:link,
  &.active:visited {
    color: var(--color-accent-700);
    border-right: 4px solid var(--color-accent-700);
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
  const { user } = useCurrentUser();
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
      {/* <li>
        <StyledNavLink to="messages">
          <HiOutlineChatBubbleLeftEllipsis />
          <span>Messages</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="teams">
          <HiOutlineUserGroup />
          <span>Teams</span>
        </StyledNavLink>
      </li> */}
      <li>
        <StyledNavLink to="users">
          <HiOutlineUserGroup />
          <span>Users</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={`profile/${user?.id}`}>
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
