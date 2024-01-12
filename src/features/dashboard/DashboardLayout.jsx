import styled from "styled-components";
import { useDashboardStats } from "../../hooks/useDashboardStats";

import Toggle from "../../ui/Toggle";
import DashboardStatistics from "./DashboardStatistics";
import DashboardPieCharts from "./DashboardPieCharts";
import DashboardAreaChart from "./DashboardAreaChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  padding: 2rem 0;
  gap: 1rem;
`;

function DashboardLayout({ projects, user }) {
  const userProjects = projects?.filter((project) =>
    project?.user_ids?.includes(user.id)
  );

  const {
    finishedTasks,
    finishedProjects,
    createdTasks,
    createdProjects,
    tasks,
    activeToDoTasks,
  } = useDashboardStats(userProjects);

  return (
    <StyledDashboardLayout>
      <Toggle
        field="last"
        options={[
          { tag: "Last 7 days", value: "7" },
          { tag: "Last 30 days", value: "30" },
          { tag: "Last 90 days", value: "90" },
          { tag: "All", value: "all" },
        ]}
      />
      <DashboardStatistics
        finishedTasks={finishedTasks}
        finishedProjects={finishedProjects}
        createdProjects={createdProjects}
        createdTasks={createdTasks}
      />
      <DashboardPieCharts
        tasks={tasks}
        activeToDoTasks={activeToDoTasks}
        createdProjects={createdProjects}
      />
      <DashboardAreaChart tasks={tasks} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
