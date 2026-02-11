import { useParams } from "react-router-dom";

function Playing() {
  const { teamName } = useParams();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">Now Playing: {teamName}</h1>
    </div>
  );
}

export default Playing;
