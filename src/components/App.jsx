import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import { selectShowModal } from 'redux/carReducer';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import css from './App.module.css'
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const FavouritePage = lazy(() => import('pages/FavouritePage/FavouritePage'));
const CarListPage = lazy(() => import('pages/CarListPage/CarListPage'));
export const HOME_ROUTE = '/';
export const CARS_ROUTE = '/catalog';
export const FAVOURITE_ROUTE = '/favourite';
const App = () => {
  const showModal = useSelector(selectShowModal);

  return (
    <div>
      <Suspense fallback={<p>Loading data, please, wait...</p>}>
        <nav className={showModal? css.navigationBlack: css.navigationLight}>
        <NavLink className={css.NavLink} to={HOME_ROUTE}> Home </NavLink>
        <NavLink className={css.NavLink} to={FAVOURITE_ROUTE}> Favourite List </NavLink>
        <NavLink className={css.NavLink} to={CARS_ROUTE}> Cars List</NavLink>
        </nav>
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path={FAVOURITE_ROUTE} element={<FavouritePage />} />
          <Route path={CARS_ROUTE} element={<CarListPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
