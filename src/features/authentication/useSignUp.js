import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signUp, isPending: isSigningUp } = useMutation({
    // mutationFn: signUpApi,
    mutationFn: ({ user, provider }) => {
      try {
        console.log(user);
        console.log(provider);
        signUpApi(user, provider);
      } catch (err) {
        throw new Error(err.message);
      }
    },
    onSuccess: () => {
      toast.success("Succesfully signed up! Start by logging in your account!");
      navigate("/login");
    },
    onError: () => {
      toast.error("There was an error signing up. Try again!");
    },
  });

  return { signUp, isSigningUp };
}
