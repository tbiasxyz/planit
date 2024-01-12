import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLoggedUser } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "./useCurrentUser";
import toast from "react-hot-toast";

export function useUpdateUserData() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useCurrentUser();
  const { mutate: updateUserData, isPending: isUpdatingUser } = useMutation({
    mutationFn: (formData) => updateLoggedUser(formData),
    onSuccess: () => {
      toast.success("Successfully updated");
      navigate(`/app/profile/${user.id}`);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUserData, isUpdatingUser };
}
