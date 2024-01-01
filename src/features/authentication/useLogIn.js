import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logIn as logInApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogIn() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logIn, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => logInApi({ email, password }),
    onSuccess: (data) => {
      const { user } = data;
      toast.success("Successfully logged in!");
      queryClient.setQueryData(["user"], user);
      navigate("/app");
    },
    onError: () => {
      toast.error(
        "You have entered the wrong login or have not yet confirmed your email"
      );
    },
  });

  return { logIn, isLoggingIn };
}
