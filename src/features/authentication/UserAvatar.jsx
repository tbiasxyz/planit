import styled from "styled-components";
import Dots from "../../ui/Dots";

const StyledUserAvatar = styled.div`
  display: grid;
  grid-template-columns: 5rem auto 2rem;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  padding: 0.8rem 1rem;
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
  font-weight: 700;
  color: var(--color-grey-500);
  display: flex;
  align-items: center;
  font-size: 1.125rem;
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
  return (
    <StyledUserAvatar>
      <AvatarContainer>
        <Avatar
          src="https://global.discourse-cdn.com/monzo/original/3X/3/a/3aae66f7a0128dc50c915d2687d1abad85de36f3.jpeg"
          alt="User's avatar"
        />
      </AvatarContainer>
      <User>
        <Username>John Smith</Username>
        <Nationality>
          <span>United States</span>
          <img src="https://flagcdn.com/us.svg" alt="Flag of Czech Republic" />
        </Nationality>
      </User>
      <Dots right="5" top="50" type="avatar" />
    </StyledUserAvatar>
  );
}

export default UserAvatar;
