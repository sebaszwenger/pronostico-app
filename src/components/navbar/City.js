import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const apiKey = "97a2765d7c314d8eaa842335222605";

const City = ({ nameCity }) => {
  const { data: city } = useFetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${nameCity}&days=1&aqi=no&alerts=no`
  );

  if (!city) return null;

  return (
    <Link to={`/search/${nameCity}`}>
      <div className="flex flex-col items-center text-white font-medium px-3 shadow-md shadow-black rounded-xl hover:scale-105">
        <p className="text-sm">{city.location.name}</p>
        <p className="text-2xl flex items-center">
          <img src={city.current.condition.icon} alt="icono clima" width={50} />
          {Math.round(city.current.temp_c)}
          <span>&deg;</span>
        </p>
      </div>
    </Link>
  );
};

export default City;
