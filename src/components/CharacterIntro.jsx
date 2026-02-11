import ichigo from "../assets/ichigo.png";

function CharacterIntro() {
  return (
    <section
      className="relative h-[92.5vh] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${ichigo})`,
        backgroundPosition: "70% center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-10 md:px-20">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Bleach</h1>

          <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
            A substitute Soul Reaper burdened with immense power. Ichigo fights
            against Hollows and darkness itself, balancing humanity and destiny
            in a relentless battle for survival.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition cursor-pointer">
              ▶ Play
            </button>

            <button className="bg-gray-500/70 text-white px-6 py-2 rounded font-semibold hover:bg-gray-500 transition cursor-pointer">
              ℹ More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CharacterIntro;
