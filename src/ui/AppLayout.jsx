import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AppHeader from "./AppHeader";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 5rem 1fr;
  min-height: 100vh;
`;

const Main = styled.main`
  position: relative;
  background-color: var(--color-grey-50);
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  padding: 1rem 1.5rem;
  height: 100%;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <AppHeader />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
