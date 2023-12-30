import styled from "styled-components";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import {
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlinePaperClip,
  HiOutlinePencil,
  HiOutlineSquare3Stack3D,
  HiOutlineTrash,
  HiOutlineUser,
} from "react-icons/hi2";
import Tag from "../../ui/Tag";
import Divider from "../../ui/Divider";
import { Link, useNavigate } from "react-router-dom";
import ProjectUsers from "./ProjectUsers";
import Menu from "../../ui/Menu";
import Modal from "../../ui/Modal";
import ModalConfirm from "../../ui/ModalConfirm";
import { useDeleteProject } from "./useDeleteProject";

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

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
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

const Dot = styled.span`
  height: 5px;
  width: 5px;
  background-color: var(--color-grey-200);
  border-radius: 50%;
`;

function ProjectItem({ project, user }) {
  const { id: projectId, description, name, solo } = project;
  const navigate = useNavigate();
  const { deleteProject, isDeletingProject } = useDeleteProject();
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
      <Tag type={solo ? "solo" : "team"}>{solo ? "Solo" : "Team"}</Tag>
      <Divider />
      <InfoContainer>
        {!solo && (
          <ProjectUsers>
            <img src={user.avatar} alt="user" />
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="user"
            />
          </ProjectUsers>
        )}

        <div>
          <Info>
            <HiOutlineSquare3Stack3D />
            <span>3 Tasks</span>
          </Info>
          <Dot />
          <Info>
            <HiOutlinePaperClip />
            <span>0</span>
          </Info>
          <Dot />
          <Info>
            <HiOutlineChatBubbleLeftEllipsis />
            <span>2</span>
          </Info>
        </div>
      </InfoContainer>
    </StyledProjectItem>
  );
}

export default ProjectItem;
