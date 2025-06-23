import {details} from '../helpers';
import { Link } from 'react-router-dom';
import style from "../movieWebSite.module.scss"

export const detailsProcesed = [...details.results]
console.log(detailsProcesed[0])

const Home = ({handleMovieId}) => {

  return (
          <div className={style.movieList}>
                  <br/> 
      <ul>
      {detailsProcesed.map(movie => {
          return (
                  <li key={movie.id} onClick={()=> handleMovieId(movie.id)}>
                          <Link to="/movies/:id" >{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;

/*

        */
