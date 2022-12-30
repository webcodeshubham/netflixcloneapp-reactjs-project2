// TMDB API Key = "e8e6cc54e9ebbef624d3e2cfc342b700"

// TMDB Movie Genre Endpoint URL = "https://api.themoviedb.org/3/movie/550?api_key=e8e6cc54e9ebbef624d3e2cfc342b700"



// Axios, a react library allows us to send requests to Server/API Endpoints using http methods/CRUD Operations like GET, POST, PUT, DELETE, PATCH, etc.

import Axios from 'axios'

// baseURL Property in an object of Create Method of Axios can send a request to Server/API Endpoints

const instance = Axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default instance

// instance variable is having a unique feature of making requests to Server/API Endpoints & having an access of all http methods for a specified baseURL.

// instance.get('/api/')
// instance.post('/api/')
// instance.put('/api/')
// instance.delete('/api/')