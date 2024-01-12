import styled from "styled-components";
import ChartHeading from "./ChartHeading";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useThemeMode } from "../../context/ThemeModeContext";
import { useAreaChartData } from "../../hooks/useAreaChartData";

const StyledDashboardAreaChart = styled.div`
  box-shadow: var(--shadow-sm);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 1rem;

  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-200);
  }
`;

function DashboardAreaChart({ tasks }) {
  const { isDarkThemeMode } = useThemeMode();

  const chartColors = isDarkThemeMode
    ? {
        text: "var(--color-grey-700)",
        chart: {
          stroke: "var(--color-accent-500)",
          fill: "var(--color-accent-200)",
        },
        tooltip: {
          background: "var(--color-grey-50)",
          color: "var(--color-grey-500)",
        },
      }
    : {
        text: "var(--color-grey-700)",
        chart: {
          stroke: "var(--color-accent-500)",
          fill: "var(--color-accent-200)",
        },
        tooltip: {
          background: "var(--color-grey-50)",
          color: "var(--color-grey-500)",
        },
      };

  const { chartData } = useAreaChartData(tasks);

  return (
    <StyledDashboardAreaChart>
      <ChartHeading style={{ marginBottom: "1rem" }}>
        Finished Tasks Over Time
      </ChartHeading>
      <ResponsiveContainer height={500}>
        <AreaChart data={chartData}>
          <XAxis
            dataKey="date"
            tick={{ fill: chartColors.text }}
            tickLine={{ stroke: chartColors.text }}
          />
          <YAxis
            tick={{ fill: chartColors.text }}
            tickLine={{ stroke: chartColors.text }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: chartColors.tooltip.background,
              color: chartColors.tooltip.color,
            }}
          />
          <CartesianGrid strokeDasharray={4} />
          <Area
            dataKey="value"
            name="Finished tasks"
            strokeWidth={3}
            stroke={chartColors.chart.stroke}
            fill={chartColors.chart.fill}
            type="monotone"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledDashboardAreaChart>
  );
}

export default DashboardAreaChart;
