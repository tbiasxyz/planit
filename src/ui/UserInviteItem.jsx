import styled from "styled-components";
import Heading from "./Heading";
import PrimaryButton from "./PrimaryButton";

const StyledUserInviteItem = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
  align-items: center;
  background-color: var(--color-grey-50);
  padding: 0.25rem 0.375rem;
  border-radius: var(--border-radius-sm);
  &:hover {
    background-color: var(--color-grey-100);
  }
  max-width: 400px;
  & button {
    margin-left: auto;
    padding: 0.75rem 1rem;
  }
`;

const UserAvatar = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
`;

const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  & span {
    color: var(--color-grey-200);
  }
`;

function UserInviteItem({ user }) {
  console.log(user);
  const { email, raw_user_meta_data: userData } = user;
  return (
    <StyledUserInviteItem>
      <UserAvatar src={userData.avatar} />
      <UserDescription>
        <Heading as="h5">
          {userData.firstName} {userData.lastName}
        </Heading>
        <span>{email}</span>
      </UserDescription>
      <PrimaryButton>Invite</PrimaryButton>
    </StyledUserInviteItem>
  );
}

export default UserInviteItem;
