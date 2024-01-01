import { format } from "date-fns";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import ProjectTag from "./ProjectTag";
import { capitalize } from "lodash";
import Modal from "../../ui/Modal";
import Menu from "../../ui/Menu";
import Row from "../../ui/Row";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import ModalConfirm from "../../ui/ModalConfirm";
import { useDeleteProjectTask } from "./useDeleteProjectTask";
import ProjectTaskModalWindow from "./ProjectTaskModalWindow";
import { useUpdateProjectTasks } from "./useUpdateProjectTasks";

const StyledProjectTask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${(props) =>
    props.isDragging ? "var(--color-accent-700)" : "var(--color-accent-500)"};
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);
  cursor: grab;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

const TaskTitle = styled.span`
  color: var(--color-white);
  font-weight: 500;
  font-size: 1.125rem;
  width: 85%;
`;

const TaskDate = styled.time`
  font-style: italic;
`;

function ProjectTask({ task, index, project }) {
  const { deleteProjectTask } = useDeleteProjectTask();
  const { updateProjectTasks, isUpdatingProjectTasks } =
    useUpdateProjectTasks();
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <StyledProjectTask
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Modal>
            <Row>
              <TaskTitle>{task.task}</TaskTitle>
              <Menu>
                <Menu.Open openId={task.id} color="white" />
                <Menu.List openId={task.id}>
                  <Modal.Open opens="edit-task">
                    <Menu.ListItem icon={<HiOutlinePencil />}>
                      Edit
                    </Menu.ListItem>
                  </Modal.Open>
                  <Modal.Open opens="delete-task">
                    <Menu.ListItem icon={<HiOutlineTrash />}>
                      Delete
                    </Menu.ListItem>
                  </Modal.Open>
                </Menu.List>
              </Menu>
            </Row>
            <ProjectTag tag={capitalize(task.priority)} color={task.priority} />
            <TaskDate time={format(new Date(task.due_date), "d MMMM, yyyy")}>
              Due: {format(new Date(task.due_date), "d MMMM, yyyy")}
            </TaskDate>
            <Modal.Window name="delete-task">
              <ModalConfirm
                action="Delete task"
                onConfirm={() =>
                  deleteProjectTask({
                    project: project,
                    taskId: task.id,
                  })
                }
              />
            </Modal.Window>
            <Modal.Window name="edit-task">
              <ProjectTaskModalWindow
                title="Edit project task"
                action="edit"
                task={task}
                project={project}
                onConfirm={(newTasks) =>
                  updateProjectTasks({ projectId: project.id, tasks: newTasks })
                }
                isLoading={isUpdatingProjectTasks}
              />
            </Modal.Window>
          </Modal>
        </StyledProjectTask>
      )}
    </Draggable>
  );
}

export default ProjectTask;
