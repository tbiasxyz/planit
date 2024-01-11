const starterPieChartDataPriorityTasks = [
  { key: "low", color: "#86bb76", value: 0 },
  { key: "normal", color: "#f47d67", value: 0 },
  { key: "high", color: "#ff3b54", value: 0 },
];

const starterPieChartDataStatusTasks = [
  { key: "active", color: "var(--color-active-700)", value: 0 },
  { key: "todo", color: "var(--color-tbd-700)", value: 0 },
  { key: "finished", color: "var(--color-finished-700)", value: 0 },
];

const starterPieChartDataTypeProjects = [
  { key: "development", color: "var(--color-development-700)", value: 0 },
  { key: "design", color: "var(--color-design-700)", value: 0 },
  { key: "e-commerce", color: "var(--color-ecommerce-700)", value: 0 },
  { key: "social-media", color: "var(--color-socialmedia-700)", value: 0 },
  { key: "marketing", color: "var(--color-marketing-700)", value: 0 },
  { key: "research", color: "var(--color-research-700)", value: 0 },
  { key: "education", color: "var(--color-education-700)", value: 0 },
  { key: "healthcare", color: "var(--color-healthcare-700)", value: 0 },
  { key: "finance", color: "var(--color-finance-700)", value: 0 },
];

export function usePieChartData(items, field) {
  let starterData;
  let pieChartData;
  switch (field) {
    case "priorityTasks": {
      starterData = starterPieChartDataPriorityTasks;
      const priorityCount = {};

      items.forEach((task) => {
        const { priority } = task;
        priorityCount[priority] = (priorityCount[priority] || 0) + 1;
      });

      pieChartData = starterData.map((obj) => ({
        ...obj,
        value: priorityCount[obj.key] || 0,
      }));
      break;
    }
    case "statusTasks": {
      starterData = starterPieChartDataStatusTasks;
      const statusCount = {};
      items.forEach((task) => {
        const { type } = task;
        statusCount[type] = (statusCount[type] || 0) + 1;
      });
      pieChartData = starterData.map((obj) => ({
        ...obj,
        value: statusCount[obj.key] || 0,
      }));
      break;
    }
    case "typeProjects": {
      starterData = starterPieChartDataTypeProjects;
      const typeCount = {};
      items.forEach((project) => {
        const { type } = project;
        typeCount[type] = (typeCount[type] || 0) + 1;
      });
      pieChartData = starterData.map((obj) => ({
        ...obj,
        value: typeCount[obj.key] || 0,
      }));
      break;
    }
  }
  return { pieChartData };
}
