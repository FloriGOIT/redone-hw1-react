import style from '../styleAppStore.module.scss';
import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <section>
      <div className={style.sharedLayout}>
        <span>GoMerch Store</span>
        <div className={style.navlink}>
          <NavLink
            to="/"
            className={({ isActive }) => {return isActive ? `${style.nav} ${style.active}` : style.nav}}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive})=> {return isActive ? `${style.nav} ${style.active}` : style.nav}}
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({isActive})=>{return isActive ? `${style.nav} ${style.active}` : style.nav }}
          >
            Products
          </NavLink>
        </div>
                  </div>
                  <hr /><br /><br />
                  <Outlet/>
    </section>
  );
};
