import styled from "styled-components";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Icon from "../../ui/Icon";
import { HiOutlineXMark } from "react-icons/hi2";
import Form from "../../ui/Form";
import FormSection from "../../ui/FormSection";
import FormInput from "../../ui/FormInput";
import { useForm } from "react-hook-form";
import DateInput from "../../ui/DateInput";
import { format, startOfToday } from "date-fns";
import Select from "../../ui/Select";
import PrimaryButton from "../../ui/PrimaryButton";

const StyledNewProjectTaskModalWindow = styled.div`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  padding: 1.5rem 2.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewTaskForm = styled.form`
  & > button {
    width: 100%;
    margin-top: 1rem;
  }
`;

function NewProjectTaskModalWindow({ type, onClose, project }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  function onSubmit(formData) {
    console.log(formData);
    const projectTasks = project.tasks;
    const newTask = {
      type: formData.type,
      task: formData.title,
      due_date: formData.due_date,
    };
    console.log(newTask);
    console.log(projectTasks);
  }
  //fix dates (date input) - everywhere, new project etc.
  const today = format(startOfToday(), "MMMM-dd-yyyy");
  return (
    <StyledNewProjectTaskModalWindow>
      <Row>
        <Heading as="h4">Create new task</Heading>
        <Icon onClick={onClose}>
          <HiOutlineXMark />
        </Icon>
      </Row>
      <NewTaskForm onSubmit={handleSubmit(onSubmit)}>
        <FormSection inputLabel="Task" error={errors?.title?.message}>
          <FormInput
            type="text"
            placeholder="Task"
            id="title"
            {...register("title", { required: "Task title is required" })}
          />
        </FormSection>
        <FormSection inputLabel="Due date">
          <DateInput
            date={today}
            register={register}
            id="dueDate"
            setValue={setValue}
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
            defaultValue="normal"
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
            defaultValue={type}
          />
        </FormSection>
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </NewTaskForm>
    </StyledNewProjectTaskModalWindow>
  );
}

export default NewProjectTaskModalWindow;
