import styled from "styled-components";
import { useCurrentUser } from "./useCurrentUser";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import Modal from "../../ui/Modal";
import Menu from "../../ui/Menu";
import {
  HiArrowRightOnRectangle,
  HiOutlinePencilSquare,
  HiOutlineUser,
} from "react-icons/hi2";
import { useSignOut } from "./useSignOut";
import ModalConfirm from "../../ui/ModalConfirm";

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

const Dots = styled.div`
  align-self: center;
`;

function UserAvatar() {
  const navigate = useNavigate();
  const { signOut, isSigningOut } = useSignOut();
  const { user, isPending } = useCurrentUser();
  if (isPending) return <Spinner />;
  const userData = user.user_metadata;
  console.log(userData);
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
      <Dots>
        <Modal>
          <Menu>
            <Menu.Open openId="user" />
            <Menu.List openId="user">
              <Menu.ListItem
                icon={<HiOutlineUser />}
                onClick={() => navigate("/app/profile")}
              >
                Profile
              </Menu.ListItem>
              <Menu.ListItem
                icon={<HiOutlinePencilSquare />}
                onClick={() => navigate("/app/profile/edit")}
              >
                Edit
              </Menu.ListItem>
              <Modal.Open opens="signout">
                <Menu.ListItem icon={<HiArrowRightOnRectangle />}>
                  Sign out
                </Menu.ListItem>
              </Modal.Open>
            </Menu.List>
          </Menu>
          <Modal.Window name="signout">
            <ModalConfirm
              action="Sign out"
              onConfirm={signOut}
              isLoading={isSigningOut}
            />
          </Modal.Window>
        </Modal>
      </Dots>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
