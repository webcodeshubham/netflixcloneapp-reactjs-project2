import React, { useState, useEffect } from "react";
import requests from "../requests";
import Axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const IMG_URL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  // Store & Set the values in the variable using setter function and use the state value in the entire app using props or var name. Whenever the value changes, the component will rerender again.
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // It runs whenever the page is reloaded (Initial Mounting or Loading) and component runs and whenever the dependency array is updated. External Variables are Dependency Array.

  // Asynchronous Functions - Async-Await and Promises. which means request will take some time to resolve the promise, till then please wait.

  // Snippet of Code which runs based on a specific condition/event occurs. It runs when the component loads.

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get(fetchUrl);
      // will get the data as array of objects or vice versa.
      const data = response.data.results;
      // console.table(data)
      // set the state variable using setter function
      setMovies(data);
      return response;
    }
    // call the async function
    fetchData();
    // must mention the external var in dependency array as variable, whereas useEffect & associated function runs, when the dependency array changes or when the dependency array is empty, it only runs for once.
  }, [fetchUrl]);

  //   console.log(movies)

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <>
      {/* Mockup/Design/Outline/Layout */}
      {/* Row Block/Component */}
      <div className="row">
        {/* Title */}
        <h2>{title}</h2>
        {/* Container => Row__Posters/Scrollbar */}
        <div className="row__posters">
          {/* Container => Several Row__Poster */}
          {movies.map((movie) => {
            return (
              <img
                // Ternary -> must include row__poster class & execute the logic in {if true, print new class or keep as an empty string}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                // className={`row__poster ${isLargeRow ? "row__largeRow" : ""}`}
                // Array must be optimised when dealing with big lists of data, must be provided with unique keys inside an array.
                key={movie.id}
                // On-click function
                onClick={() => handleClick(movie)}
                // Ternary -> If Large Row, display the poster_path or else display the backdrop_path image.
                src={`${IMG_URL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                // src={isLargeRow ? (`${IMG_URL}${movie.poster_path}`) :
                // (`${IMG_URL}${movie.backdrop_path}`)}
                alt={movie.name}
              />
            );
          })}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
};

export default Row;
