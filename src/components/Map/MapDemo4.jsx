export const MapDemo4 = () => {
  var cities = [
    { id: 1, name: "Mumbai", population: 22000000, AQI: 189 },
    { id: 2, name: "Delhi", population: 34000000, AQI: 222 },
    { id: 3, name: "Bangalore", population: 14000000, AQI: 193 },
    { id: 4, name: "Chennai", population: 12000000, AQI: 172 },
    { id: 5, name: "Ahmedabad", population: 9000000, AQI: 174 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-shadow-gray-800">
        City details
      </h1>

      <div className="overflow-x-auto flex justify-center">
        <table className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">NAME</th>
              <th className="px-4 py-3 text-left">POPULATION</th>
              <th className="px-4 py-3 text-left">AQI</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city) => {
              return (
                <tr key={city.id} className="hover:bg-gray-100 transition">
                  <td className="px-4 py-3">{city.id}</td>
                  <td className="px-4 py-3 font-medium">{city.name}</td>
                  <td className="px-4 py-3">{city.population}</td>
                  <td className="px-4 py-3">{city.AQI}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
