
import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const FavouritePage = lazy(() => import('pages/FavouritePage/FavouritePage'));
const CarListPage = lazy(() => import('pages/CarListPage/CarListPage'));
const HOME_ROUTE = '/';
const CARS_ROUTE = '/cars';
const FAVOURITE_ROUTE = '/favourite';
const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading data, please, wait...</p>}>
        <NavLink to={HOME_ROUTE}> Home </NavLink>
        <NavLink to={FAVOURITE_ROUTE}> Favourite List </NavLink>
        <NavLink to={CARS_ROUTE}> Cars List</NavLink>

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
