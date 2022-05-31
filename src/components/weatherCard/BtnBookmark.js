import React from "react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

export const BtnBookmark = ({ text, className, ...props }) => {
  return (
    <button
      onClick={props.onClick}
      className={`px-5 py-2 text-white mt-5 hover:scale-105 shadow-md shadow-black rounded-full mx-5 ${className}`}
    >
      <div className="flex flex-col items-center justify-center">
        <BsFillJournalBookmarkFill className="text-3xl pb-1" />
        <p className="text-xs">{text}</p>
        <p className="text-xs">Favorito</p>
      </div>
    </button>
  );
};

export const BtnSubBookmark = (props) => {
  return (
    <BtnBookmark
      {...props}
      text={"Eliminar"}
      className={`${props.className}
         bg-red-600`}
    />
  );
};

export const BtnAddBookmark = (props) => {
  return (
    <BtnBookmark
      {...props}
      text={"Añadir"}
      className={`${props.className}
         bg-green-600`}
    />
  );
};
