import styled from "styled-components";
import Heading from "../ui/Heading";
import Cursor from "../ui/Cursor";
import LandingHeader from "../ui/LandingHeader";
import LinkButton from "../ui/LinkButton";
import { HiArrowSmallRight } from "react-icons/hi2";

const FullPageContainer = styled.div`
  max-width: 100vw;
  width: 100vw;
  min-height: 100vh;
  cursor: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10000;
    background-image: url("images/bg.png");
    background-size: cover;
    height: 100vh;
    width: 100vw;
    transform: scaleY(-1);
  }
`;

const StyledLanding = styled.div`
  max-width: 1900px;
  margin: 0 auto;
  padding: 0.5rem 3rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Paragraph = styled.p`
  color: rgb(51, 51, 51);
  font-size: 1.5rem;
  width: 50rem;
  text-align: center;
  letter-spacing: 1.4px;
  line-height: 1.4;
  margin-bottom: 0.75rem;

  & span {
    color: var(--color-accent-700);
    font-weight: 500;
  }
`;

function Landing() {
  return (
    <FullPageContainer>
      <StyledLanding>
        <LandingHeader />
        <Heading as="h1">
          Plan<span>It</span>
        </Heading>
        <Paragraph>
          With Plan It, you can <span>create</span>, <span>manage</span>, and
          <span> track</span> multiple <span>projects</span> with ease. Invite
          your team members and collaborate in real-time, ensuring everyone is
          on the same page and focused on the right tasks.
        </Paragraph>
        <LinkButton
          size="large"
          role="button"
          withIcon
          to="auth/signup"
          cursor={false}
        >
          <span>Get started</span>
          <HiArrowSmallRight />
        </LinkButton>
      </StyledLanding>
      <Cursor />
    </FullPageContainer>
  );
}

export default Landing;
