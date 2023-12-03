import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signUp, isPending: isSigningUp } = useMutation({
    mutationFn: ({ user, provider }) => {
      signUpApi(user, provider);
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Succesfully signed up! Start by logging in your account!");
      navigate("/auth/login");
    },
    onError: () => {
      toast.error("There was an error signing up. Try again!");
    },
  });

  return { signUp, isSigningUp };
}
