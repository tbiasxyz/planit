import _ from "lodash";
import styled from "styled-components";
import Form from "../../ui/Form";
import { useCurrentUser } from "./useCurrentUser";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import FormSection from "../../ui/FormSection";
import FormInput from "../../ui/FormInput";
import FormInputWithIcon from "../../ui/FormInputWithIcon";
import { HiOutlineTrash } from "react-icons/hi2";

import TextArea from "../../ui/TextArea";
import Select from "../../ui/Select";
import { useCountries } from "../../hooks/useCountries";
import { useForm } from "react-hook-form";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";
import DragAndDrop from "../../ui/DragAndDrop";
import FormButton from "../../ui/FormButton";
import { useUpdateUserData } from "./useUpdateUserData";
import Icon from "../../ui/Icon";

const StyledEditProfileForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 35rem;
`;

const EditProfileMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const EditSocials = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  width: 100%;
`;

const EditProfilePicture = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  & > button:last-of-type {
    width: 80%;
  }
`;

const AvatarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Avatar = styled.img`
  height: 20rem;
  width: 70%;
  border-radius: 10px;
  object-fit: cover;
`;

const AvatarReset = styled.button`
  padding: 0.5rem;
  border-radius: 50%;
  position: absolute;
  left: 16%;
  top: 2%;
  background-color: var(--color-accent-500);
  border: none;
  cursor: pointer;
  z-index: 100;
  transition: 0.3s ease;
  &:hover {
    background-color: var(--color-accent-700);
  }
  & svg {
    color: var(--color-white);
    font-size: 1rem;
  }
