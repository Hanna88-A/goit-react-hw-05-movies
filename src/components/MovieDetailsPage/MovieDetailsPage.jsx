import { useState, useEffect } from 'react'
import { NavLink, Link, useParams, Outlet, useLocation } from 'react-router-dom';
import * as movieApi from '../../services/movies-api'
import { Img, Div, InformationBox, List, Item } from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
    const location = useLocation();
    const {movieId} = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        movieApi.fetchMowieDetails(movieId)
        .then(setMovie)
    }, [movieId])
   
    return (
        <>
            {movie && (
                <>
                    <Link to={location?.state?.from ?? '/home'}>
                    Go back
                    </Link>

                    <Div>
                        <div>
                            <Img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                        </div>
                        <InformationBox>
                            <h2>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
                            <p>User Score: {movie.vote_average * 10}%</p>
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
                            <h3>Genres</h3>
                            <List>
                                {movie.genres.map(genre => (<Item key={genre.id}>{genre.name}</Item>))}
                            </List>
                            
                        </InformationBox>

                    </Div>

                    <hr />
                        <p>Additional information</p>

                    <ul>
                        <li>
                            <NavLink
                                to={`/movies/${movie.id}/cast/`}
                                state={{ from: location?.state?.from ?? '/home' }}
                            >
                                Cast
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={`/movies/${movie.id}/reviews/`}
                                state={{ from: location?.state?.from ?? '/home' }}
                            >
                                
                                Reviews
                            </NavLink>
                        </li>
                    </ul>

                    <hr />
                    <Outlet/>
                </>

            )}
             
        </>
    )
};