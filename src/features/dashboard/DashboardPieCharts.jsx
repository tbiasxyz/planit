import styled from "styled-components";
import DashboardPieChart from "./DashboardPieChart";

const StyledDashboardPieCharts = styled.div`
  display: flex;
  gap: 1rem;
`;

function DashboardPieCharts({ tasks, activeToDoTasks, createdProjects }) {
  return (
    <StyledDashboardPieCharts>
      <DashboardPieChart
        items={tasks}
        heading="Created Tasks (Status)"
        field="statusTasks"
      />
      <DashboardPieChart
        items={activeToDoTasks}
        heading="Active / To Do Tasks (Priority)"
        field="priorityTasks"
      />
      <DashboardPieChart
        items={createdProjects}
        heading="Created Projects (Types)"
        field="typeProjects"
      />
    </StyledDashboardPieCharts>
  );
}

export default DashboardPieCharts;
