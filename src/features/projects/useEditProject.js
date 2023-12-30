import { useMutation } from "@tanstack/react-query";
import { editProject as editProjectApi } from "../../services/apiProjects";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useEditProject() {
  const navigate = useNavigate();
  const { mutate: editProject, isPending: isEditingProject } = useMutation({
    mutationFn: ({ dataToEdit, projectId }) =>
      editProjectApi(dataToEdit, projectId),
    onSuccess: () => {
      toast.success("Successfully edited project");
      navigate("/app/projects");
    },
    onError: (error) => toast.error(error.message),
  });

  return { editProject, isEditingProject };
}
