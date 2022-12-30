// TMDB API Key = "e8e6cc54e9ebbef624d3e2cfc342b700"

// TMDB Movie Genre Endpoint URL = "https://api.themoviedb.org/3/movie/550?api_key=e8e6cc54e9ebbef624d3e2cfc342b700"


const API_KEY = 'e8e6cc54e9ebbef624d3e2cfc342b700'

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests