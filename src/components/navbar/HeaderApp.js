import { Link } from "react-router-dom";

const HeaderApp = () => {
  return (
    <div className="flex justify-center">
      <Link to="/">
        <h1 className="w-fit hover:scale-105  text-5xl  font-extrabold mt-5 mb-7 text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-yellow-700 to-yellow-500 ">
          Weather App
        </h1>
      </Link>
    </div>
  );
};

export default HeaderApp;
