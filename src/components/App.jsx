import {lazy, Suspense} from 'react'
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navagation';
import Container from './Container/Container';
import NotFoundView from './NotFoundView/NotFoundView';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const HomePage = lazy(() =>
  import('./HomePage/HomePage')
);
const MoviesPage = lazy(() =>
  import('./MoviesPage/MoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage')
);

export function App () {
  return (
    <>
      <Container>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Navigation />
          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
              <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            <Route path="*" element={<NotFoundView/>}/>
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
