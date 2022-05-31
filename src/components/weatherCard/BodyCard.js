import { useContext } from "react";
import { BsWind } from "react-icons/bs";
import DataContext from "../../hooks/DataContext";

const BodyCard = () => {
  const { current } = useContext(DataContext);

  return (
    <main className="bg-slate-600 opacity-70 text-white rounded-x-md rounded-b-md shadow-sm shadow-slate-900 px-10 pt-7 pb-8 flex justify-between items-center mx-3">
      <div className="flex flex-col justify-start pr-10">
        <p className="text-6xl pb-2">
          <span className="font-bold">{Math.round(current.temp_c)}</span>
          <span>&deg;</span>
        </p>
        <p className="text-xl">{current.condition.text}</p>
        <p className="text-lg">
          Sensacion Termica{" "}
          <span className="font-bold">{Math.round(current.feelslike_c)}</span>
          <span>&deg;</span>
        </p>
      </div>

      <img src={current.condition.icon} width={150} alt="icono clima" />

      <div className="flex flex-col items-center ml-10 mr-3">
        <BsWind className="text-2xl" />
        <div>
          <p className="text-lg text-center">
            {Math.round(current.wind_kph)} Km/h
          </p>
          <p className="text-md">Direccion: {current.wind_dir}</p>
        </div>
      </div>
    </main>
  );
};

export default BodyCard;
