import styled from "styled-components";
import { capitalize } from "lodash";
import { useDeleteProject } from "./useDeleteProject";
import {
  HiOutlinePencil,
  HiOutlineSquare3Stack3D,
  HiOutlineTrash,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

import Divider from "../../ui/Divider";
import Menu from "../../ui/Menu";
import Modal from "../../ui/Modal";
import ModalConfirm from "../../ui/ModalConfirm";
import ProjectTag from "./ProjectTag";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

const StyledProjectItem = styled(Link)`
  background-color: var(--color-grey-0);
  padding: 1.25rem;
  min-width: 400px;
  border-radius: var(--border-radius-sm);
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
`;

const Description = styled.p`
  color: var(--color-grey-200);
  width: 100%;
  margin: 1rem 0 0.5rem 0;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  & > div {
    max-width: 8rem;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--color-grey-200);
  }

  & span {
    color: var(--color-grey-200);
  }
`;

function ProjectItem({ project }) {
  const { id: projectId, description, name } = project;
  const navigate = useNavigate();
  const { deleteProject, isDeletingProject } = useDeleteProject();

  let projectTasksText;
  if (!project.tasks.length) projectTasksText = "No Tasks";
  else {
    projectTasksText = `${project.tasks.length} ${
      project.tasks.length === 1 ? "Task" : "Tasks"
    }`;
  }
  return (
    <StyledProjectItem to={`project/${projectId}`}>
      <Row>
        <Heading as="h4">{name}</Heading>
        <Modal>
          <Menu>
            <Menu.Open openId={project.id} />
            <Menu.List openId={project.id}>
              <Menu.ListItem
                icon={<HiOutlineUser />}
                onClick={() => navigate(`/app/projects/project/${projectId}`)}
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
                <Menu.ListItem icon={<HiOutlineTrash />}>Delete</Menu.ListItem>
              </Modal.Open>
            </Menu.List>
          </Menu>
          <Modal.Window name="delete">
            <ModalConfirm
              action="Delete project"
              onConfirm={() => deleteProject(projectId)}
              isLoading={isDeletingProject}
            />
          </Modal.Window>
        </Modal>
      </Row>
      <Description>{description}</Description>
      <TagsContainer>
        <ProjectTag
          tag={capitalize(project.priority)}
          color={project.priority}
        />
        <ProjectTag tag={capitalize(project.status)} color={project.status} />
        <ProjectTag
          color="project"
          tag={capitalize(project.type).replace("-", " ")}
        />
      </TagsContainer>
      <Divider />
      <Info>
        <HiOutlineSquare3Stack3D />
        <span>{projectTasksText}</span>
      </Info>
    </StyledProjectItem>
  );
}

export default ProjectItem;
