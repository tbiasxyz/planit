import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject as createProjectApi } from "../../services/apiProjects";
import toast from "react-hot-toast";

export function useCreateProject() {
  const queryClient = useQueryClient();
  const { mutate: createProject, isPending: isCreating } = useMutation({
    mutationFn: (project) => createProjectApi(project),
    onSuccess: (data) => {
      console.log(data);
      const project = data.at(0);
      toast.success(`${project.name} project created`);
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createProject, isCreating };
}
