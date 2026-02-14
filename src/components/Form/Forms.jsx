import { NavLink } from "react-router-dom";

function Forms() {
  const links = [
    { name: "Form 1", path: "/form" },
    { name: "Form 2", path: "/form1" },
    { name: "Form 3", path: "/form2" },
    { name: "Form 4", path: "/form3" },
    { name: "Form 5", path: "/form4" },
    { name: "Form 6", path: "/form5" },
    { name: "Form 7", path: "/form6" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Forms Navigation
        </h2>

        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-center py-2 rounded-lg transition font-medium
                ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-black hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forms;
