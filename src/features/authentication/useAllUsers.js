import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../services/apiAuth";

export function useAllUsers() {
  const { data: users, isPending } = useQuery({
    queryFn: getAllUsers,
    queryKey: ["users"],
  });
  return { users, isPending };
}
