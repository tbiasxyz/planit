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
// import GoogleButton from "../authentication/GoogleButton";
// import Divider from "../../ui/Divider";
import LinkButton from "../../ui/LinkButton";

// const StyledSignupForm = styled(Form)`
//   /* background-color: var(--color-grey-0);
//   box-shadow: var(--shadow-md);
//   display: grid;
//   /* grid-template-columns: 1fr 40rem; */
//   /* max-width: 90rem;
//   max-height: 50rem;
//   border-radius: var(--border-radius-md);  */
// `;

const SignupMain = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 70px 100px 100px 110px 100px 100px 0.8fr;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  background-color: var(--color-accent-50);
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  border-radius: var(--border-radius-md);
`;

const SignupHeading = styled.h2`
  font-size: 3rem;
  color: var(--color-grey-700);
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  text-align: center;
  & span {
    background-image: linear-gradient(
      to bottom right,
      var(--color-accent-700) 20%,
      var(--color-accent-500) 42%,
      var(--color-accent-700) 38%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  align-self: center;
`;

const InputWithIconContainer = styled.div`
  position: relative;
  & input {
    width: 100%;
  }
`;

const Icon = styled.span`
  padding: 0.3rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 2%;
  transform: translate(-2%, -50%);
  border-radius: var(--border-radius-md);
  transition: 0.2s ease;
  cursor: pointer;
  & svg {
    font-size: 1.25rem;
    color: var(--color-grey-500);
  }
  &:hover {
    background-color: var(--color-accent-50);
    & svg {
      color: var(--color-accent-700);
    }
  }
`;

const SignUpButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 1 / -1;
  grid-row: 7 / 8;
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
      countryFlag: countryObj.flags.svg
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
    <SignupMain onSubmit={handleSubmit(onSubmit)}>
      <SignupHeading>
        Sign up to <span>Plan It</span>
      </SignupHeading>

      <NavButtons>
        <LinkButton role="button" to="/" variation="accentHover" cursor={true}>
          Homepage
        </LinkButton>
        <LinkButton
          role="button"
          to="/login"
          variation="accentHover"
          cursor={true}
        >
          Login
        </LinkButton>
        <LinkButton
          role="button"
          to="/signup"
          variation="accentHover"
          cursor={true}
        >
          Sign Up
        </LinkButton>
      </NavButtons>

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
        <InputWithIconContainer>
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
          <Icon onClick={() => setIsShownPassword((s) => !s)}>
            {isShownPassword ? <HiEyeSlash /> : <HiEye />}
          </Icon>
        </InputWithIconContainer>
      </FormSection>

      <FormSection
        inputLabel="Confirm password"
        error={errors?.userConfirmPassword?.message}
      >
        <InputWithIconContainer>
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
          <Icon onClick={() => setIsShownConfirmPassword((s) => !s)}>
            {isShownConfirmPassword ? <HiEyeSlash /> : <HiEye />}
          </Icon>
        </InputWithIconContainer>
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
    </SignupMain>
  );
}

export default SignupForm2;
