import { useLocation } from "react-router-dom";

function EditProjectForm() {
  const location = useLocation();
  const { state: project } = location;
  console.log(project);
  return <div>Edit project form - {project.name}</div>;
}

export default EditProjectForm;
