import { CarList } from 'components/CarList/CarList';
import { Filter } from 'components/CarList/Filter';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectFavourites, selectShowModal } from 'redux/carReducer';
import css from './FavoritePage.module.css';
import { Modal } from 'components/CarList/Modal';
const FavouritePage = () => {
  const favouritesArr = useSelector(selectFavourites);
  const showModal = useSelector(selectShowModal);
  if (favouritesArr) {
    return (
      <div className={showModal ? css.backdrop : css.container}>
        <Filter />
        <CarList items={favouritesArr} />
        {showModal && <Modal />}
      </div>
    );
  }
};
export default FavouritePage;
