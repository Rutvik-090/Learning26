function MapDemo3() {
  const students = [
    {
      id: 1,
      name: "Rutvik",
      age: 22,
      marks: 92,
      city: "Navsari",
      gender: "male",
      hobby: "Gaming",
    },
    {
      id: 2,
      name: "Mihir",
      age: 22,
      marks: 85,
      city: "Valsad",
      gender: "male",
      hobby: "Gaming",
    },
    {
      id: 3,
      name: "Mox",
      age: 22,
      marks: 85,
      city: "Navsari",
      gender: "male",
      hobby: "Gaming",
    },
    {
      id: 4,
      name: "Rushang",
      age: 22,
      marks: 85,
      city: "Valsad",
      gender: "male",
      hobby: "Gaming",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Students Details
      </h1>

      <div className="overflow-x-auto flex justify-center">
        <table className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
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
            {students.map((student, index) => (
              <tr
                key={student.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                <td className="px-4 py-3">{student.id}</td>
                <td className="px-4 py-3 font-medium">{student.name}</td>
                <td className="px-4 py-3">{student.age}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-semibold ${
                      student.marks >= 90
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {student.marks}
                  </span>
                </td>
                <td className="px-4 py-3">{student.city}</td>
                <td className="px-4 py-3 capitalize">{student.gender}</td>
                <td className="px-4 py-3">{student.hobby}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MapDemo3;
