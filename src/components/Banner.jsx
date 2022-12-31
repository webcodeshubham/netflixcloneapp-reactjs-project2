import React, { useState, useEffect } from "react";
import Axios from "../axios";
import requests from "../requests";
import "./Banner.css";

const IMG_URL = "https://image.tmdb.org/t/p/original/";

const Banner = ({ fetchUrl }) => {
  // Store the specific genre of movies (Netflix Original)
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get(requests.fetchNetflixOriginals);
      // const response = await Axios.get(fetchUrl)
      // console.log(response.data.results) // [ ..., ..., ]
      // get Random Array Element => Math.floor(Math.random() * response.data.results.length - 1)
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    }
    fetchData();
  }, []); // Must use fetchUrl, when using external variable.

  // console.log(movie)

  // Normal Function => Truncates the string and after n characters, append ... to the end of the string. this Function takes 2 parameters - string and terminating conditional parameters. This returns and executes if the string present & is greater than n and delete the remaining string characters after n characters, and append ... to the end of the string or if less than n characters, return the complete string.

  function truncate(str, n) {
    // substr is a method here,which takes inital and last index of the string.
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      {/* Mockup/Design/Outline/Layout */}
      {/* Banner */} {/* <<< Background Image */}
      <header
        className="banner" // you must have contents to display the background banner image.
        style={{
          backgroundImage: `url(${IMG_URL}${movie?.backdrop_path})`, // if movie exits, display the image.
          backgroundPosition: "center center", // x-y axis position
          backgroundSize: "cover", // use all of the space of the container.
          // backgroundRepeat: "no-repeat",
        }}
      >
        {/* Banner Contents */}
        {/* We need this block to wrap our banner contents and postion them */}
        <div className="banner__contents">
          {/* Title */}
          {/* movie?. (new optional chaining mechanism) if undefined, so it should not crash OR Operator for Movie Name Key */}
          <h1 className="banner__title">
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
          {/* Container => Buttons > 2 Buttons */}
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          {/* Description */}
          {/* movie?. (optional chaining) if undefined, so it should not crash OR Operator for Movie Name Key */}
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner--fadeBottom"></div>
      </header>
    </>
  );
};

export default Banner;
