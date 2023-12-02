import { CarList } from 'components/CarList/CarList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/exports';
import { useEffect, useState } from 'react';
import { fetchCars } from 'redux/operations';
import { selectCars, selectShowModal } from 'redux/carReducer';
import { Modal } from 'components/CarList/Modal';
import css from './CarListPage.module.css';
const CarListPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isBtn, seIsBtn] = useState(true);
  useEffect(() => {
    dispatch(fetchCars(page)).then(r => {
      if (r.payload.length >= 12) {
        seIsBtn(true);
      } else {
        seIsBtn(false);
      }
    });
  }, [dispatch, page]);
  const items = useSelector(selectCars);
  const showModal = useSelector(selectShowModal);
  const loadMore = () => {
    setPage(page + 1);
  };
  if(showModal){
    document.body.classList.add('no-scroll')
  }else{
    document.body.classList.remove('no-scroll')
  }
  return (
    <>
      <div className={showModal  ? css.backdrop: null}>
      {items && (
        <>
          <CarList items={items} />
          {items.length >= 12 && isBtn && (
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
