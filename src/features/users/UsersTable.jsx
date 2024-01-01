import styled from "styled-components";
import Heading from "../../ui/Heading";
import Table from "../../ui/Table";
import Pagination from "../../ui/Pagination";
import { format } from "date-fns";
import PrimaryButton from "../../ui/PrimaryButton";
import { useNavigate } from "react-router-dom";

const UserAvatar = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
`;

function UsersTable({ users }) {
  const navigate = useNavigate();
  if (!users.length) return <Heading>No users to show</Heading>;
  return (
    <Table columns="0.15fr 0.45fr 0.45fr 0.4fr 0.4fr 0.15fr">
      <Table.Header>
        <Table.Row>
          <Table.Data>Avatar</Table.Data>
          <Table.Data>Name</Table.Data>
          <Table.Data>E-Mail</Table.Data>
          <Table.Data>Country</Table.Data>
          <Table.Data>Joined</Table.Data>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users.map((user) => {
          const userData = user.raw_user_meta_data;
          return (
            <Table.Row key={user.id}>
              <Table.Data>
                <UserAvatar src={userData.avatar} />
              </Table.Data>
              <Table.Data>
                {userData.firstName} {""}
                {userData.lastName}
              </Table.Data>
              <Table.Data>{user.email}</Table.Data>
              <Table.Data>{userData.country}</Table.Data>
              <Table.Data>
                {format(new Date(user.created_at), "MMMM d, yyyy")}
              </Table.Data>
              <Table.Data>
                <PrimaryButton
                  onClick={() => navigate(`/app/profile/${user.id}`)}
                >
                  Profile
                </PrimaryButton>
              </Table.Data>
            </Table.Row>
          );
        })}
      </Table.Body>
      <Table.Footer>
        <Pagination items={users} />
      </Table.Footer>
    </Table>
  );
}

export default UsersTable;
