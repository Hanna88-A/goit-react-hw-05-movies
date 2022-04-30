const KEY = 'ce6a1cc434994eaf2ab214b62a02915a';
const BASE_URL = 'https://api.themoviedb.org/3/';


async function fetchMovies(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found!'))
};

export function fetchTrendingMowies() {
    return fetchMovies(`${BASE_URL}trending/movie/day?api_key=${KEY}`) 
};

export function fetchSearchMowies(query) {
    return fetchMovies(`${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1`) 
};

export function fetchMowieDetails(movieId) {
    return fetchMovies(`${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`) 
};

export function fetchMowieCredits(movieId) {
    return fetchMovies(`${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`) 
};

export function fetchMowieReviews(movieId) {
    return fetchMovies(`${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`) 
};
