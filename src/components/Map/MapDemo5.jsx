export const MapDemo5 = () => {
  const students = [
    {
      id: 1,
      name: "Sumit",
      age: 25,
      marks: 86,
      city: "Mumbai",
      gender: "male",
      hobby: "Reading",
    },
    {
      id: 2,
      name: "Srusti",
      age: 22,
      marks: 75,
      city: "Ahmedabad",
      gender: "female",
      hobby: "Eating",
    },
    {
      id: 3,
      name: "Ajay",
      age: 26,
      marks: 83,
      city: "Pune",
      gender: "male",
      hobby: "Playing",
    },
    {
      id: 4,
      name: "Prerna",
      age: 28,
      marks: 86,
      city: "Delhi",
      gender: "female",
      hobby: "Sleeping",
    },
    {
      id: 5,
      name: "Mihir",
      age: 21,
      marks: 95,
      city: "Valsad",
      gender: "male",
      hobby: "Valorant",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Student Table
      </h1>

      <div className="flex justify-center overflow-x-auto">
        <table className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Age</th>
              <th className="px-4 py-3 text-left">Marks</th>
              <th className="px-4 py-3 text-left">City</th>
              <th className="px-4 py-3 text-left">Gender</th>
              <th className="px-4 py-3 text-left">Hobby</th>
            </tr>
          </thead>

          <tbody>
            {students.map((st, index) => (
              <tr
                key={st.id}
                className={`
                  border-b transition
                  ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  ${st.gender === "female" ? "bg-pink-50" : ""}
                  hover:bg-gray-100
                `}
              >
                <td className="px-4 py-3">{st.id}</td>

                <td className="px-4 py-3 font-medium">{st.name}</td>

                <td
                  className={`px-4 py-3 font-semibold ${
                    st.age > 25 ? "text-red-600" : "text-gray-800"
                  }`}
                >
                  {st.age}
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-semibold
                      ${
                        st.marks >= 90
                          ? "bg-green-200 text-green-800"
                          : st.marks > 85
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                      }
                    `}
                  >
                    {st.marks}
                  </span>
                </td>

                <td className="px-4 py-3">{st.city}</td>

                <td className="px-4 py-3 capitalize">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium
                      ${
                        st.gender === "female"
                          ? "bg-pink-200 text-pink-800"
                          : "bg-blue-200 text-blue-800"
                      }
                    `}
                  >
                    {st.gender}
                  </span>
                </td>

                <td className="px-4 py-3">{st.hobby}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
