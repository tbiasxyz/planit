import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { usePieChartData } from "../../hooks/usePieChartData";

import styled from "styled-components";
import Heading from "../../ui/Heading";
import ChartHeading from "./ChartHeading";

const StyledDashboardPieChart = styled.div`
  flex: 1;
  box-shadow: var(--shadow-sm);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 1rem;
  .recharts-legend-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .recharts-default-legend {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`;

function DashboardPieChart({
  items,
  heading = "Tasks chart",
  gridArea,
  field,
}) {
  const { pieChartData } = usePieChartData(items, field);
  const values = pieChartData.map((obj) => obj.value);
  return (
    <StyledDashboardPieChart gridArea={gridArea}>
      <ChartHeading>{heading}</ChartHeading>
      {values.every((value) => value === 0) ? (
        <Heading as="h5" style={{ marginTop: "16px" }}>
          No data to show
        </Heading>
      ) : (
        <>
          <ResponsiveContainer height={400}>
            <PieChart>
              <Pie
                data={pieChartData}
                nameKey="key"
                dataKey="value"
                innerRadius={80}
                outerRadius={100}
                cx="50%"
                cy="50%"
                paddingAngle={6}
              >
                {pieChartData.map((obj) => (
                  <Cell key={obj.key} fill={obj.color} stroke={obj.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                layout="horizontal"
                iconSize={15}
                iconType="circle"
                height="20%"
              />
            </PieChart>
          </ResponsiveContainer>
        </>
      )}
    </StyledDashboardPieChart>
  );
}

export default DashboardPieChart;
