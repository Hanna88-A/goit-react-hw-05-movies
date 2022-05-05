import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import defaultImage from './default.png';
import { List, Item, Image, Box } from './Cast.styled';

import * as movieApi from '../../services/movies-api';

export default function HomePage() {
    const {movieId} = useParams();
    const [actors, setActors] = useState(null)

    useEffect(() => {
        movieApi
            .fetchMowieCredits(movieId)
            .then(setActors)
    },[movieId]);
 
    return (
        <>
            <List>
                {actors && actors.cast.map(actor =>
                    <Item key={actor.id}>
                        {actor.profile_path ? (
                            <Image src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                        ) : (
                            <Image src={defaultImage} alt={actor.name} width='200' height='300' />    
                        )}
                        
                        <Box>
                            <h3>{actor.name}</h3>
                            <p>Character: {actor.character}</p> 
                        </Box>

                        
                    </Item>)
            }
           </List>
            
        </>
        
    )
};