import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useCurrentUser } from "../features/authentication/useCurrentUser";
import { HiOutlinePencil } from "react-icons/hi2";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";

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
  object-fit: cover;
`;

const Username = styled.h3`
  font-size: 3.25rem;
  color: var(--color-accent-700);
  font-family: "Merriweather", serif;
  margin-top: 2rem;
  text-align: center;
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
      /* color: var(--color-grey-700); */
      color: var(--color-black);
      font-size: 1.1rem;
    }

    & span:nth-child(2) {
      font-size: 1.25rem;
      font-weight: 500;
      /* color: var(--color-grey-200); */
      color: var(--color-black);
    }

    & p {
      font-weight: 500;
      font-size: 1.25rem;
      color: var(--color-black);
      /* color: var(--color-grey-200); */
      width: 70%;
      font-family: "Merriweather", serif;
    }
  }
`;

const Socials = styled.div`
  background-color: var(--color-accent-100);
  border-radius: var(--border-radius-sm);
  margin: 2rem 0 0 11rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-self: flex-start;
  max-width: 20rem;
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

const EditButton = styled.button`
  position: absolute;
  background-color: var(--color-accent-500);
  top: 3%;
  right: 8%;
  padding: 0.5rem;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    background-color: var(--color-accent-700);
  }

  & svg {
    color: var(--color-white);
    font-size: 1.1rem;
  }
`;

function Profile() {
  const { user, isPending } = useCurrentUser();
  const navigate = useNavigate();

  if (isPending) return <Spinner size="page" />;
  const { email } = user;
  const userData = user.user_metadata;

  return (
    <StyledProfile>
      <User>
        <UserImage src={userData.avatar} />
        <Username>
          {userData.firstName} {userData.lastName}
        </Username>
      </User>
      <UserInfoContainer>
        <UserInfo>
          <h3>User profile</h3>
          <Description>
            <div>
              <span>Full Name</span>
              <span>
                {userData.firstName} {userData.lastName}
              </span>
            </div>
            <div>
              <span>Location</span>
              <span>{userData.country}</span>
            </div>
            <div>
              <span>E-Mail</span>
              <span>{email}</span>
            </div>
            <div>
              <span>Description</span>
              <p>{userData.description}</p>
            </div>
          </Description>

          {(userData.socials.instagram ||
            userData.socials.twitter ||
            userData.socials.linkedin ||
            userData.socials.facebook) && (
            <Socials>
              {userData.socials.instagram && (
                <a
                  href={userData.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              )}
              {userData.socials.twitter && (
                <a
                  href={userData.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              )}

              {userData.socials.linkedin && (
                <a
                  href={userData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              )}

              {userData.socials.facebook && (
                <a
                  href={userData.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
              )}
            </Socials>
          )}

          <EditButton onClick={() => navigate("edit")}>
            <HiOutlinePencil />
          </EditButton>
        </UserInfo>
      </UserInfoContainer>
    </StyledProfile>
  );
}

export default Profile;
