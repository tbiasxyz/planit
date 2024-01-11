import { isAfter, isBefore, isToday, startOfToday, sub } from "date-fns";
import { useSearchParams } from "react-router-dom";

export function useDashboardStats(projects) {
  const [searchParams] = useSearchParams();
  let lastDays = searchParams.get("last") || 7;

  const today = startOfToday();

  let activeToDoTasks = projects
    .flatMap((project) => project.tasks)
    .filter((task) => task.type !== "finished");

  let finishedTasks = projects
    .flatMap((project) => project.tasks)
    .filter((task) => task.type === "finished");

  let finishedProjects = projects
    .map((project) => project.finish_date)
    .filter((finishDate) => finishDate !== null);

  let createdProjects = projects;

  let createdTasks = projects.flatMap((project) => project.tasks);

  let tasks = createdTasks;

  if (String(lastDays).toLowerCase() === "all")
    return {
      finishedTasks,
      finishedProjects,
      createdProjects,
      createdTasks,
      activeToDoTasks,
      tasks,
    };

  finishedTasks = finishedTasks.filter(
    (task) =>
      isAfter(new Date(task.finished), sub(today, { days: lastDays })) ||
      isToday(new Date(task.finished))
  );

  finishedProjects = finishedProjects.filter(
    (date) =>
      (isAfter(new Date(date), sub(today, { days: lastDays })) &&
        isBefore(new Date(date), today)) ||
      isToday(new Date(date))
  );

  createdProjects = createdProjects.filter(
    (project) =>
      (isAfter(new Date(project.created_at), sub(today, { days: lastDays })) &&
        isBefore(new Date(project.created_at), today)) ||
      isToday(new Date(project.created_at))
  );

  createdTasks = createdTasks.filter(
    (task) =>
      (isAfter(new Date(task.created_at), sub(today, { days: lastDays })) &&
        isBefore(new Date(task.created_at), today)) ||
      isToday(new Date(task.created_at))
  );

  activeToDoTasks = activeToDoTasks.filter(
    (task) =>
      isAfter(new Date(task.due_date), sub(today, { days: lastDays })) ||
      isToday(new Date(task.due_date))
  );

  tasks = tasks.filter(
    (task) =>
      isAfter(new Date(task.created_at), sub(today, { days: lastDays })) ||
      isToday(new Date(task.created_at))
  );

  return {
    finishedTasks,
    finishedProjects,
    createdTasks,
    createdProjects,
    activeToDoTasks,
    tasks,
  };
}
