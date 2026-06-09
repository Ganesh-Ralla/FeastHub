import heroFood from "../assets/about.jpg";

const Aboutintro = () => {
  return (
    <section
      className="h-125 mt-16 overflow-hidden bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroFood})` }}
    >
      <div className="bg-black/40 w-full h-full flex items-center">
        <div className="px-8 md:px-16">
          <p className="text-orange-300 uppercase tracking-widest text-lg font-semibold mb-4">
            Welcome
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-bold">
            FOODIES
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Aboutintro;