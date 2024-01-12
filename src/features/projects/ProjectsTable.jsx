import styled from "styled-components";
import { HiOutlineTrash, HiOutlinePencil, HiEye } from "react-icons/hi2";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDeleteProject } from "./useDeleteProject";
import { ITEMS_PER_PAGE } from "../../utils/constants";
import { calcProgress, capitalize } from "../../utils/helpers";
import { format } from "date-fns";
import { useCurrentUser } from "../authentication/useCurrentUser";

import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";
import Menu from "../../ui/Menu";
import Modal from "../../ui/Modal";
import ModalConfirm from "../../ui/ModalConfirm";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import ProjectTag from "./ProjectTag";
import ProjectProgressBar from "./ProjectProgressBar";

const UserAvatar = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  cursor: pointer;
`;

function ProjectsTable({ projects }) {
  const [searchParams] = useSearchParams();
  const currentPage = +searchParams.get("page") || 1;
  const navigate = useNavigate();
  const { deleteProject, isDeletingProject } = useDeleteProject();
  const { user, isPending } = useCurrentUser();
  if (isPending) return <Spinner size="page" />;
  const userData = user.user_metadata;

  const projectsToShow =
    projects.length < ITEMS_PER_PAGE
      ? projects
      : projects.slice(
          (currentPage - 1) * ITEMS_PER_PAGE,
          currentPage * ITEMS_PER_PAGE
        );

  if (projectsToShow.length === 0)
    return <Heading as="h4">No projects to show</Heading>;

  return (
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
          <Table.Data>Created by</Table.Data>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {projectsToShow.map((project, index) => (
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
              <ProjectProgressBar progress={calcProgress(project.tasks)} />
            </Table.Data>
            <Table.Data>
              {project?.priority ? (
                <ProjectTag
                  tag={capitalize(project.priority)}
                  color={project.priority}
                />
              ) : (
                "—"
              )}
            </Table.Data>
            <Table.Data>
              <UserAvatar
                src={userData.avatar}
                alt="User avatar"
                onClick={() => navigate(`/app/profile/${user.id}`)}
              />
            </Table.Data>
            <Table.Data>
              <Modal>
                <Menu>
                  <Menu.Open
                    openId={project.id}
                    lastChild={index + 1 === projectsToShow.length}
                  />

                  <Menu.List openId={project.id}>
                    <Menu.ListItem
                      icon={<HiEye />}
                      onClick={() =>
                        navigate(`/app/projects/project/${project.id}`)
                      }
                    >
                      View
                    </Menu.ListItem>
                    <Menu.ListItem
                      icon={<HiOutlinePencil />}
                      onClick={() =>
                        navigate(`/app/projects/project/edit`, {
                          state: project,
                        })
                      }
                    >
                      Edit
                    </Menu.ListItem>
                    <Modal.Open opens="delete">
                      <Menu.ListItem icon={<HiOutlineTrash />}>
                        Delete
                      </Menu.ListItem>
                    </Modal.Open>
                  </Menu.List>
                </Menu>

                <Modal.Window name="delete">
                  <ModalConfirm
                    action="Delete project"
                    onConfirm={() => {
                      if (projectsToShow.length === 1) {
                        if (currentPage > 1) {
                          navigate(
                            `/app/projects?view=table&page=${currentPage - 1}`
                          );
                        }
                      }
                      deleteProject(project.id);
                    }}
                    isLoading={isDeletingProject}
                  />
                </Modal.Window>
              </Modal>
            </Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Pagination items={projects} />
      </Table.Footer>
    </Table>
  );
}

export default ProjectsTable;
