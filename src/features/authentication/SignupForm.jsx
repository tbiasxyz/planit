import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useCountries } from "../../hooks/useCountries";
import { PASSWORD_MIN_LENGTH } from "../../utils/constants";
import { useSignUp } from "./useSignUp";
import styled from "styled-components";

import Form from "../../ui/Form";
import FormSection from "../../ui/FormSection";
import FormInput from "../../ui/FormInput";
import Select from "../../ui/Select";
import Spinner from "../../ui/Spinner";
import FormButton from "../../ui/FormButton";
import FormInputWithIcon from "../../ui/FormInputWithIcon";
import AuthFormHeading from "../../ui/AuthFormHeading";
import Icon from "../../ui/Icon";
// import GoogleButton from "../authentication/GoogleButton";
// import Divider from "../../ui/Divider";

const StyledSignupForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SignUpButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 1 / -1;
`;

function SignupForm2() {
  const [isShownPassword, setIsShownPassword] = useState(false);
  const [isShownConfirmPassword, setIsShownConfirmPassword] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm();

  const { signUp, isSigningUp } = useSignUp();
  const { countries, isPending } = useCountries();

  if (isPending || isSigningUp) return <Spinner size="page" />;

  const filteredCountries = searchValue
    ? countries.filter((country) =>
        country.name.common.toLowerCase().startsWith(searchValue.toLowerCase())
      )
    : countries.sort((a, b) => {
        const nameA = a.name.common.toLowerCase();
        const nameB = b.name.common.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

  function onSubmit(formData) {
    const countryCode = formData.userCountry;
    const countryObj = countries.find(
      (country) => country.cca2 === countryCode
    );
    const user = {
      firstName: formData.userFirstName,
      lastName: formData.userLastName,
      email: formData.userEmail,
      password: formData.userPassword,
      country: countryObj.name.common,
      countryFlag: countryObj.flags?.svg
        ? countryObj.flags.svg
        : countryObj.flags[0],
    };
    signUp(
      { user },
      {
        onSuccess: () => reset(),
      }
    );
  }

  return (
    <StyledSignupForm onSubmit={handleSubmit(onSubmit)}>
      <AuthFormHeading>
        Sign up to <span>Plan It</span>
      </AuthFormHeading>

      <FormSection
        inputLabel="First name"
        error={errors?.userFirstName?.message}
      >
        <FormInput
          type="text"
          placeholder="First name"
          id="userFirstName"
          {...register("userFirstName", {
            required: "First name is required",
          })}
          disabled={isSigningUp}
        />
      </FormSection>

      <FormSection inputLabel="Last name" error={errors?.userLastName?.message}>
        <FormInput
          type="text"
          placeholder="Last name"
          id="userLastName"
          {...register("userLastName", { required: "Last name is required" })}
        />
      </FormSection>

      <FormSection
        inputLabel="E-Mail"
        gridArea={{ column: "1 / -1" }}
        error={errors?.userEmail?.message}
      >
        <FormInput
          type="email"
          placeholder="E-Mail"
          id="userEmail"
          {...register("userEmail", {
            required: "E-Mail is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Provide valid email address",
            },
          })}
        />
      </FormSection>

      <FormSection
        inputLabel={`Password (min ${PASSWORD_MIN_LENGTH} characters)`}
        error={errors?.userPassword?.message}
      >
        <FormInputWithIcon>
          <FormInput
            type={isShownPassword ? "text" : "password"}
            placeholder="Password"
            id="userPassword"
            {...register("userPassword", {
              required: "Password is required",
              minLength: {
                value: PASSWORD_MIN_LENGTH,
                message: `Password need atleast ${PASSWORD_MIN_LENGTH} characters`,
              },
            })}
          />
          <Icon onClick={() => setIsShownPassword((s) => !s)} inputIcon={true}>
            {isShownPassword ? <HiEyeSlash /> : <HiEye />}
          </Icon>
        </FormInputWithIcon>
      </FormSection>

      <FormSection
        inputLabel="Confirm password"
        error={errors?.userConfirmPassword?.message}
      >
        <FormInputWithIcon>
          <FormInput
            type={isShownConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            id="userConfirmPassword"
            {...register("userConfirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === getValues().userPassword || "Passwords need to match",
            })}
          />
          <Icon
            onClick={() => setIsShownConfirmPassword((s) => !s)}
            inputIcon={true}
          >
            {isShownConfirmPassword ? <HiEyeSlash /> : <HiEye />}
          </Icon>
        </FormInputWithIcon>
      </FormSection>

      <FormSection inputLabel="Country" error={errors?.userCountry?.message}>
        <Select
          options={filteredCountries.map((country) => ({
            tag: country?.name.common,
            value: country?.cca2,
          }))}
          id="userCountry"
          defaultValue={false}
          register={register}
          setValue={setValue}
          type="search"
          setSearchValue={setSearchValue}
        />
      </FormSection>

      <SignUpButtons>
        <FormButton type="submit">Sign Up</FormButton>
        {/* <Divider />
        <GoogleButton
          onClick={(e) => {
            e.preventDefault();
            console.log("clicked google");
            signUp({ user: {}, provider: "google" });
          }}
        >
          Sign Up with Google
        </GoogleButton> */}
      </SignUpButtons>
    </StyledSignupForm>
  );
}

export default SignupForm2;
