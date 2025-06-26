
import { useEffect, useState } from 'react';
import { genres } from '../genres';
import style from '../movieWebSite.module.scss';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const MovieSummery = ({ movies }) => {

const [dataFetched, setDataFetched] = useState([])
  const idParam = useParams();
  const idParamConverted = Number(idParam.id);
  console.log("idParam",idParam)
  const basicUrl = `https://image.tmdb.org/t/p/w500`;
  const srcShort = dataFetched.poster_path;
  const fullSrc = basicUrl + srcShort;
  const vote = Math.round(dataFetched.popularity);
  const genresIds = dataFetched.genres;
  console.log("genresIds",genresIds)
  const x = [];
 
  for (const gen of genresIds) {
    let y = genres.find(genr => genr.id === gen);
    if (y) {
      x.push(y.name);
    }
  }
  const xToString = x.join(', ');

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie/${idParamConverted}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjgyOWZhMWY2NzdmMjkwZmQ3NTAyNWFmOGI0N2UyMSIsIm5iZiI6MTcxOTY3MjIzNC4zMDIsInN1YiI6IjY2ODAxZGFhMjhkMzA2OTI2NzViZTZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V6-Px6XK3mzZbcoyTrOmxgROWXW8xsyr0QzjUgkkxQk"
      }
    }
    fetch(URL, options)
      .then(response => response.json())
    .then(data=>setDataFetched([...data]))
  },[idParamConverted])

  return (
    <section className={style.detailsAll}>
      <div className={style.detailsUp}>
        <div>
          <Link to="/">Go back</Link> <br />
          <img
            src={fullSrc}
            alt={dataFetched.title}
            style={{ width: '400px', objectFit:"contain" }}
          />
        </div>

        <div style={{ width: '400px' }}>
          <h2>{dataFetched.title}</h2>
          <p>People vote: {vote} %</p>
          <br />
          <h2>Overview</h2>
          <p>{dataFetched.overview}</p> <br />
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
