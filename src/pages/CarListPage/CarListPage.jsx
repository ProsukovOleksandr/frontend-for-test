import { CarList } from "components/CarList/CarList";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from 'react';
import { fetchCars } from "redux/operations";
import { selectCars } from "redux/carReducer";
const CarListPage = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCars());
  }, [dispatch])
  const items = useSelector(selectCars);
  return (<>
  <h1> This is Car List Page</h1>
  <CarList items={items}/>
  </>
  );
};
export default CarListPage;
