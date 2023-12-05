import styled from "styled-components";

const ProjectUsers = styled.div`
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

export default ProjectUsers;
