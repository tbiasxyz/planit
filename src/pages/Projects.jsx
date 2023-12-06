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
import { useCurrentUser } from "../features/authentication/useCurrentUser";
import PrimaryButton from "../ui/PrimaryButton";

function Projects() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view") || "list";

  const { projects, isPending: isLoadingProjects } = useProjects();
  const { user, isPending } = useCurrentUser();

  if (isLoadingProjects || isPending) return <Spinner size="page" />;

  const filterProjects = projects?.filter((project) =>
    project?.user_ids?.includes(user.id)
  );

  const closeForm = () => setIsOpenForm(false);

  return (
    <>
      <Row>
        <ToggleView />
        <div>
          {/* <span>Filter</span> */}
          <PrimaryButton onClick={() => setIsOpenForm((s) => !s)}>
            <HiPlus />
            <span>New</span>
          </PrimaryButton>
        </div>
      </Row>
      {isOpenForm && <NewProjectForm closeForm={closeForm} />}
      {view === "list" && <ProjectsList projects={filterProjects} />}
      {view === "table" && <ProjectsTable projects={filterProjects} />}
    </>
  );
}

export default Projects;
