import { useState, useEffect } from 'react';
import * as movieApi from '../../services/movies-api'
import { Title } from './HomePage.styled';
import { Link } from 'react-router-dom';



export default function HomePage() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        movieApi.fetchTrendingMowies()
            .then(movie => {
            setTrendingMovies([...movie.results])
        })
    }, []);

    return (
        <>
            <Title>Trending Movies</Title>
            {trendingMovies && (
                <ul >
                    {trendingMovies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
            
        </>
    );
}