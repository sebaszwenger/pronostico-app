import BodyCard from "./BodyCard";
import HeaderCard from "./HeaderCard";

const WeatherCard = () => {
  return (
    <main className="flex items-center mt-5">
      <div className="w-fit flex flex-col mt-5">
        <HeaderCard />
        <BodyCard />
      </div>
    </main>
  );
};

export default WeatherCard;
