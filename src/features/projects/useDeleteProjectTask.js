import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProjectTask as deleteProjectTaskApi } from "../../services/apiProjects";
import toast from "react-hot-toast";

export function useDeleteProjectTask() {
  const queryClient = useQueryClient();
  const { mutate: deleteProjectTask, isPending: isDeletingProjectTask } =
    useMutation({
      mutationFn: ({ project, taskId }) =>
        deleteProjectTaskApi(project, taskId),

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["projects"] });
        toast.success("Successfully deleted task");
      },
      onError: () => toast.error("Something went wrong while deleting task"),
    });
  return { deleteProjectTask, isDeletingProjectTask };
}
