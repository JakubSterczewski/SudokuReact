import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import MainLayout from "./pages/MainLayout";
import BattlesPage, { loader as battlesLoader } from "./pages/Battles";
import ErrorPage from "./pages/Error";
import BattlePage, { battleLoader } from "./pages/BattlePage";
import BattleErrorPage from "./pages/BattleError";
import NewBattlePage from "./pages/NewBattle";
import EditBattlePage from "./pages/EditBattle";
import DashboardPage from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "battles",
        children: [
          {
            index: true,
            element: <BattlesPage />,
            loader: battlesLoader,
          },
          {
            path: "new",
            element: <NewBattlePage />,
            // action: manipulateBattleAction,
          },
          {
            path: ":battleId",
            id: "battle-detail",
            loader: battleLoader,
            errorElement: <BattleErrorPage />,
            children: [
              {
                index: true,
                element: <BattlePage />,
                // action: deleteBattleAction,
              },
              {
                path: "edit",
                element: <EditBattlePage />,
                // action: manipulateBattleAction,
              },
            ],
          },
        ],
      },
      { path: "dashboard", element: <DashboardPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
