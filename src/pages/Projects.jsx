import ProjectsList from "../features/projects/ProjectsList";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import { HiPlus } from "react-icons/hi2";

function Projects() {
  return (
    <>
      <Row>
        <Heading as="h2">Projects</Heading>
        <Button withIcon variation="accentHover" size="large">
          <HiPlus />
          <span>New Project</span>
        </Button>
      </Row>
      <ProjectsList />
    </>
  );
}

export default Projects;
