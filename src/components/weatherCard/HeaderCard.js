import { useContext } from "react";
import DataContext from "../../hooks/DataContext";

const HeaderCard = () => {
  const { location } = useContext(DataContext);
  return (
    <h2 className="bg-slate-800 opacity-70 rounded-t-md py-2 px-5 text-white text-2xl font-bold mx-3">
      {location.name}, {location.region}
      <span className="ml-2 text-sm">
        Hasta {location.localtime.substring(11)}
      </span>
    </h2>
  );
};

export default HeaderCard;
