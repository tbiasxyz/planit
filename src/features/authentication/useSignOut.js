import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut as signOutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signOut, isPending: isSigningOut } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries();
    },
    onError: () => {
      toast.error("There was an error signing out. Try again!");
    },
  });
  return { signOut, isSigningOut };
}
