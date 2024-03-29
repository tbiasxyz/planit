import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signUp, isPending: isSigningUp } = useMutation({
    mutationFn: ({ user, provider }) => {
      signUpApi(user, provider);
    },
    onSuccess: () => {
      toast.success(
        "Successfully signed up! Confirm your account through e-mail"
      );
      navigate("/auth/login");
    },
    onError: () => {
      toast.error("There was an error signing up. Try again!");
    },
  });

  return { signUp, isSigningUp };
}
