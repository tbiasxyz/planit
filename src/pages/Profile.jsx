import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const StyledProfile = styled.div`
  display: grid;
  grid-template-columns: 35rem 1fr;
  height: 100%;
  overflow-x: hidden;
`;

const User = styled.div`
  background-color: var(--color-accent-200);
  padding: 6rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserImage = styled.img`
  height: 27rem;
  width: 24.75rem;
`;

const Username = styled.h3`
  font-size: 3.25rem;
  color: var(--color-accent-700);
  font-family: "Merriweather", serif;
  margin-top: 2rem;
`;

const UserInfoContainer = styled.div`
  background-color: var(--color-grey-0);
`;

const UserInfo = styled.div`
  position: relative;
  background-color: var(--color-accent-200);
  min-height: 25rem;
  height: auto;
  width: 85%;
  top: 25%;
  left: 20%;
  padding: 4rem;
  display: flex;
  flex-direction: column;

  & h3 {
    position: absolute;
    color: var(--color-accent-700);
    font-size: 3rem;
    font-family: "Merriweather", serif;
    font-weight: 700;
    top: -7%;
    left: 20%;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  & div {
    display: flex;
    align-items: flex-start;
    gap: 4rem;

    & span {
      font-family: "Merriweather", serif;
    }

    & span:first-child {
      width: 7rem;
      color: var(--color-grey-500);
      font-size: 1.1rem;
    }

    & span:nth-child(2) {
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--color-grey-700);
    }

    & p {
      font-weight: 500;
      font-size: 1.25rem;
      color: var(--color-grey-700);
      width: 70%;
      font-family: "Merriweather", serif;
    }
  }
`;

const Socials = styled.div`
  background-color: var(--color-accent-100);
  border-radius: var(--border-radius-sm);
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 20rem;
  & a {
    text-decoration: none;
    padding: 0.5rem;
    border-radius: var(--border-radius-md);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
    & svg {
      font-size: 1.5rem;
      color: var(--color-accent-700);
    }

    &:hover {
      background-color: var(--color-accent-200);
    }
  }
`;

function Profile() {
  return (
    <StyledProfile>
      <User>
        <UserImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        <Username>Diane Franklin</Username>
      </User>
      <UserInfoContainer>
        <UserInfo>
          <h3>User profile</h3>
          <Description>
            <div>
              <span>Full Name</span>
              <span>Diane Franklin</span>
            </div>
            <div>
              <span>Location</span>
              <span>New York, USA</span>
            </div>
            <div>
              <span>E-Mail</span>
              <span>franklin.diane@gmail.com</span>
            </div>
            <div>
              <span>Description</span>
              <p>Fulltime developer at Google</p>
            </div>
          </Description>

          <Socials>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </Socials>
        </UserInfo>
      </UserInfoContainer>
    </StyledProfile>
  );
}

export default Profile;