`;

function EditProfileForm() {
  const { register, handleSubmit, setValue } = useForm();

  const { updateUserData, isUpdatingUser } = useUpdateUserData();

  const { countries, isPending: isLoadingCountries } = useCountries();
  const { user, isPending } = useCurrentUser();
  const { email } = user;
  const userData = user.user_metadata;

  useEffect(() => {
    setValue("avatar", userData.avatar);
  }, [setValue, userData.avatar]);

  // console.log(userData);

  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [searchValue, setSearchValue] = useState("");
  const [avatar, setAvatar] = useState(userData.avatar);

  if (isLoadingCountries || isPending) return <Spinner size="page" />;

  const initialCountryObj = countries.filter(
    (country) => country.name.common === userData.country
  )[0];

  const initialCountry = {
    tag: initialCountryObj?.name.common,
    value: initialCountryObj?.cca2,
  };

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

  const initialDataObject = {
    avatar: userData.avatar,
    firstName: userData.firstName,
    lastName: userData.lastName,
    description: userData.description,
    country: initialCountry.value,
    instagram: userData.socials?.instagram,
    twitter: userData.socials?.twitter,
    linkedin: userData.socials?.linkedin,
    facebook: userData.socials?.facebook,
  };

  function onSubmit(formData, e) {
    e.preventDefault();
    if (_.isEqual(initialDataObject, formData)) return;
    const dataToUpdate = {};
    for (const [key, value] of Object.entries(formData)) {
      if (value !== initialDataObject[key]) {
        if (
          key === "instagram" ||
          key === "twitter" ||
          key === "linkedin" ||
          key === "facebook"
        ) {
          if (!dataToUpdate.socials) {
            dataToUpdate.socials = userData.socials;
          }
          dataToUpdate.socials[key] = value;
        }
        if (key === "country") {
          const newCountry = countries
            .filter((country) => country.cca2 === value)
            .at(0);
          dataToUpdate.country = newCountry.name.common;
          dataToUpdate.countryFlag = newCountry.flags.svg;
        } else {
          dataToUpdate[key] = value;
        }
      }
    }
    updateUserData(dataToUpdate);
  }

  return (
    <StyledEditProfileForm onSubmit={handleSubmit(onSubmit)}>
      <EditProfileMain>
        <FormSection inputLabel="E-Mail" style={{ gridColumn: "1 / span 2" }}>
          <FormInput type="email" value={email} disabled />
        </FormSection>
        <FormSection inputLabel="First name">
          <FormInputWithIcon>
            <FormInput
              type="text"
              id="firstName"
              value={firstName}
              disabled={isUpdatingUser}
              {...register("firstName", {
                onChange: (e) => setFirstName(e.target.value),
              })}
            />
            {firstName !== userData.firstName && (
              <Icon
                onClick={() => {
                  setFirstName(userData.firstName);
                  setValue("firstName", userData.firstName);
                }}
                inputIcon={true}
              >
                <HiOutlineXMark />
              </Icon>
            )}
          </FormInputWithIcon>
        </FormSection>
        <FormSection inputLabel="Last name">
          <FormInputWithIcon>
            <FormInput
              type="text"
              value={lastName}
              id="lastName"
              disabled={isUpdatingUser}
              {...register("lastName", {
                onChange: (e) => setLastName(e.target.value),
              })}
            />
            {lastName !== userData.lastName && (
              <Icon
                onClick={() => {
                  setLastName(userData.lastName);
                  setValue("lastName", userData.firstName);
                }}
                inputIcon={true}
              >
                <HiOutlineXMark />
              </Icon>
            )}
          </FormInputWithIcon>
        </FormSection>
        <FormSection inputLabel="Country">
          <Select
            options={filteredCountries.map((country) => ({
              tag: country?.name.common,
              value: country?.cca2,
            }))}
            defaultValue={initialCountry}
            setValue={setValue}
            type="search"
            setSearchValue={setSearchValue}
            register={register}
            disabled={isUpdatingUser}
            id="country"
          />
        </FormSection>
        <FormSection
          inputLabel="Description"
          style={{ gridColumn: "1 / span 2" }}
        >
          <TextArea
            charsLimit={80}
            placeholder="Your description"
            id="description"
            defaultText={userData.description}
            required={false}
            disabled={isUpdatingUser}
            register={register}
          />
        </FormSection>
        <FormSection inputLabel="Socials" style={{ gridColumn: "1 / span 2" }}>
          <EditSocials>
            <FormInputWithIcon>
              <FormInput
                type="text"
                placeholder="Instagram URL"
                id="instagram"
                defaultValue={userData.socials.instagram}
                disabled={isUpdatingUser}
                {...register("instagram", {
                  // pattern: {
                  //   value:
                  //     /((?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel)\/([^/?#&]+))*/g,
                  //   message: "Provide instagram URL",
                  // },
                })}
              />
              <Icon inputIcon={true}>
                <FaInstagram />
              </Icon>
            </FormInputWithIcon>
            <FormInputWithIcon>
              <FormInput
                type="text"
                placeholder="Twitter URL"
                id="twitter"
                defaultValue={userData.socials.twitter}
                disabled={isUpdatingUser}
                {...register("twitter")}
              />
              <Icon inputIcon={true}>
                <FaTwitter />
              </Icon>
            </FormInputWithIcon>
            <FormInputWithIcon>
              <FormInput
                type="text"
                placeholder="LinkedIn URL"
                id="linkedin"
                disabled={isUpdatingUser}
                defaultValue={userData.socials.linkedin}
                {...register("linkedin")}
              />
              <Icon inputIcon={true}>
                <FaLinkedin />
              </Icon>
            </FormInputWithIcon>
            <FormInputWithIcon>
              <FormInput
                type="text"
                placeholder="Facebook URL"
                id="facebook"
                disabled={isUpdatingUser}
                defaultValue={userData.socials.facebook}
                {...register("facebook")}
              />
              <Icon inputIcon={true}>
                <FaFacebook />
              </Icon>
            </FormInputWithIcon>
          </EditSocials>
        </FormSection>
      </EditProfileMain>
      <EditProfilePicture>
        <AvatarContainer>
          <Avatar src={avatar} id="avatar" />
          {avatar !== userData.avatar && (
            <AvatarReset
              onClick={() => {
                setAvatar(userData.avatar);
                setValue("avatar", userData.avatar);
              }}
            >
              <HiOutlineTrash />
            </AvatarReset>
          )}
        </AvatarContainer>

        <DragAndDrop setAvatar={setAvatar} setValue={setValue} id="avatar" />
        <FormButton disabled={isUpdatingUser}>Submit changes</FormButton>
      </EditProfilePicture>
    </StyledEditProfileForm>
  );
}

export default EditProfileForm;
