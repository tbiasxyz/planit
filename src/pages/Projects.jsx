import { HiPlus } from "react-icons/hi2";
import ProjectsList from "../features/projects/ProjectsList";
import Button from "../ui/Button";
import Row from "../ui/Row";
import ToggleView from "../ui/ToggleView";
import { useSearchParams } from "react-router-dom";
import ProjectsTable from "../features/projects/ProjectsTable";

function Projects() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view") || "list";
  console.log(view);
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
      {view === "list" && <ProjectsList />}
      {view === "table" && <ProjectsTable />}
    </>
  );
}

export default Projects;
