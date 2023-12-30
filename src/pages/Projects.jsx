import { HiPlus } from "react-icons/hi2";
import ProjectsList from "../features/projects/ProjectsList";
import Row from "../ui/Row";
import ToggleView from "../ui/ToggleView";
import { useSearchParams } from "react-router-dom";
import ProjectsTable from "../features/projects/ProjectsTable";
import { useState } from "react";
import NewProjectForm from "../features/projects/NewProjectForm";
import { useProjects } from "../features/projects/useProjects";
import Spinner from "../ui/Spinner";
import { useCurrentUser } from "../features/authentication/useCurrentUser";
import PrimaryButton from "../ui/PrimaryButton";
import ProjectsFiltersAndSorts from "../features/projects/ProjectsFiltersAndSorts";
import { calcProgress } from "../utils/helpers";

function Projects() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenedFilterAndSort, setIsOpenedFilterAndSort] = useState(false);
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view") || "table";

  const { projects, isPending: isLoadingProjects } = useProjects();
  const { user, isPending } = useCurrentUser();

  if (isLoadingProjects || isPending) return <Spinner size="page" />;

  const appliedFiltersAndSorts = Object.fromEntries(searchParams.entries());

  function getAppliedFiltersOrSorts(type) {
    return Object.fromEntries(
      Object.entries(appliedFiltersAndSorts)
        .filter(([key]) => {
          if (key.startsWith(type)) {
            return true; // Include the key-value pair in the result
          }
          return false; // Exclude the key-value pair from the result
        })
        .map(([key, value]) => [key.split("-").at(-1), value.split("-")])
    );
  }

  const appliedFilters = getAppliedFiltersOrSorts("filter");
  const appliedSorts = getAppliedFiltersOrSorts("sort");

  const userProjects = projects?.filter((project) =>
    project?.user_ids?.includes(user.id)
  );

  const filteredProjects = userProjects.filter((project) => {
    // Apply filters
    const passesFilters = Object.entries(appliedFilters).every(
      ([filterKey, filterValues]) => {
        if (filterValues.length === 0 || filterValues.includes("all")) {
          return true; // No filter applied, so it passes automatically
        }

        if (filterValues.includes("ecommerce")) {
          filterValues = [
            ...filterValues.filter((value) => value !== "ecommerce"),
            "e-commerce",
          ];
        }
        if (filterValues.includes("socialmedia")) {
          filterValues = [
            ...filterValues.filter((value) => value !== "socialmedia"),
            "social-media",
          ];
        }

        return filterValues.includes(String(project[filterKey]));
      }
    );
    // true or false
    return passesFilters;
  });

  const filteredAndSortedProjects = filteredProjects.sort((a, b) => {
    return Object.entries(appliedSorts).reduce(
      (result, [sortKey, sortValue]) => {
        if (sortValue.includes("all")) {
          return result; // "all" => dont sort
        }
        const direction = sortValue[0].slice(-3) === "Asc" ? "asc" : "desc";
        const modifier = direction === "asc" ? 1 : -1;

        switch (sortKey) {
          case "name":
            return a.name.localeCompare(b.name) * modifier;
          case "progress":
            return (calcProgress(a.tasks) - calcProgress(b.tasks)) * modifier;
          case "start":
            return (new Date(a.start_date) - new Date(b.start_date)) * modifier;
          default:
            return result;
        }
      },
      0
    );
  });

  const closeForm = () => setIsOpenForm(false);

  return (
    <>
      <Row>
        <ToggleView />
        <div>
          <PrimaryButton onClick={() => setIsOpenedFilterAndSort((s) => !s)}>
            {isOpenedFilterAndSort ? "Close" : "Open"} Filter and Sort
          </PrimaryButton>
          <PrimaryButton onClick={() => setIsOpenForm((s) => !s)}>
            <HiPlus />
            <span>New</span>
          </PrimaryButton>
        </div>
      </Row>
      {isOpenedFilterAndSort && <ProjectsFiltersAndSorts />}
      {isOpenForm && <NewProjectForm closeForm={closeForm} />}
      {view === "list" && <ProjectsList projects={filteredAndSortedProjects} />}
      {view === "table" && (
        <ProjectsTable projects={filteredAndSortedProjects} />
      )}
    </>
  );
}

export default Projects;
