import { BrowserRouter } from 'react-router-dom';
import MovieWebSite from './home-work-5/MovieStore/MovieWebSite';

const AppMovieStore = () => {
  return (
    <BrowserRouter basename="/react-homework-template">
      <MovieWebSite />
    </BrowserRouter>
  );
};
export default AppMovieStore;
