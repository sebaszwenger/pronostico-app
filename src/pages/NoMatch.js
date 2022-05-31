import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <main className="w-full h-screen bg-slate-500 flex justify-center flex-col items-center my-auto text-2xl ">
      <h2 className="font-extrabold text-6xl">404</h2>
      <p>Page Not found</p>
      <Link to="/">
        <p className="mt-5 underline text-blue-600 font-bold hover:scale-105">
          Go Home
        </p>
      </Link>
    </main>
  );
};

export default NoMatch;
