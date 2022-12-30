import React, { useState, useEffect } from 'react'
import requests from '../requests'
import Axios from '../axios'

const IMG_URL = 'https://image.tmdb.org/t/p/original/'

const Row = ({title, fetchUrl}) => {

    // Store & Set the values in the variable using setter function and use the state value in the entire app using props or var name. Whenever the value changes, the component will rerender again.
    const [movies, setMovies] = useState([])

    // It runs whenever the page is reloaded (Initial Mounting or Loading) and component runs and whenever the dependency array is updated. External Variables are Dependency Array.

    // Asynchronous Functions - Async-Await and Promises. which means request will take some time to resolve the promise, till then please wait.
    useEffect(() => {
        async function fetchData() {
            const response = await Axios.get(fetchUrl)
            const data = response.data.results
            console.table(data)
            setMovies(data)
        }
        fetchData()
    }, [fetchUrl])


    console.log(movies)

    return (
        <>
        {/* Mockup/Design/Outline/Layout */}
        {/* Title */}
        <h2>{title}</h2>
        {/* Container => Posters */}
        <div className="container" >
            {movies.map((movie) => {
                return (
                <img key={movie.id} src={`${IMG_URL}${movie.poster_path}`} alt={movie.name} />
            )})}
        </div>
        </>
    )
}

export default Row