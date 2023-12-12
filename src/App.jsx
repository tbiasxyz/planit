import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ThemeModeProvider } from "./context/ThemeModeContext";
import { AccentColorProvider } from "./context/AccentColorContext";
import GlobalStyles from "./styles/GlobalStyles";

import Landing from "./pages/Landing";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import CalendarPage from "./pages/CalendarPage";
import AuthPage from "./pages/AuthPage";
import SignupForm from "./features/authentication/SignupForm";
import LoginForm from "./features/authentication/LoginForm";
import ProtectedRoute from "./pages/ProtectedRoute";
import Teams from "./pages/Teams";
import EditProfile from "./pages/EditProfile";
import { FontContextProvider } from "./context/FontContext";

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 0,
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="auth" element={<AuthPage />}>
            <Route index element={<Navigate replace to="login" />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="login" element={<LoginForm />} />
          </Route>

          <Route
            path="app"
            element={
              <ThemeModeProvider>
                <AccentColorProvider>
                  <FontContextProvider>
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  </FontContextProvider>
                </AccentColorProvider>
              </ThemeModeProvider>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="teams" element={<Teams />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/project/:projectID" element={<Project />} />
            <Route path="messages" element={<Messages />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/edit" element={<EditProfile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={10}
        containerStyle={{ marginTop: "8px" }}
        toastOptions={{
          success: {
            duration: 4000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "1rem",
            padding: "1rem 1.25rem",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
