import { Refine } from "@refinedev/core";
import { DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";
import { Toaster } from "./components/refine-ui/notification/toaster";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import Dashboard from "@/pages/dashboard";
import { BookOpen, Home } from "lucide-react";
import { Layout } from "@/components/refine-ui/layout/layout";
import SubjectsList from "@/pages/subjects/list";
import SubjectsCreate from "@/pages/subjects/create";
import { dataProvider } from "@/providers/data";

/**
 * Root application component that configures Refine providers, routing, resources, and global UI.
 *
 * Sets up browser routing, theme and devtools providers, Refine core with data/notification/router providers,
 * application resources (dashboard and subjects), nested routes for the dashboard and subjects pages, and global
 * UI elements such as the Toaster, command bar, unsaved-changes notifier, and document title handler.
 *
 * @returns The root JSX element that renders the configured application.
 */
function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "rOcJiT-18znHi-MHHUR4",
              }}
              resources={[
                {
                  name: "dashboard",
                  list: "/",
                  meta: {
                    label: "Home",
                    icon: <Home />,
                  },
                },

                {
                  name: "subjects",
                  list: "/subjects",
                  create: "/subjects/create",
                  meta: {
                    label: "Subjects",
                    icon: <BookOpen />,
                  },
                },
              ]}
            >
              <Routes>
                <Route
                  element={
                    <Layout>
                      <Outlet />
                    </Layout>
                  }
                >
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/subjects">
                    <Route index element={<SubjectsList />} />
                    <Route path="create" element={<SubjectsCreate />} />
                  </Route>
                </Route>
              </Routes>
              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;