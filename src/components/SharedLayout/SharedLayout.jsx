import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';
import Spiner from 'components/Spiner/Spiner';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.navbox}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
