import { useForm } from "react-hook-form";
import { format, startOfToday } from "date-fns";
import { useEditProject } from "./useEditProject";
import styled from "styled-components";
import _ from "lodash";

import Form from "../../ui/Form";
import FormButton from "../../ui/FormButton";
import TextArea from "../../ui/TextArea";
import FormSection from "../../ui/FormSection";
import FormInput from "../../ui/FormInput";
import DateInput from "../../ui/DateInput";
import Select from "../../ui/Select";

const StyledEditProjectForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function EditProjectForm({ project }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { editProject, isEditingProject } = useEditProject();

  const initialProjectObj = {
    name: project.name,
    description: project.description,
    due_date: project.due_date
      ? format(new Date(project.due_date), "MMMM-dd-yyyy")
      : null,
    start_date: project.start_date
      ? format(new Date(project.start_date), "MMMM-dd-yyyy")
      : null,
    status: project.status,
    type: project.type,
    priority: project.priority,
  };

  function onSubmit(formData, e) {
    e.preventDefault();

    const formattedFormData = {
      ...formData,
      start_date: formData.start_date
        ? format(new Date(formData.start_date), "MMMM-dd-yyyy")
        : null,
      due_date: formData.due_date
        ? format(new Date(formData.due_date), "MMMM-dd-yyyy")
        : null,
      finish_date: formData.finish_date
        ? format(new Date(formData.finish_date), "MMMM-dd-yyyy")
        : null,
    };

    if (_.isEqual(initialProjectObj, formattedFormData)) return;
    const dataToEdit = {};

    for (const [key, value] of Object.entries(formData)) {
      if (value !== initialProjectObj[key]) {
        dataToEdit[key] = value;
      }
    }
    const projectId = project.id;
    editProject({ dataToEdit, projectId });
  }

  const today = format(startOfToday(), "MMMM-dd-yyyy");

  return (
    <StyledEditProjectForm onSubmit={handleSubmit(onSubmit)}>
      <FormSection
        inputLabel="Project name"
        error={errors?.projectName?.message}
        gridArea={{ column: "1 / -1" }}
      >
        <FormInput
          type="text"
          id="name"
          {...register("name", {
            required: "Project name is required",
          })}
          placeholder="Enter project name"
          defaultValue={project.name}
        />
      </FormSection>
      <FormSection
        inputLabel="Start date"
        error={errors?.start_date?.message}
        gridArea={{ column: "1 / 2" }}
      >
        <DateInput
          date={
            project.start_date
              ? format(new Date(project.start_date), "MMMM-dd-yyyy")
              : today
          }
          register={register}
          id="start_date"
          required={true}
          setValue={setValue}
        />
      </FormSection>
      <FormSection inputLabel="Due date" gridArea={{ column: "2 / -1" }}>
        <DateInput
          date={
            project.due_date
              ? format(new Date(project.due_date), "MMMM-dd-yyyy")
              : "Unknown"
          }
          register={register}
          id="due_date"
          setValue={setValue}
        />
      </FormSection>
      <FormSection
        gridArea={{ column: "1 / 2", row: "3/4" }}
        inputLabel="Finish date"
      >
        <DateInput
          date={
            project.finish_date
              ? format(new Date(project.finish_date), "MMMM-dd-yyyy")
              : "Unknown"
          }
          register={register}
          id="finish_date"
          setValue={setValue}
        />
      </FormSection>
      <FormSection
        inputLabel="Project type"
        error={errors?.projectType?.message}
        gridArea={{ row: "4/5" }}
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
          defaultValue={project.type}
          register={register}
          id="type"
          setValue={setValue}
        />
      </FormSection>
      <FormSection
        inputLabel="Status"
        error={errors?.status?.message}
        gridArea={{ row: "4/5" }}
      >
        <Select
          options={[
            { tag: "Active", value: "active" },
            { tag: "Finished", value: "finished" },
            { tag: "To Build", value: "tbd" },
            { tag: "Paused", value: "paused" },
            { tag: "Testing", value: "testing" },
            { tag: "Canceled", value: "canceled" },
          ]}
          defaultValue={project.status}
          register={register}
          id="status"
          setValue={setValue}
        />
      </FormSection>
      <FormSection inputLabel="Priority" gridArea={{ column: "1 / 2" }}>
        <Select
          options={[
            { tag: "Normal", value: "normal" },
            { tag: "Low", value: "low" },
            { tag: "High", value: "high" },
          ]}
          defaultValue={project.priority}
          id="priority"
          register={register}
          setValue={setValue}
        />
      </FormSection>
      <FormSection
        inputLabel="Description"
        error={errors?.description?.message}
        gridArea={{ column: "1 / -1" }}
      >
        <TextArea
          id="description"
          placeholder="Short project description"
          register={register}
          charsLimit={100}
          required={true}
          defaultText={project.description}
        />
      </FormSection>

      <FormSection gridArea={{ column: "1 / 2" }}>
        <FormButton type="submit" disabled={isEditingProject}>
          Submit
        </FormButton>
      </FormSection>
    </StyledEditProjectForm>
  );
}

export default EditProjectForm;
