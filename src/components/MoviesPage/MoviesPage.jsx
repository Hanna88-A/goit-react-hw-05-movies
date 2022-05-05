import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as movieApi from '../../services/movies-api'
import { Link, useLocation } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import {useSearchParams} from 'react-router-dom';
// // import PropTypes from "prop-types"; 


export default function MoviesPage() {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query');
   
    
    const handleFormSubmit = (query) => {
        setSearchParams({ query: query});
  };

     useEffect(() => {
            if (!query ) {
                return
            };
        movieApi
            .fetchSearchMowies(query)
            .then(movies => {
                    if (!movies.results.length) {
                        return Promise.reject(new Error(Notify.warning("Sorry, there are no images matching your search query. Please try again.")));
                    }
                    setMovies([...movies.results])
                    
        })
    },[query]);

   
    return (
        <>
            <Searchbar onSubmit={handleFormSubmit}/>
            {movies && (
                <ul >
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <Link
                                to={`/movies/${movie.id}`}
                                state={{ from: location ?? `/home` }}
                            >
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
             
        </>
    )
}
