import { useForm } from "react-hook-form";
import { format } from "date-fns";
import styled, { keyframes } from "styled-components";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import FormInput from "../../ui/FormInput";
import Select from "../../ui/Select";
import TextArea from "../../ui/TextArea";
import Button from "../../ui/Button";
import { useCreateProject } from "./useCreateProject";
import Heading from "../../ui/Heading";
import DatePicker from "../../ui/DatePicker";

const move = keyframes`
  0% {
    right: -500px;
  } 
  100% {
    right: 0%;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
  grid-column: 1 / -1;
  grid-row: 6 / 7;
`;

const StyledNewProjectForm = styled(Form)`
  position: fixed;
  z-index: 1000;
  height: 100%;
  width: 50rem;
  top: 0;
  right: 0;
  background-color: var(--color-grey-0);
  animation: ${move} 0.2s linear;
  border-top-left-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.75fr repeat(7, 1fr);

  & h3 {
    display: flex;
    align-items: center;
    grid-column: 1 / -1;
    margin-bottom: 0.5rem;
    color: var(--color-accent-700);
  }
`;

function NewProjectForm({ closeForm }) {
  const today = format(new Date(), "yyyy-MM-dd");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { createProject, isCreating } = useCreateProject();

  function onSubmit(formData) {
    console.log(formData);
    const newProject = {
      name: formData.projectName,
      type: formData.projectType,
      description: formData.description,
      finish_date: new Date(formData.finishDate) || null,
      start_date: new Date(formData.startDate) || null,
      // Temperary data - fix later
      status: "active",
      priority: "normal",
      solo: false,
      progress: 0,
    };
    createProject(newProject);
    reset();
    closeForm();
  }

  // https://dribbble.com/shots/23021203-Shipping-details

  return (
    <StyledNewProjectForm onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h3">Create new project</Heading>
      <FormRow
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
      </FormRow>
      <FormRow inputLabel="Project type" error={errors?.projectType?.message}>
        <Select
          // options={[
          //   { tag: "Development", icon: <HiOutlineWrenchScrewdriver /> },
          //   { tag: "Design", icon: <HiOutlinePaintBrush /> },
          //   { tag: "E-Commerce", icon: <HiOutlineGlobeAlt /> },
          // ]}
          options={["Development", "Design", "E-Commerce"]}
          register={register}
          id="projectType"
          setValue={setValue}
        />
      </FormRow>
      <FormRow inputLabel="Status" error={errors?.status?.message}>
        <Select
          options={["Active", "Finished", "To Build", "Paused", "Testing"]}
          register={register}
          id="status"
          setValue={setValue}
        />
      </FormRow>
      <FormRow inputLabel="Start date" error={errors?.startDate?.message}>
        <FormInput
          type="date"
          defaultValue={today}
          id="startDate"
          {...register("startDate", {
            required: "Start date is required",
          })}
        />
      </FormRow>
      <FormRow inputLabel="Finish date">
        <FormInput type="date" id="finishDate" {...register("finishDate")} />
      </FormRow>
      <FormRow
        inputLabel="Description"
        error={errors?.description?.message}
        gridArea={{ column: "1 / -1", row: "5 / 6" }}
      >
        <TextArea
          id="description"
          {...register("description", {
            required: "Description is required",
          })}
        />
      </FormRow>
      <Buttons>
        <Button type="reset" disabled={isCreating}>
          Reset
        </Button>
        <Button type="submit" disabled={isCreating}>
          Submit
        </Button>
      </Buttons>

      <DatePicker />
    </StyledNewProjectForm>
  );
}

export default NewProjectForm;
