import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import Navbar from "./Navbar";

const StyledSiderbar = styled.aside`
  background-color: var(--color-grey-0);
  grid-row: 1 / -1;
  border-right: 1px solid var(--color-grey-50);
`;

function Sidebar() {
  return (
    <StyledSiderbar>
      <UserAvatar />
      <Navbar />
    </StyledSiderbar>
  );
}

export default Sidebar;
