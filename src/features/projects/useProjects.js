import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../services/apiProjects";

export function useProjects() {
  const {
    data: projects,
    isPending,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return { projects, isPending, error };
}
