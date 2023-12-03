import { useForm } from "react-hook-form";
import { format, startOfToday } from "date-fns";
import styled, { keyframes } from "styled-components";

import Form from "../../ui/Form";
import FormSection from "../../ui/FormSection";
import FormInput from "../../ui/FormInput";
import Select from "../../ui/Select";
import TextArea from "../../ui/TextArea";
import { useCreateProject } from "./useCreateProject";
import Heading from "../../ui/Heading";
import DateInput from "../../ui/DateInput";
import FormButton from "../../ui/FormButton";
import { useCurrentUser } from "../authentication/useCurrentUser";
import Spinner from "../../ui/Spinner";
import { HiChevronLeft } from "react-icons/hi2";

const move = keyframes`
  0% {
    right: -500px;
  } 
  100% {
    right: 0%;
  }
`;

const StyledNewProjectForm = styled(Form)`
  position: fixed;
  z-index: 1000;
  height: 100%;
  width: 50rem;
  top: 0;
  right: 0;
  background-color: var(--color-grey-0);
  /* animation: ${move} 0.2s linear; */
  border-top-left-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.75fr repeat(8, 1fr);
  row-gap: 1rem;
  overflow-x: hidden;
  overflow-y: auto;

  & h3 {
    display: flex;
    align-items: center;
    grid-column: 1 / -1;
    margin-bottom: 0.5rem;
    color: var(--color-accent-700);
  }
`;

const CloseButton = styled.button`
  background-color: var(--color-accent-500);
  position: absolute;
  padding: 0.25rem;
  top: 1%;
  left: 2%;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: var(--color-accent-700);
  }
  & svg {
    color: var(--color-white);
    font-size: 1.25rem;
  }
`;

function NewProjectForm({ closeForm }) {
  const today = format(startOfToday(), "MMMM-dd-yyyy");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { user } = useCurrentUser();
  const { createProject, isCreating } = useCreateProject();

  function onSubmit(formData) {
    console.log(formData);
    const newProject = {
      name: formData.projectName,
      type: formData.projectType,
      description: formData.description,
      due_date:
        formData.dueDate !== null
          ? format(new Date(formData.dueDate), "yyyy-MM-dd")
          : null,
      start_date:
        format(new Date(formData.startDate), "yyyy-MM-dd") ||
        format(startOfToday(), "yyyy-MM-dd"),
      status: formData.status,
      solo: true,
      progress: 0,
      priority: formData.priority,
      user_ids: [user.id],
    };
    console.log(newProject);
    createProject(newProject);
    reset();
    closeForm();
  }

  return (
    <StyledNewProjectForm onSubmit={handleSubmit(onSubmit)}>
      <CloseButton onClick={closeForm}>
        <HiChevronLeft />
      </CloseButton>
      <Heading as="h3" style={{ marginTop: "0.5rem" }}>
        Create new project
      </Heading>
      <FormSection
        inputLabel="Project name"
        error={errors?.projectName?.message}
        gridArea={{ column: "1 / -1", row: "2 / 3" }}
      >
        <FormInput
          type="text"
          id="projectName"
          {...register("projectName", {
            required: "Project name is required",
          })}
          placeholder="Enter project name"
        />
      </FormSection>
      <FormSection
        inputLabel="Project type"
        error={errors?.projectType?.message}
      >
        <Select
          options={[
            { tag: "Development", value: "development" },
            { tag: "Design", value: "design" },
            { tag: "E-Commerce", value: "e-commerce" },
            { tag: "Entertainment", value: "entertainment" },
            { tag: "Social Media", value: "social-media" },
            { tag: "Marketing", value: "marketing" },
            { tag: "Research", value: "research" },
            { tag: "Education", value: "education" },
            { tag: "Healthcare", value: "healthcare" },
            { tag: "Finance", value: "finance" },
          ]}
          defaultValue={true}
          register={register}
          id="projectType"
          setValue={setValue}
        />
      </FormSection>
      <FormSection inputLabel="Status" error={errors?.status?.message}>
        <Select
          options={[
            { tag: "Active", value: "active" },
            { tag: "Finished", value: "finished" },
            { tag: "To Build", value: "tbd" },
            { tag: "Paused", value: "paused" },
            { tag: "Testing", value: "testing" },
            { tag: "Canceled", value: "canceled" },
          ]}
          defaultValue={true}
          register={register}
          id="status"
          setValue={setValue}
        />
      </FormSection>
      <FormSection
        inputLabel="Priority"
        gridArea={{ column: "1 / 2", row: "4 / 4" }}
      >
        <Select
          options={[
            { tag: "Normal", value: "normal" },
            { tag: "Low", value: "low" },
            { tag: "High", value: "high" },
          ]}
          defaultValue={true}
          id="priority"
          register={register}
          setValue={setValue}
        />
      </FormSection>
      <FormSection
        inputLabel="Start date"
        error={errors?.startDate?.message}
        gridArea={{ column: "1 / 2", row: "5 / 6" }}
      >
        <DateInput
          date={today}
          register={register}
          id="startDate"
          setValue={setValue}
        />
      </FormSection>
      <FormSection
        inputLabel="Due date"
        gridArea={{ column: "2 / -1", row: "5 / 6" }}
      >
        <DateInput
          date={"Unknown"}
          register={register}
          id="dueDate"
          setValue={setValue}
        />
      </FormSection>
      <FormSection
        inputLabel="Description"
        error={errors?.description?.message}
        gridArea={{ column: "1 / -1", row: "6 / 7" }}
      >
        <TextArea
          id="description"
          placeholder="Short project description"
          register={register}
          charsLimit={50}
          required={true}
        />
      </FormSection>

      <FormSection gridArea={{ column: "1 / 2", row: "7/8" }}>
        <FormButton type="submit" disabled={isCreating}>
          Submit
        </FormButton>
      </FormSection>
    </StyledNewProjectForm>
  );
}

export default NewProjectForm;
