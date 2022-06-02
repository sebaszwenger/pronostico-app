import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

import ForecastCard from "../components/forecastCard/ForecastCard";
import WeatherCard from "../components/weatherCard/WeatherCard";
import {
  BtnAddBookmark,
  BtnSubBookmark,
} from "../components/weatherCard/BtnBookmark";

import DataContext from "../hooks/DataContext";

const apiKey = "97a2765d7c314d8eaa842335222605";

const Search = ({ bookmark, setBookmark }) => {
  const { id } = useParams();
  const { data } = useFetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${id}&days=6&aqi=no&alerts=no`
  );

  useEffect(() => {
    localStorage.setItem("favoritesCitys", JSON.stringify(bookmark));
  }, [bookmark]);

  function handleToggleBookmark() {
    if (bookmark?.includes(data?.location.name)) {
      setBookmark(bookmark?.filter((item) => item !== data?.location.name));
    } else {
      setBookmark([...bookmark, data?.location.name]);
    }
  }

  if (!data) return <h2 className="text-white text-xl">LOADING...</h2>;

  return (
    <>
      <div className="flex flex-col items-center mb-5">
        <DataContext.Provider value={data}>
          <div className="flex items-center">
            <WeatherCard />
            {bookmark?.includes(data.location.name) ||
            bookmark.length > 4 ? null : (
              <BtnAddBookmark
                onClick={handleToggleBookmark}
                handleToggleBookmark={handleToggleBookmark}
              />
            )}
            {bookmark.includes(data.location.name) ? (
              <BtnSubBookmark
                onClick={handleToggleBookmark}
                handleToggleBookmark={handleToggleBookmark}
              />
            ) : null}
          </div>
          <ForecastCard />
        </DataContext.Provider>
      </div>
    </>
  );
};

export default Search;
