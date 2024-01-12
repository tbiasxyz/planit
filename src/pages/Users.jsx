import { useSearchParams } from "react-router-dom";
import { useAllUsers } from "../features/authentication/useAllUsers";

import Row from "../ui/Row";
import Toggle from "../ui/Toggle";
import UsersList from "../features/users/UsersList";
import UsersTable from "../features/users/UsersTable";
import Spinner from "../ui/Spinner";

function Users() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view") || "table";
  const { users, isLoadingUsers } = useAllUsers();
  return (
    <>
      <Row>
        <Toggle
          field="view"
          options={[
            { tag: "Table", value: "table" },
            { tag: "List", value: "list" },
          ]}
        />
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
