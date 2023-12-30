import styled from "styled-components";
import FilterAndSort from "../../ui/FilterAndSort";
import Divider from "../../ui/Divider";
import { useState } from "react";
import PrimaryButton from "../../ui/PrimaryButton";
import Row from "../../ui/Row";

// const OpenButton = styled(PrimaryButton)`
//   margin-left: auto;
// `;

const StyledProjectsFiltersAndSorts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-grey-0);
  margin-bottom: 1rem;
  padding: 0.75rem 0.5rem;
  border-radius: var(--border-radius-sm);
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SectionHeading = styled.span`
  color: var(--color-accent-500);
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 500;
`;

const Section = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 0.5rem;
`;

function ProjectsFiltersAndSorts() {
  // if (!isOpened)
  //   return (
  //     <Row>
  //       <OpenButton onClick={() => setIsOpened(!isOpened)}>
  //         {isOpened ? "Close" : "Open"} Filter and Sort
  //       </OpenButton>
  //     </Row>
  //   );
  return (
    <>
      {/* <Row>
        <OpenButton onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? "Close" : "Open"} Filter and Sort
        </OpenButton>
      </Row> */}
      <StyledProjectsFiltersAndSorts>
        <SectionContainer>
          <SectionHeading>Filter</SectionHeading>
          <Section>
            <FilterAndSort field="status" type="filter">
              <FilterAndSort.Menu
                id="status"
                options={[
                  { label: "All", value: "all" },
                  { label: "Active", value: "active" },
                  { label: "Finished", value: "finished" },
                  { label: "To Build", value: "tbd" },
                  { label: "Paused", value: "paused" },
                  { label: "Testing", value: "testing" },
                  { label: "Canceled", value: "canceled" },
                ]}
              />
            </FilterAndSort>
            <FilterAndSort field="type" type="filter">
              <FilterAndSort.Menu
                id="type"
                options={[
                  { label: "All", value: "all" },
                  { label: "Development", value: "development" },
                  { label: "Design", value: "design" },
                  { label: "E-Commerce", value: "ecommerce" },
                  { label: "Entertainment", value: "entertainment" },
                  { label: "Social Media", value: "socialmedia" },
                  { label: "Marketing", value: "marketing" },
                  { label: "Research", value: "research" },
                  { label: "Education", value: "education" },
                  { label: "Healthcare", value: "healthcare" },
                  { label: "Finance", value: "finance" },
                ]}
              />
            </FilterAndSort>
            <FilterAndSort field="priority" type="filter">
              <FilterAndSort.Menu
                id="priority"
                options={[
                  { label: "All", value: "all" },
                  { label: "High", value: "high" },
                  { label: "Normal", value: "normal" },
                  { label: "Low", value: "low" },
                ]}
              />
            </FilterAndSort>
          </Section>
        </SectionContainer>
        <Divider />
        <SectionContainer>
          <SectionHeading>Sort By</SectionHeading>
          <Section>
            <FilterAndSort field="name" type="sort">
              <FilterAndSort.Menu
                id="name"
                options={[
                  { label: "All", value: "all" },
                  { label: "Sort by name (A-Z)", value: "nameAsc" },
                  { label: "Sort by name (Z-A)", value: "nameDesc" },
                ]}
              />
            </FilterAndSort>
            <FilterAndSort field="progress" type="sort">
              <FilterAndSort.Menu
                id="progress"
                options={[
                  { label: "All", value: "all" },
                  {
                    label: "Sort by progress (low-high)",
                    value: "progressAsc",
                  },
                  {
                    label: "Sort by progress (high-low)",
                    value: "progressDesc",
                  },
                ]}
              />
            </FilterAndSort>
            <FilterAndSort type="sort" field="start">
              <FilterAndSort.Menu
                id="start"
                options={[
                  { label: "All", value: "all" },
                  { label: "Sort by date (early-late)", value: "dateAsc" },
                  { label: "Sort by date (late-early)", value: "dateDesc" },
                ]}
              />
            </FilterAndSort>
          </Section>
        </SectionContainer>
      </StyledProjectsFiltersAndSorts>
    </>
  );
}

export default ProjectsFiltersAndSorts;
