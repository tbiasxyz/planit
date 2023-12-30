import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProject as deleteProjectApi } from "../../services/apiProjects";
import toast from "react-hot-toast";

export function useDeleteProject() {
  const queryClient = useQueryClient();
  const { mutate: deleteProject, isPending: isDeletingProject } = useMutation({
    mutationFn: (id) => deleteProjectApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
      toast.success("Project successfully deleted");
    },
    onError: () => toast.error("There was an error while deleting project"),
  });
  return { deleteProject, isDeletingProject };
}
