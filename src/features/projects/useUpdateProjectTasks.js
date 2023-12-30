import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProjectTasks as updateProjectTasksApi } from "../../services/apiProjects";
import toast from "react-hot-toast";

export function useUpdateProjectTasks() {
  const queryClient = useQueryClient();
  const { mutate: updateProjectTasks, isPending: isUpdatingProjectTasks } =
    useMutation({
      mutationFn: ({ projectId, tasks }) =>
        updateProjectTasksApi(projectId, tasks),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["projects"] });
        toast.success("Successfully updated task");
      },
      onError: () => toast.error("Something went wrong while updating tasks"),
    });

  return { updateProjectTasks, isUpdatingProjectTasks };
}
