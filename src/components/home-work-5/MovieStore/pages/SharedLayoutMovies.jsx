import { NavLink, Outlet } from 'react-router-dom';
import style from '../movieWebSite.module.scss';

const SharedLayoutMovies = () => {
  return (
    <div className={style.moviesAll}>
      <nav>
        {' '}
        <NavLink to="/" className={({isActive})=> isActive? `${style.nav} ${style.active}`: style.nav}>Home</NavLink>
        <NavLink to="/movies" className={({isActive})=> isActive?`${style.nav} ${style.active}`: style.nav}>Movies</NavLink>
        <hr />
      </nav>

      <Outlet />
    </div>
  );
};

export default SharedLayoutMovies;
