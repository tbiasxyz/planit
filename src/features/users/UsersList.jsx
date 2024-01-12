import styled from "styled-components";
import Heading from "../../ui/Heading";
import UserItem from "./UserItem";

const StyledUsersList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

function UsersList({ users }) {
  if (!users.length) return <Heading as="h4">No projects to show</Heading>;
  return (
    <StyledUsersList>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </StyledUsersList>
  );
}

export default UsersList;
