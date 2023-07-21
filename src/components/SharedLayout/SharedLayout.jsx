import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';
import Spiner from 'components/Spiner/Spiner';
import { ToastContainer } from 'react-toastify';

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
      <main className={css.container}>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default SharedLayout;
