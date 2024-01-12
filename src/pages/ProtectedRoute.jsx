import styled from "styled-components";
import { useCurrentUser } from "../features/authentication/useCurrentUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Spinner from "../ui/Spinner";

const StyledProtectedRoute = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-50);
`;

function ProtectedRoute({ children }) {
  const { user, isPending } = useCurrentUser();
  const navigate = useNavigate();
  const isAuthenticated = user?.role === "authenticated";

  //   navigate cant be called in top level code => useEffect
  //   !authenticated => no access
  useEffect(() => {
    if (!isAuthenticated && !isPending) navigate("/auth/login");
  }, [navigate, isAuthenticated, isPending]);

  if (isPending)
    return (
      <StyledProtectedRoute>
        <Spinner type="page" />
      </StyledProtectedRoute>
    );
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
