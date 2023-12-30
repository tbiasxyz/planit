import { SUPABASE_URL } from "../utils/constants";
import supabase from "./supabase";

export async function signUp(user, provider) {
  // !provider - user used email and password to sign up
  if (!provider) {
    console.log("No provider");
    const { data: newSignedUpUser, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: {
        data: {
          avatar:
            "https://ydltfforautdvpauyudx.supabase.co/storage/v1/object/public/userAvatars/avatar-default.jpg",
          firstName: user.firstName,
          lastName: user.lastName,
          country: user.country,
          countryFlag: user.countryFlag,
          description: `Hello there! My name is ${user.firstName} ${user.lastName}`,
          socials: {
            instagram: "",
            twitter: "",
            linkedin: "",
            facebook: "",
          },
        },
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return newSignedUpUser;
  }
  // google signup
  else {
    console.log("provider: ");
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}

export async function logIn({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function getLoggedUser() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return user;
}

export async function updateLoggedUser(formUpdateData) {
  const { avatar } = formUpdateData;
  delete formUpdateData.avatar;
  const { data, error } = await supabase.auth.updateUser({
    data: formUpdateData,
  });
  if (error) throw new Error(error.message);
  if (!avatar) return data;

  const avatarUniqueName = `avatar-${data.user.id}-${Math.random()}-${
    avatar.path
  }`;

  const { error: avatarStorageError } = await supabase.storage
    .from("userAvatars")
    .upload(avatarUniqueName, avatar);

  if (avatarStorageError) throw new Error(avatarStorageError.message);

  //https://ydltfforautdvpauyudx.supabase.co/storage/v1/object/public/userAvatars/avatar-default.jpg
  const avatarURL = `${SUPABASE_URL}/storage/v1/object/public/userAvatars/${avatarUniqueName}`;
  console.log(avatarURL);

  const { data: avatarData, error: avatarError } =
    await supabase.auth.updateUser({
      data: {
        avatar: avatarURL,
      },
    });

  if (avatarError) throw new Error(avatarError.message);
  return avatarData;
}

export async function getAllUsers() {
  const { data, error } = await supabase.from("users").select("*");

  if (error) throw new Error(error.message);
  return data;
}
