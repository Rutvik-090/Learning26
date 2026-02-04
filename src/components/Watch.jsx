import { useParams } from "react-router-dom";

function Watch() {
  const { movieName } = useParams();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">Watching: {movieName}</h1>
    </div>
  );
}

export default Watch;
