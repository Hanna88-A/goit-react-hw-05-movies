import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import * as movieApi from '../../services/movies-api'
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

export default function MovieDetailsPage() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
   

    useEffect(() => {
        movieApi.fetchMowieDetails(movieId)
        .then(setMovie)
    }, [movieId])
    
    console.log(movie)

    return (
        
        <>
            {movie && (
                <>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    <h2>{movie.title}</h2>
                    <p>Vote average:{movie.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    {movie.genres.map(genre => (<p key={genre.id}>{genre.name}</p>))}
                </>
            )}
             
            {/* <Cast />
            <Reviews/> */}
        </>
    )
};