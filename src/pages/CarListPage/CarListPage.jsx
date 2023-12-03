import { CarList } from 'components/CarList/CarList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
  selectCars,
  selectShowModal,
  setPage,
  selectPage,
  selectIsBtn,
} from 'redux/carReducer';
import { Modal } from 'components/CarList/Modal';
import css from './CarListPage.module.css';
import { Filter } from 'components/CarList/Filter';
import { useDispatch } from 'react-redux/es/exports';
const CarListPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCars);
  const showModal = useSelector(selectShowModal);
  const page = useSelector(selectPage);
  const isBtn = useSelector(selectIsBtn);
  const loadMore = () => {
    dispatch(setPage(page + 1));
  };
  if (showModal) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
  return (
    <>
      <div className={showModal ? css.backdrop : css.container}>
        {items && (
          <>
            <Filter />
            <CarList items={items} />
            {items.length >= 12 && isBtn  && (
              <button onClick={loadMore} className={css.loadMoreBtn}>
                Load More
              </button>
            )}
            {showModal && <Modal />}
          </>
        )}
      </div>
    </>
  );
};
export default CarListPage;
