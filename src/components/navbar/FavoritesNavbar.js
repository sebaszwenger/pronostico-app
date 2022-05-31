import City from "./City";
import PropTypes from "prop-types";

const FavoritesNavbar = ({ bookmark }) => {
  return (
    <>
      {bookmark.length === 0 ? null : (
        <div className="bg-slate-800 opacity-70 py-2 flex gap-x-4 justify-center items-center border-t shadow-md  border-black px-2">
          {bookmark.length > 0 && <City nameCity={bookmark[0]} />}
          {bookmark.length > 1 && <City nameCity={bookmark[1]} />}
          {bookmark.length > 2 && <City nameCity={bookmark[2]} />}
          {bookmark.length > 3 && <City nameCity={bookmark[3]} />}
          {bookmark.length > 4 && <City nameCity={bookmark[4]} />}
        </div>
      )}
    </>
  );
};

FavoritesNavbar.protoType = {
  bookmark: PropTypes.object.isRequired,
};

export default FavoritesNavbar;
