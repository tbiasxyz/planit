import Spinner from "../ui/Spinner";
import { useProjects } from "../features/projects/useProjects";
import { useCurrentUser } from "../features/authentication/useCurrentUser";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function Dashboard() {
  const { projects, isPending: isLoadingProjects } = useProjects();
  const { user, isPending: isLoadingUser } = useCurrentUser();

  if (isLoadingProjects || isLoadingUser) return <Spinner size="page" />;

  return <DashboardLayout projects={projects} user={user} />;
}

export default Dashboard;
