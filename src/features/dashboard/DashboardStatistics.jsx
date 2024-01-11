import { HiOutlineCheckBadge, HiOutlineRectangleStack } from "react-icons/hi2";
import Statistic from "./Statistic";
import Statistics from "./Statistics";
import styled from "styled-components";

const StyledDashboardStatistics = styled(Statistics)`
  grid-row: 2/ 3;
  grid-column: 2;
  display: flex;
  flex-wrap: wrap;
`;

function DashboardStatistics({
  finishedTasks,
  finishedProjects,
  createdTasks,
  createdProjects,
}) {
  return (
    <StyledDashboardStatistics>
      <Statistic
        title="Finished Tasks"
        stat={finishedTasks.length}
        icon={<HiOutlineCheckBadge />}
      />
      <Statistic
        title="Finished Projects"
        stat={finishedProjects.length}
        icon={<HiOutlineCheckBadge />}
      />
      <Statistic
        title="Created Projects"
        stat={createdProjects.length}
        icon={<HiOutlineRectangleStack />}
      />
      <Statistic
        title="Created Tasks"
        stat={createdTasks.length}
        icon={<HiOutlineRectangleStack />}
      />
    </StyledDashboardStatistics>
  );
}

export default DashboardStatistics;
