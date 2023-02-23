import {TMDB_API_KEY} from "./tmdbApiKey";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-EN`,
    fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-EN`,
    fetchActionMovies: `/discover/movies?api_key=${TMDB_API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movies?api_key=${TMDB_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movies?api_key=${TMDB_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movies?api_key=${TMDB_API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movies?api_key=${TMDB_API_KEY}&with_genres=99`,
}

export default requests;