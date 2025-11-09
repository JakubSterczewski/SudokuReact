import { NavLink, Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header className="flex flex-row bg-amber-500 px-8 py-4">
      SUDOKU
      <nav className="flex w-full justify-between bg-amber-700">
        <ul className="flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : "")}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/battles"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Battles
            </NavLink>
          </li>
        </ul>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
