import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const MovieDetail = () => {
  const { state } = useLocation();
  const [movieDescription, setMovieDescription] = useState(state?.movieDesc);
  console.log("movieDescription", movieDescription);
  return (
    <div className="flex justify-center items-center text-white  ">
      <div className="shadow-xl rounded-sm p-2 flex bg-gray-500  mt-20 mx-20 w-1/2  rounded-xl  flex gap-20">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w185${movieDescription?.poster_path}`}
            alt="image_broken"
            className="w-60 rounded-md"
          />
        </div>
        <div className="space-y-4">
          <div className="  text-xl font-bold tracking-md">
            {movieDescription?.title}
          </div>
          <div className="w-80">
            <span className="font-bold">OVERVIEW:</span>{" "}
            {movieDescription?.overview}
          </div>
          <div>
            <span className="font-bold"> Release Date: </span>
            {movieDescription?.release_date}
          </div>
          <div>
            <span className="font-bold"> popularity:</span>{" "}
            {movieDescription?.popularity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
