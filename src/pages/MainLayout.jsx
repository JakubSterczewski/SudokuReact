import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNavigation />
      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  );
}
