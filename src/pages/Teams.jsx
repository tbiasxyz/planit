import { useSearchParams } from "react-router-dom";
import Row from "../ui/Row";
import ToggleView from "../ui/ToggleView";
import TeamsList from "../features/teams/TeamsList";
import TeamsTable from "../features/teams/TeamsTable";

function Teams() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view") || "list";
  return (
    <>
      <Row>
        <ToggleView />
        {/* <span>Filter</span> */}
      </Row>
      {view === "list" && <TeamsList />}
      {view === "table" && <TeamsTable />}
    </>
  );
}

export default Teams;
