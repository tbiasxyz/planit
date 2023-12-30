import supabase from "./supabase";

export async function getProjects() {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    throw new Error("Projects could not be loaded");
  }
  return data;
}

export async function createProject(project) {
  const { data, error } = await supabase
    .from("projects")
    .insert([{ ...project }])
    .select();

  if (error) {
    throw new Error("Project could not be created");
  }

  return data;
}

export async function deleteProject(projectId) {
  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", projectId);
  if (error) throw new Error(error.message);
}

export async function editProject(editData, id) {
  const { data, error } = await supabase
    .from("projects")
    .update({ ...editData })
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function deleteProjectTask(project, taskId) {
  const newProjectTasks = project.tasks.filter((task) => task.id !== taskId);
  const { data, error } = await supabase
    .from("projects")
    .update({ tasks: newProjectTasks })
    .eq("id", project.id)
    .select();
  if (error) throw new Error(error.message);
  return data;
}

export async function updateProjectTasks(projectId, newTasks) {
  const { data, error } = await supabase
    .from("projects")
    .update({ tasks: newTasks })
    .eq("id", projectId)
    .select();
  if (error) throw new Error(error.message);
  return data;
}
