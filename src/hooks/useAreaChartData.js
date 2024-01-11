import { eachDayOfInterval, max, min, parse, subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";

export function useAreaChartData(tasks) {
  const [searchParams] = useSearchParams();
  let days = searchParams.get("last") || 7;

  const data = tasks
    ?.filter((task) => task.finished !== null)
    .reduce((acc, task) => {
      const date = new Date(task.finished).toLocaleDateString();
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

  const earliestDay = min(
    [...Object.keys(data)]?.map((stringDate) =>
      parse(stringDate, "dd. MM. yyyy", new Date())
    )
  );

  const latestDay = max(
    [...Object.keys(data)]?.map((stringDate) =>
      parse(stringDate, "dd. MM. yyyy", new Date())
    )
  );

  // let allDates;
  // if (days !== "all")
  const dataLength = [...Object.keys(data)].length;
  if (dataLength === 0) days = 7;
  const allDates =
    days !== "all"
      ? eachDayOfInterval({
          start: subDays(new Date(), days === "all" ? 0 : days - 1),
          end: new Date(),
        })
      : eachDayOfInterval({ start: earliestDay, end: latestDay });

  let chartData = allDates.map((date) => {
    const formattedDate = new Date(date).toLocaleDateString();
    const value = data[formattedDate] || 0;
    return { date: formattedDate, value };
  });

  return { chartData };
}
