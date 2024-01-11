import styled from "styled-components";
import ProjectTasksColumn from "./ProjectTasksColumn";
import { DragDropContext } from "react-beautiful-dnd";
import {
  HiOutlineBellAlert,
  HiOutlineCheckCircle,
  HiOutlineListBullet,
} from "react-icons/hi2";
import { useUpdateProjectTasks } from "./useUpdateProjectTasks";

const StyledProjectTasks = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  height: 100%;
`;

function ProjectTasks({ project }) {
  const { updateProjectTasks, isUpdatingProjectTasks } =
    useUpdateProjectTasks();
  function handleDragEnd(result) {
    const { destination, draggableId, source } = result;
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;
    let draggedTask = project.tasks.find((task) => task.id === draggableId);
    if (destination.droppableId === "finished") {
      draggedTask = { ...draggedTask, finished: new Date() };
    }
    if (
      destination.droppableId !== "finished" &&
      draggedTask.finished !== null
    ) {
      draggedTask.finished = null;
    }

    console.log(draggedTask);

    const tasksInDestinationColumn = project.tasks.filter(
      (task) => task.type === destination.droppableId
    );
    const tasksInSourceColumn = project.tasks.filter(
      (task) => task.type === source.droppableId
    );
    const allOthersTasks = project.tasks.filter(
      (task) =>
        task.type !== destination.droppableId && task.id !== draggedTask.id
    );

    const isTheSameColumn = destination.droppableId === source.droppableId;
    const updatedDraggedTask = {
      ...draggedTask,
      type: destination.droppableId,
    };

    let finalTasks;
    if (isTheSameColumn) {
      tasksInSourceColumn.splice(source.index, 1);
      tasksInSourceColumn.splice(destination.index, 0, updatedDraggedTask);
      finalTasks = [...allOthersTasks, ...tasksInSourceColumn];
    } else {
      tasksInSourceColumn.splice(source.index, 1);
      tasksInDestinationColumn.splice(destination.index, 0, updatedDraggedTask);
      finalTasks = [...allOthersTasks, ...tasksInDestinationColumn];
    }
    updateProjectTasks({
      projectId: project.id,
      tasks: finalTasks,
    });
    console.log(finalTasks);
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <StyledProjectTasks>
        <ProjectTasksColumn
          title={"Active"}
          type={"active"}
          project={project}
          icon={<HiOutlineBellAlert />}
          isLoading={isUpdatingProjectTasks}
        />
        <ProjectTasksColumn
          title={"To do"}
          type={"todo"}
          project={project}
          icon={<HiOutlineListBullet />}
          isLoading={isUpdatingProjectTasks}
        />
        <ProjectTasksColumn
          title={"Finished"}
          type={"finished"}
          project={project}
          icon={<HiOutlineCheckCircle />}
          isLoading={isUpdatingProjectTasks}
        />
      </StyledProjectTasks>
    </DragDropContext>
  );
}

export default ProjectTasks;
