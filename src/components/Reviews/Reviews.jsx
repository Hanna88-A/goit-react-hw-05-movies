import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieApi from '../../services/movies-api';


export default function HomePage() {
    const {movieId} = useParams()
    const [reviews, setReviews] = useState([]);
    

    useEffect(() => {
        movieApi
            .fetchMowieReviews(movieId)
            .then(data=>setReviews([...data.results]))
    }, [movieId])

    console.log(reviews)

    if (reviews.length !== 0) {
            return (
            <>
                <ul>
                    {reviews && reviews.map(review =>
                        <li key={review.id}>
                            <h3>Author: {review.author}</h3>
                            <p>{review.content}</p>
                        
                        </li>)}
                </ul>
            </>
        )
    }
    else {
        return (
            <p>We don't have any reviews for this movie.</p>
        )
    }

 
        
    
    
};