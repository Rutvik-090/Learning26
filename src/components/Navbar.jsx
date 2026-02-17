import { NavLink } from "react-router-dom";
import Netflix_Logo from "../assets/Netflix_Logo.png";

function Navbar() {
  return (
    <nav className="bg-black text-white px-10 py-3">
      <div className="max-w-7xl flex items-center gap-10">
        <NavLink to="/home" className="shrink-0">
          <img
            src={Netflix_Logo}
            alt="Netflix"
            className="h-14 w-auto object-contain"
          />
        </NavLink>

        <ul className="flex gap-6 text-md font-medium">
          {["Home", "Movies", "Shows", "Trending", "News"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `transition ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}

          {/* <li>
            <NavLink
              to="/characters"
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Characters
            </NavLink>
          </li> */}

          <li>
            <NavLink
              to="/teams"
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Teams
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/functiondemo"
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Function Demo 1
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/inputhandling"
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Input Handling
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/forms"
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Forms
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/api"
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              API Demo
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/api-task-1"
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              API Task 1
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/api-task-2"
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              API Task 2
            </NavLink>
          </li>
        </ul>

        <div className="ml-auto flex items-center gap-6">
          {/* Placeholder for future: Search, Profile, Notifications */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
