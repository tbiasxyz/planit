import Table from "../../ui/Table";
import Dots from "../../ui/Dots";
import ProjectTag from "./ProjectTag";
import ProjectUsers from "./ProjectUsers";
import ProjectProgressBar from "./ProjectProgressBar";
import { capitalize } from "../../utils/helpers";
import { format } from "date-fns";
import { useCurrentUser } from "../authentication/useCurrentUser";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";

function ProjectsTable({ projects }) {
  const projectsCount = projects.length;
  const { user, isPending } = useCurrentUser();
  if (isPending) return <Spinner size="page" />;
  const userData = user.user_metadata;
  return projectsCount ? (
    <Table columns="0.675fr 0.5fr 0.45fr 0.35fr 0.35fr 0.35fr 0.65fr 0.5fr 0.4fr 0.1fr">
      <Table.Header>
        <Table.Row>
          <Table.Data>Project Name </Table.Data>
          <Table.Data>Project Type</Table.Data>
          <Table.Data>Status</Table.Data>
          <Table.Data>Started</Table.Data>
          <Table.Data>Due</Table.Data>
          <Table.Data>Finished</Table.Data>
          <Table.Data>Progress</Table.Data>
          <Table.Data>Priority</Table.Data>
          <Table.Data>Participants</Table.Data>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {projects?.map((project) => (
          <Table.Row key={project.id}>
            <Table.Data>{project.name}</Table.Data>
            <Table.Data>{capitalize(project.type)}</Table.Data>
            <Table.Data>
              <ProjectTag
                tag={capitalize(project.status)}
                color={project.status}
                type="status"
              />
            </Table.Data>
            <Table.Data>
              {project?.start_date
                ? format(new Date(project.start_date), "d. M. yyyy")
                : "—"}
            </Table.Data>
            <Table.Data>
              {project?.due_date
                ? format(new Date(project.due_date), "d. M. yyyy")
                : "—"}
            </Table.Data>
            <Table.Data>
              {project?.finish_date
                ? format(new Date(project.finish_date), "d. M. yyyy")
                : "—"}
            </Table.Data>
            <Table.Data>
              <ProjectProgressBar progress={project.progress} />
            </Table.Data>
            <Table.Data>
              {project?.priority ? (
                <ProjectTag
                  tag={`${capitalize(project.priority)} priority`}
                  color={project.priority}
                />
              ) : (
                "—"
              )}
            </Table.Data>
            <Table.Data>
              <ProjectUsers>
                <img src={userData.avatar} alt="User avatar" />
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="User avatar"
                />
              </ProjectUsers>
            </Table.Data>
            <Table.Data>
              <Dots top={50} right={1} type="project" />
            </Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ) : (
    <Heading as="h4">Start by creating new project</Heading>
  );
}

export default ProjectsTable;
