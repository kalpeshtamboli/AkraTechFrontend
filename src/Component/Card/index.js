import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Card = ({ movies, setSelectedMovie }) => {
  const navigate = useNavigate();
  const handleSelectedMovie = (movieDesc) => {
    setSelectedMovie(movieDesc);
    navigate("/MovieDetail", { state: { movieDesc } });
  };

  return (
    <div className="mt-20">
      <div className="shadow-xl rounded-sm p-10 ">
        <img
          src={`https://image.tmdb.org/t/p/w154${movies?.poster_path}`}
          alt="image_broken"
          className="mx-auto"
        />
        <div className="text-center text-white">{movies?.title}</div>
        <div className="text-center text-white">
          Date: {movies?.release_date}
        </div>
        <div className="text-center text-white">
          {" "}
          popularity: {movies?.popularity}
        </div>

        <div className="text-center flex justify-center p-2 mt-5">
          {" "}
          <button className="bg-blue-200 p-2 rounded-md shadow-xl hover:bg-blue-300" onClick={() => handleSelectedMovie(movies)}>
            Description
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
