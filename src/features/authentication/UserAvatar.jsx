import styled from "styled-components";
import Dots from "../../ui/Dots";
import { useCurrentUser } from "./useCurrentUser";
import Spinner from "../../ui/Spinner";

const StyledUserAvatar = styled.div`
  display: grid;
  grid-template-columns: 5rem auto 2rem;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  padding: 0.5rem 0.6rem;
  margin: 2rem 1.5rem 3rem 1.5rem;
  position: relative;
`;

const AvatarContainer = styled.div`
  position: relative;
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
  &::after {
    content: "";
    position: absolute;
    bottom: 8%;
    right: 20%;
    width: 12px;
    height: 12px;
    background-color: var(--color-online);
    border-radius: 50%;
    border: 3px solid var(--color-grey-0);
  }
`;

const Avatar = styled.img`
  border-radius: var(--border-radius-rounded);
  height: 3.5rem;
  width: 3.5rem;
  object-fit: cover;
  position: relative;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: center;
`;

const Username = styled.span`
  font-weight: 500;
  color: var(--color-grey-500);
  display: flex;
  align-items: center;
  font-size: 1.05rem;
  word-break: break-all;
`;

const Nationality = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  & span {
    color: var(--color-grey-300);
    font-size: 0.875rem;
    font-weight: 500;
  }
  & img {
    height: 0.8rem;
    width: 1.2rem;
  }
`;

function UserAvatar() {
  const { user } = useCurrentUser();
  const userData = user.user_metadata;
  console.log(userData);
  // if (isPending) return <Spinner />;
  return (
    <StyledUserAvatar>
      <AvatarContainer>
        <Avatar
          src={userData.avatar}
          alt={`Avatar of ${userData.firstName} ${userData.lastName}`}
        />
      </AvatarContainer>
      <User>
        <Username>
          {userData.firstName} {userData.lastName}
        </Username>
        <Nationality>
          <span>{userData.country}</span>
          <img src={userData.countryFlag} alt={`Flag of ${userData.country}`} />
        </Nationality>
      </User>
      <Dots right="2" top="50" type="avatar" />
    </StyledUserAvatar>
  );
}

export default UserAvatar;
