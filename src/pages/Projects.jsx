import { HiPlus } from "react-icons/hi2";
import ProjectsList from "../features/projects/ProjectsList";
import Button from "../ui/Button";
import Row from "../ui/Row";
import ToggleView from "../ui/ToggleView";

function Projects() {
  return (
    <>
      <Row>
        <ToggleView />
        <div>
          <span>Filter</span>
          <Button variation="icon" type="icon" size="icon">
            <HiPlus />
          </Button>
        </div>
      </Row>
      <ProjectsList />
    </>
  );
}

export default Projects;
