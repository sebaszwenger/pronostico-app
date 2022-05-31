import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="mt-10 text-center text-white text-2xl mx-auto">
        <p>
          Utilice el <span className="text-sky-400">Buscador</span> para
        </p>
        <p>Consultar el Clima en Cualquier Lugar del Mundo</p>
      </section>
    </>
  );
};

export default Home;
