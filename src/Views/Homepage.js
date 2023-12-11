import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Card from "../Component/Card";
const Homepage = () => {
  

  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage,setErrorMessage] = useState("")
  const containerRef = useRef(null);


  const getAllMovies = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5661/api/movies/moviesDetail?page=${page}`
      );
      const responseData = await response.data.results;
      setData((prevData) => [...prevData, ...responseData]);
      setPage((prevPage) => prevPage + 1);

    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(()=>{
    getAllMovies()
  },[])
  const handleScroll = () => {
    const { current } = containerRef;
    if (current && window.innerHeight + window.scrollY >= current.offsetTop + current.offsetHeight) {
      getAllMovies();
    }
  };

 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, isLoading]);


  if (isLoading) {
    return <div className="flex justify-center items-center">Loading....</div>;
  }

  return (
    <div>
    <div className="grid grid-cols-4 place-items-center bg-gray-700  gap-6">
      {data?.length > 0 &&
        data?.map((el, index) => (
          <div key={index}>
            <Card movies={el} isLoading={isLoading} setSelectedMovie={setSelectedMovie} />
          </div>
        ))}
      <div ref={containerRef}></div>

    </div>
    {!isLoading && <p className="text-white text-center">Loading...</p>}
    {errorMessage && <p className="text-center">{errorMessage}</p>}

    </div>
  );
  
  
};

export default Homepage;
