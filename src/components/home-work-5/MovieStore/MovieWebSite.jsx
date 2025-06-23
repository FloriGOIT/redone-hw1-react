import { lazy } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const SharedLayoutMovies = lazy(() => import('./pages/SharedLayoutMovies'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieSummery = lazy(() => import('./pages/MovieSummery'));

const MovieWebSite = () => {

        const [movieId, setMovieId] = useState("");
        const handleMovieId = input => setMovieId(input);
        console.log("movieId",movieId)
  return (
    <Routes>
      <Route path="/" element={<SharedLayoutMovies />}>
                          <Route index element={<Home handleMovieId={handleMovieId}/>} />
                          <Route path="/movies" element={<Movies />} />
                          <Route path="/movies/:id" element={<MovieSummery movieId={movieId}/>}  />
 
      </Route>
    </Routes>
  );
};

export default MovieWebSite;
