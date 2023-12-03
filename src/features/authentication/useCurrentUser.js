import { useQuery } from "@tanstack/react-query";
import { getLoggedUser } from "../../services/apiAuth";

export function useCurrentUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getLoggedUser,
  });

  return { user, isPending };
}
