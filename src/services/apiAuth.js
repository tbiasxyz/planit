import supabase from "./supabase";

export async function signUp(user, provider) {
  console.log(user);
  console.log(provider);
  if (!provider) {
    console.log("No provider");
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: {
        data: {
          avatar: "default-pfp.webp",
          firstName: user.firstName,
          lastName: user.lastName,
          country: user.country,
          countryFlag: user.countryFlag,
        },
      },
    });

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } else {
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
