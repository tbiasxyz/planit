import { useForm } from "react-hook-form";
import { useLogIn } from "./useLogIn";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useState } from "react";
import styled from "styled-components";

import Form from "../../ui/Form";
import FormButton from "../../ui/FormButton";
import FormSection from "../../ui/FormSection";
import FormInput from "../../ui/FormInput";
import FormInputWithIcon from "../../ui/FormInputWithIcon";
import AuthFormHeading from "../../ui/AuthFormHeading";
import Icon from "../../ui/Icon";

const StyledLoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-self: center;
  gap: 1rem;
`;

const LoginButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 1 / -1;
`;

function LoginForm() {
  const [isShownPassword, setIsShownPassword] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const { logIn, isLoggingIn } = useLogIn();

  function onSubmit(formData) {
    const { userEmail, userPassword } = formData;
    logIn(
      { email: userEmail, password: userPassword },
      { onSettled: () => reset() }
    );
  }

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <AuthFormHeading>
        Log in to <span>Plan It</span>
      </AuthFormHeading>
      <FormSection inputLabel="E-Mail" error={errors?.userEmail?.message}>
        <FormInput
          type="email"
          id="userEmail"
          {...register("userEmail", { required: "E-Mail is required" })}
          disabled={isLoggingIn}
        />
      </FormSection>
      <FormSection inputLabel="Password" error={errors?.userPassword?.message}>
        <FormInputWithIcon>
          <FormInput
            type={isShownPassword ? "text" : "password"}
            id="userPassword"
            {...register("userPassword", {
              required: "Password is required",
            })}
            disabled={isLoggingIn}
          />
          <Icon onClick={() => setIsShownPassword((s) => !s)} inputIcon={true}>
            {isShownPassword ? <HiEyeSlash /> : <HiEye />}
          </Icon>
        </FormInputWithIcon>
      </FormSection>

      <LoginButtons>
        <FormButton type="submit" disabled={isLoggingIn}>
          Log In
        </FormButton>
      </LoginButtons>
    </StyledLoginForm>
  );
}

export default LoginForm;
