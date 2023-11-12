import supabase from "./supabase";

export async function getProjects() {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createProject(project) {
  const { data, error } = await supabase
    .from("projects")
    .insert([{ ...project }])
    .select();

  if (error) {
    throw new Error("Cabin could not be created");
  }

  return data;
}
