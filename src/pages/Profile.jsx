import { HiPencilSquare } from "react-icons/hi2";
import styled from "styled-components";
import Heading from "../ui/Heading";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";

const StyledProfile = styled.div`
  background-color: var(--color-grey-0);
  height: 50rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  position: relative;
`;

const Images = styled.div`
  position: relative;
  width: 100%;
  height: 40%;

  & svg {
    position: absolute;
    top: 7%;
    right: 3%;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--color-grey-0);
    color: var(--color-grey-700);
    padding: 0.5rem;
    border-radius: 50%;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Banner = styled.img`
  display: block;
  width: 100%;
  position: relative;
  height: 100%;
  border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
`;

const Avatar = styled.img`
  display: block;
  position: absolute;
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  border: 4px solid var(--color-grey-0);
  bottom: -20%;
  left: 5%;
`;

const Main = styled.div`
  margin: 0 0 0 17.5rem;
  padding: 2rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  & span {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const DescriptionPart = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 3rem;
  background-color: var(--color-accent-500);
  font-weight: 500;
  font-size: 1.125rem;
`;

function Profile() {
  return (
    <StyledProfile>
      <Images>
        <Banner src="https://uhdwallpapers.org/uploads/converted/20/06/25/macos-big-sur-wwdc-1920x1080_785884-mm-90.jpg" />
        <Avatar src="https://global.discourse-cdn.com/monzo/original/3X/3/a/3aae66f7a0128dc50c915d2687d1abad85de36f3.jpeg" />
        <HiPencilSquare />
      </Images>
      <Main>
        <Description>
          <Heading as="h3">John Smith</Heading>
          <DescriptionPart>
            <FaLocationDot />
            <span>Los Angeles, California, USA</span>
          </DescriptionPart>
          <DescriptionPart>
            <FaEnvelope />
            <span>smith@gmail.com</span>
          </DescriptionPart>
          <p>Front-end Developer at Google</p>
        </Description>
      </Main>
    </StyledProfile>
  );
}

export default Profile;
