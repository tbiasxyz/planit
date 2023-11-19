import { HiPlus } from "react-icons/hi2";
import ProjectsList from "../features/projects/ProjectsList";
import Button from "../ui/Button";
import Row from "../ui/Row";
import ToggleView from "../ui/ToggleView";
import { useSearchParams } from "react-router-dom";
import ProjectsTable from "../features/projects/ProjectsTable";
import { useState } from "react";
import NewProjectForm from "../features/projects/NewProjectForm";
import { useProjects } from "../features/projects/useProjects";
import Spinner from "../ui/Spinner";

function Projects() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view") || "list";

  const { projects, isPending } = useProjects();

  if (isPending) return <Spinner size="page" />;

  const closeForm = () => setIsOpenForm(false);

  return (
    <>
      <Row>
        <ToggleView />
        <div>
          <span>Filter</span>
          <Button
            variation="icon"
            type="icon"
            size="icon"
            onClick={() => setIsOpenForm((s) => !s)}
          >
            <HiPlus />
          </Button>
        </div>
      </Row>
      {isOpenForm && <NewProjectForm closeForm={closeForm} />}
      {view === "list" && <ProjectsList projects={projects} />}
      {view === "table" && <ProjectsTable projects={projects} />}
    </>
  );
}

export default Projects;
