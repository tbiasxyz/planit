import styled from "styled-components";
import ProjectTask from "./ProjectTask";
import { Droppable } from "react-beautiful-dnd";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import NewProjectTaskModalWindow from "./NewProjectTaskModalWindow";

const StyledProjectTasksColumn = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-white);
  background-color: var(--color-grey-0-transparent);
  padding: 1rem 1.25rem;
  border-radius: var(--border-radius-sm);
  min-width: 18rem;
`;

const TypeTitle = styled.h4`
  color: var(--color-grey-500);
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  gap: 0.5rem;
  & span {
    display: flex;
    align-items: center;
    color: var(--color-accent-500);
    font-size: 1.5rem;
  }
`;

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;

const NewTaskButton = styled.button`
  margin: 1rem 0 0.5rem 0;
  border: 2px dashed var(--color-accent-500);
  background-color: transparent;
  padding: 1rem 2rem;
  outline: none;
  cursor: pointer;
  color: var(--color-grey-500);
  font-size: 1.125rem;
  font-weight: 500;
  &:hover {
    border-color: var(--color-accent-700);
  }
`;

function ProjectTasksColumn({ title, type, project, icon }) {
  const tasksToShow = project.tasks.filter((task) => task.type === type);

  return (
    <StyledProjectTasksColumn>
      <TypeTitle>
        <span>{icon}</span> {title}
      </TypeTitle>
      <Droppable droppableId={type}>
        {(provided) => (
          <>
            <Modal>
              <Modal.Open opens="new-task">
                <NewTaskButton>New Task</NewTaskButton>
              </Modal.Open>
              <Modal.Window name="new-task">
                <NewProjectTaskModalWindow type={type} project={project} />
              </Modal.Window>
            </Modal>
            <Tasks ref={provided.innerRef} {...provided.droppableProps}>
              {tasksToShow.map((task, i) => (
                <ProjectTask
                  key={task.id}
                  task={task}
                  index={i}
                  project={project}
                />
              ))}
              {provided.placeholder}
            </Tasks>
          </>
        )}
      </Droppable>
    </StyledProjectTasksColumn>
  );
}

export default ProjectTasksColumn;