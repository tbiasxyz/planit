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
      toast.success("Succesfully logged in!");
      queryClient.setQueryData(["user"], user);
      navigate("/app");
    },
    onError: () => {
      toast.error("Provided wrong login or you didn't confirm your account");
    },
  });

  return { logIn, isLoggingIn };
}
