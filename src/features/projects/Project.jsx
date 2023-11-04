import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import Dots from "../../ui/Dots";

const StyledProject = styled(Link)`
  text-decoration: none;
  height: 300px;
  width: 400px;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-white);
  padding: 2rem 2.25rem;
  box-shadow: var(--shadow-sm);
  position: relative;
`;

const TagTypesColors = {
  solo: "accent",
  team: "yellow",
};

function Project() {
  const type = "team";
  return (
    <StyledProject>
      <Tag type={TagTypesColors[type]}>Solo</Tag>
      <Heading as="h3">iOS Project</Heading>
      <Dots top="10" right="5" />
    </StyledProject>
  );
}

export default Project;
