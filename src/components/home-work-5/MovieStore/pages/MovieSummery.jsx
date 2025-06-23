
import { genres } from '../genres';
import style from '../movieWebSite.module.scss';
import { Link, Outlet } from 'react-router-dom';

const MovieSummery = ({ movieId, movies }) => {
  const isMovie = movies.filter(movie => movie.id === movieId);
  const isMovieSpread = isMovie[0];
  const basicUrl = `https://image.tmdb.org/t/p/w500`;
  const srcShort = isMovieSpread.backdrop_path;
  const fullSrc = basicUrl + srcShort;
  const vote = Math.round(isMovieSpread.vote_average);
  const genresIds = isMovieSpread.genre_ids;
  const x = [];
  console.log('movieId', movieId);
  for (const gen of genresIds) {
    let y = genres.find(genr => genr.id === gen);
    if (y) {
      x.push(y.name);
    }
  }
  const xToString = x.join(', ');

  return (
    <section className={style.detailsAll}>
      <div className={style.detailsUp}>
        <div>
          <Link to="/">Go back</Link> <br />
          <img
            src={fullSrc}
            alt={isMovieSpread.title}
            style={{ width: '400px', height: '400px', objectFit: 'cover' }}
          />
        </div>

        <div style={{ width: '400px' }}>
          <h2>{isMovieSpread.title}</h2>
          <p>People vote: {vote} %</p>
          <br />
          <h2>Overview</h2>
          <p>{isMovieSpread.overview}</p> <br />
          <h2>Genre</h2>
          <p>{xToString}</p>
        </div>
      </div>
      <hr />
      <br />

      <div className={style.detailsDown}>
        <h2>Additional Info</h2>
        <div>
          <Link to="review">Review</Link>
          <br />
          <Link to="cast">Cast</Link>
          <br />

          <Outlet />
        </div>
      </div>
    </section>
  );
};
export default MovieSummery;
