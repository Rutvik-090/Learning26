import CharacterIntro from "../components/CharacterIntro.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white px-10 py-6">
      {/* <h1 className="text-3xl font-semibold mb-8">Home</h1> */}

      <CharacterIntro />
    </div>
  );
};

export default Home;
