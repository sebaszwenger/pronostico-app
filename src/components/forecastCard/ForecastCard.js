import Day from "../forecastCard/Day.js";

const ForecastCard = () => {
  return (
    <main className="w-fit bg-slate-700 opacity-70 text-white rounded-md shadow shadow-slate-900 p-5 my-10 mx-3">
      <h2 className="text-2xl py-2 pl-2 font-semibold ">Pronostico Diario</h2>
      <div className="flex justify-evenly items-center">
        <Day index={0} />
        <Day index={1} />
        <Day index={2} />
      </div>
    </main>
  );
};

export default ForecastCard;
