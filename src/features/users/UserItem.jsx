import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../ui/Heading";

const StyledUserItem = styled(Link)`
  background-color: var(--color-grey-0);
  padding: 1.25rem;
  min-width: 400px;
  border-radius: var(--border-radius-sm);
  display: flex;
  box-shadow: var(--shadow-md);
  gap: 1rem;
  &:hover {
    background-color: var(--color-grey-0-transparent);
  }
  &:hover > img {
    transform: scale(1.05);
  }
`;

const UserAvatar = styled.img`
  display: block;
  height: 100%;
  width: 30%;
  border-radius: var(--border-radius-sm);
  object-fit: cover;
  transition: 0.2s ease;
`;

const Description = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 70%;
  width: 70%;
  /* background-color: var(--color-grey-0-transparent); */
  border-radius: var(--border-radius-sm);
  & h4 {
    word-break: break-all;
  }
  & span {
    color: var(--color-grey-500);
  }
`;

function UserItem({ user }) {
  const userData = user.raw_user_meta_data;
  return (
    <StyledUserItem to={`/app/profile/${user.id}`}>
      <UserAvatar src={userData.avatar} />
      <Description>
        <Heading as="h4">
          {userData.firstName} {userData.lastName}
        </Heading>
        <span>{user.email}</span>
      </Description>
    </StyledUserItem>
  );
}

export default UserItem;
