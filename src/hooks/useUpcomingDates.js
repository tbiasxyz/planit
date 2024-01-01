import { useSearchParams } from "react-router-dom";
import { isAfter, isToday, startOfToday } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { capitalize } from "lodash";
import { DATES_ITEMS_PER_PAGE } from "../utils/constants";

export function useUpcomingDates(projects) {
  const [searchParams] = useSearchParams();

  const currentPage = searchParams.get("page") || 1;
  const today = startOfToday();

  const startDates = projects
    ?.filter((project) => project.start_date)
    ?.map((project) => ({
      id: uuidv4(),
      projectId: project.id,
      title: `${project.name} (#${project.id})`,
      priority: project.priority,
      status: project.status,
      field: "Start date",
      date: new Date(project.due_date),
    }));
  const dueDates = projects
    ?.filter((project) => project.due_date)
    ?.map((project) => ({
      id: uuidv4(),
      projectId: project.id,
      title: `${project.name} (#${project.id})`,
      priority: project.priority,
      status: project.status,
      field: "Due date",
      date: new Date(project.due_date),
    }));

  const tasks = projects
    ?.filter((project) => project.tasks.length > 0)
    ?.flatMap((project) => {
      const projectTasks = project.tasks
        ?.filter((task) => task.type !== "finished")
        ?.map((task) => {
          return {
            id: uuidv4(),
            projectId: project.id,
            title: `${capitalize(task.task)} (${project.name} - #${
              project.id
            })`,
            priority: task.priority,
            status: task.type,
            field: "Task",
            date: new Date(task.due_date),
          };
        });
      return projectTasks;
    });

  const sortedDates = [...tasks, ...dueDates, ...startDates]
    ?.filter((dateObj) => isAfter(dateObj.date, today) || isToday(dateObj.date))
    ?.sort((a, b) => a.date - b.date);

  const datesToShow =
    sortedDates.length < DATES_ITEMS_PER_PAGE
      ? sortedDates
      : sortedDates.slice(
          (currentPage - 1) * DATES_ITEMS_PER_PAGE,
          currentPage * DATES_ITEMS_PER_PAGE
        );

  return { datesToShow, sortedDates };
}
