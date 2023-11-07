import styled from "styled-components";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import {
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlinePaperClip,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";
import Tag from "../../ui/Tag";
import Divider from "../../ui/Divider";
import { Link } from "react-router-dom";
import Dots from "../../ui/Dots";

const StyledProjectItem = styled(Link)`
  background-color: var(--color-grey-0);
  padding: 1.25rem;
  border-radius: var(--border-radius-sm);
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
`;

// const Banner = styled.img`
//   max-height: 15rem;
//   height: 10rem;
//   width: 100%;
//   border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
// `;

const Description = styled.p`
  color: var(--color-grey-200);
  max-width: 90%;
  margin: 1rem 0 0.5rem 0;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--color-grey-200);
  }

  & span {
    color: var(--color-grey-200);
  }
`;

const Dot = styled.span`
  height: 5px;
  width: 5px;
  background-color: var(--color-grey-200);
  border-radius: 50%;
`;

const Users = styled.div`
  display: flex;
  position: relative;

  & img {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
  }

  & img:nth-of-type(2) {
    position: absolute;
    left: 1.3rem;
  }
`;

function ProjectItem({ id, solo }) {
  return (
    <StyledProjectItem to={`project/${id}`}>
      {/* <Banner src="../images/project.png" /> */}
      <Row>
        <Heading as="h4">Project {id}</Heading>
        <Dots top={0} right={0} type="project" />
      </Row>
      <Description>
        These projects will need a new brand identity where they will get
        recognise.
      </Description>
      <Tag type={solo ? "solo" : "team"}>{solo ? "Solo" : "Team"}</Tag>
      <Divider />
      <InfoContainer>
        {!solo && (
          <Users>
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="user"
            />
            <img
              src="https://dr.savee-cdn.com/things/6/5/2ff05e229b1a53b40edbe2.webp"
              alt="user"
            />
          </Users>
        )}

        <div>
          <Info>
            <HiOutlineSquare3Stack3D />
            <span>3 Tasks</span>
          </Info>
          <Dot />
          <Info>
            <HiOutlinePaperClip />
            <span>0</span>
          </Info>
          <Dot />
          <Info>
            <HiOutlineChatBubbleLeftEllipsis />
            <span>2</span>
          </Info>
        </div>
      </InfoContainer>
    </StyledProjectItem>
  );
}

export default ProjectItem;
