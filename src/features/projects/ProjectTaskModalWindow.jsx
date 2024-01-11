import styled from "styled-components";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Icon from "../../ui/Icon";
import { HiOutlineXMark } from "react-icons/hi2";
import FormSection from "../../ui/FormSection";
import FormInput from "../../ui/FormInput";
import { useForm } from "react-hook-form";
import DateInput from "../../ui/DateInput";
import { format, startOfToday } from "date-fns";
import Select from "../../ui/Select";
import PrimaryButton from "../../ui/PrimaryButton";
import { capitalize } from "lodash";
import { v4 as uuidv4 } from "uuid";

const StyledProjectTaskModalWindow = styled.div`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  padding: 1.5rem 2.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TaskForm = styled.form`
  & > button {
    width: 100%;
    margin-top: 1rem;
  }
`;

function ProjectTaskModalWindow({
  title,
  onClose,
  project,
  onConfirm,
  isLoading,
  action,
  type,
  task,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const today = format(startOfToday(), "MMMM-dd-yyyy");

  function onSubmit(formData) {
    const newTask = {
      created_at: new Date(),
      id: `task-${uuidv4()}`,
      type: formData.type,
      task: formData.title,
      priority: formData.priority,
      due_date: format(new Date(formData.date), "yyyy-MM-d") || today,
      finished:
        type === "finished"
          ? format(new Date(formData.date), "yyyy-MM-d")
          : null,
    };
    console.log(newTask);
    const projectTasks =
      action === "create"
        ? project.tasks
        : project.tasks.filter((projectTask) => projectTask.id !== task.id);
    const newTasks = [newTask, ...projectTasks];

    onConfirm(newTasks);
    onClose();
  }

  let defaultDate;
  if (action === "create") defaultDate = today;
  else {
    defaultDate = task.due_date
      ? format(new Date(task.due_date), "MMMM-d-yyyy")
      : null;
  }

  return (
    <StyledProjectTaskModalWindow>
      <Row>
        <Heading as="h4">{capitalize(title)}</Heading>
        <Icon onClick={onClose}>
          <HiOutlineXMark />
        </Icon>
      </Row>
      <TaskForm onSubmit={handleSubmit(onSubmit)}>
        <FormSection inputLabel="Task" error={errors?.title?.message}>
          <FormInput
            type="text"
            placeholder="Task"
            defaultValue={task?.task}
            id="title"
            {...register("title", { required: "Task title is required" })}
          />
        </FormSection>
        <FormSection inputLabel="Due date" error={errors?.date?.message}>
          <DateInput
            date={defaultDate}
            register={register}
            id="date"
            setValue={setValue}
            required
          />
        </FormSection>
        <FormSection inputLabel="Priority">
          <Select
            options={[
              { tag: "Low", value: "low" },
              { tag: "Normal", value: "normal" },
              { tag: "High", value: "high" },
            ]}
            id="priority"
            register={register}
            setValue={setValue}
            defaultValue={task?.priority || "normal"}
          />
        </FormSection>
        <FormSection inputLabel="Type">
          <Select
            options={[
              { tag: "Active", value: "active" },
              { tag: "To do", value: "todo" },
              { tag: "Finished", value: "finished" },
            ]}
            id="type"
            register={register}
            setValue={setValue}
            defaultValue={type || task?.type}
          />
        </FormSection>
        <PrimaryButton type="submit" disabled={isLoading}>
          Submit
        </PrimaryButton>
      </TaskForm>
    </StyledProjectTaskModalWindow>
  );
}

export default ProjectTaskModalWindow;
