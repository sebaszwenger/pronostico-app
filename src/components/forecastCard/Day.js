import { useContext } from "react";
import { WiHumidity } from "react-icons/wi";
import DataContext from "../../hooks/DataContext";

const Day = ({ index }) => {
  const { forecast } = useContext(DataContext);

  return (
    <div className="text-white text-center border-teal-900 flex flex-col py-2 px-10">
      <p className="text-lg font-semibold">
        Dia {forecast.forecastday[index].date.substring(8, 11)}
      </p>
      <p className="text-sky-500 font-semibold text-2xl">
        {Math.round(forecast.forecastday[index].day.maxtemp_c)}&deg;
      </p>
      <p className="text-red-500 font-semibold text-md">
        {Math.round(forecast.forecastday[index].day.mintemp_c)}&deg;
      </p>
      <img
        src={forecast.forecastday[index].day.condition.icon}
        alt="icon weather"
        width={100}
      />
      <div className="flex justify-center mt-5">
        <p className="text-md flex items-center">
          <WiHumidity className="text-2xl text-sky-400" />
          <span>{forecast.forecastday[index].day.avghumidity} %</span>
        </p>
      </div>
    </div>
  );
};

export default Day;
