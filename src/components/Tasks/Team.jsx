import { Link } from "react-router-dom";

function Team() {
  const teams = [
    { id: 1, teamName: "Chennai Super Kings" },
    { id: 2, teamName: "Mumbai Indians" },
    { id: 3, teamName: "Royal Challengers Bengaluru" },
    { id: 4, teamName: "Sunrisers Hyderabad" },
    { id: 5, teamName: "Gujarat Titans" },
    { id: 6, teamName: "Rajasthan Royals" },
    { id: 7, teamName: "Kolkata Knight Riders" },
    { id: 8, teamName: "Delhi Capitals" },
    { id: 9, teamName: "Punjab Kings" },
    { id: 10, teamName: "Lucknow Super Giants" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-10 py-6">
      <h1 className="text-3xl font-semibold mb-8">Teams</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {teams.map((team, id) => {
          return (
            <Link
              to={`/playing/${team.teamName}`}
              key={id}
              className="bg-zinc-900 rounded-lg h-56 flex items-center justify-center 
                       hover:scale-105 transition-transform cursor-pointer"
            >
              <p className="text-center text-lg font-medium">{team.teamName}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
