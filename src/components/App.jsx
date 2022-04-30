import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import Navigation from './Navigation/Navagation';
import Container from './Container/Container';
import NotFoundView from './NotFoundView/NotFoundView';

export function App () {
  return (
    <>
      <Container>
        <Navigation />
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage/>} />
          <Route path="*" element={<NotFoundView/>}/>
        </Routes>
      </Container>
    </>
  );
};
