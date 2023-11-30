import { CarList } from "components/CarList/CarList";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectFavourites } from "redux/carReducer";
const FavouritePage = () => {
  const favouritesArr = useSelector(selectFavourites);
  return (<>
  <h1> This is Favorite Page</h1>
  <CarList items={favouritesArr}/>
  </>
  );
};
export default FavouritePage;
