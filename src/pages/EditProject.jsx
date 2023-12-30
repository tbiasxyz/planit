import { useLocation, useNavigate } from "react-router-dom";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import PrimaryButton from "../ui/PrimaryButton";
import EditProjectForm from "../features/projects/EditProjectForm";

function EditProject() {
  const navigate = useNavigate();
  const { state: project } = useLocation();
  return (
    <>
      <Row>
        <Heading as="h3">Edit Project - {project.name}</Heading>
        <PrimaryButton onClick={() => navigate("/app/projects")}>
          Go back
        </PrimaryButton>
      </Row>
      <EditProjectForm project={project} />
    </>
  );
}

export default EditProject;
