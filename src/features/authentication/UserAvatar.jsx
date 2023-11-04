import styled from "styled-components";
import Dots from "../../ui/Dots";

const StyledUserAvatar = styled.div`
  display: grid;
  grid-template-columns: 5rem auto 2rem;
  background-color: var(--color-accent-50);
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
    border: 3px solid var(--color-white);
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
  color: var(--color-accent-700);
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
    color: var(--color-accent-500);
    font-weight: 500;
    font-size: 0.875rem;
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
        <Avatar src="images/avatar3.jpg" alt="User avatar" />
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
