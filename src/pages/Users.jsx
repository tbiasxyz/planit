import { useSearchParams } from "react-router-dom";
import Row from "../ui/Row";
import ToggleView from "../ui/ToggleView";
import UsersList from "../features/users/UsersList";
import UsersTable from "../features/users/UsersTable";
import Spinner from "../ui/Spinner";
import { useAllUsers } from "../features/authentication/useAllUsers";

function Users() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view") || "table";
  const { users, isLoadingUsers } = useAllUsers();
  return (
    <>
      <Row>
        <ToggleView />
      </Row>
      {isLoadingUsers && <Spinner size="page" />}
      {!isLoadingUsers && (
        <>
          {view === "table" && <UsersTable users={users} />}
          {view === "list" && <UsersList users={users} />}
        </>
      )}
    </>
  );
}

export default Users;
