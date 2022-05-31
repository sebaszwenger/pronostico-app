import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";

import ForecastCard from "../components/forecastCard/ForecastCard";
import WeatherCard from "../components/weatherCard/WeatherCard";
import {
  BtnAddBookmark,
  BtnSubBookmark,
} from "../components/weatherCard/BtnBookmark";

import Navbar from "../components/navbar/Navbar";
import BookmarkContext from "../hooks/BookmarkContext";
import DataContext from "../hooks/DataContext";

const apiKey = "97a2765d7c314d8eaa842335222605";

const Search = () => {
  const [bookmark, setBookmark] = useContext(BookmarkContext);
  const { id } = useParams();
  const { data } = useFetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${id}&days=6&aqi=no&alerts=no`
  );

  function handleToggleBookmark(e) {
    console.log(e);
    if (!bookmark?.includes(data.location.name)) {
      setBookmark([...bookmark, data.location.name]);
      return;
    }
    setBookmark(bookmark.filter((item) => item !== data.location.name));
  }

  if (!data) return <Navbar />;

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mb-5">
        <DataContext.Provider value={data}>
          <div className="flex items-center">
            <WeatherCard />
            {bookmark.includes(data.location.name) ||
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
