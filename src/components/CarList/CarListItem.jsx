import css from './CarListItem.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import {
  setFavourites,
  setShowModal,
  setCurrentCar,
  selectShowModal,
  selectFavourites,
} from 'redux/carReducer';
import svg from '../../img/symbol-defs.svg';
import { nanoid } from 'nanoid';
export const CarListItem = ({ item }) => {
  const dispatch = useDispatch();
  const [favourite, setFavourite] = useState(false);
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    rentalPrice,
    rentalCompany,
    address,
  } = item;
  const favouritesArr = useSelector(selectFavourites);
  const showModal = useSelector(selectShowModal);
  useEffect(() => {
    const found = favouritesArr.some(item => item.id === id);
    setFavourite(found);
  }, [favouritesArr, id]);

  const addToFavourite = () => {
    if (favouritesArr.some(item => item.id === id)) {
      const newArr = favouritesArr.filter(item => item.id !== id);
      setFavourite(false);
      dispatch(setFavourites(newArr));
    } else {
      const newArr = [...favouritesArr, item];
      dispatch(setFavourites(newArr));
      setFavourite(true);
    }
  };
  const handleShowModal = () => {
    dispatch(setShowModal(true));
    dispatch(setCurrentCar(item));
    document.body.classList.add('body-lock');
  };
  return (
    <div className={css.itemContainer}>
      <img
        src={img}
        alt={description}
        width="274px"
        height="268px"
        className={css.carImg}
      />
      <div className={css.carBootomBar}>
        <div className={css.carBaseData}>
          <span className={css.carName}>
            {make}
            <span className={css.carModel}> {model}</span>, {year}{' '}
          </span>
          <span className={css.carPrice}>{rentalPrice}</span>
          <button onClick={addToFavourite} className={css.favouriteBtn}>
            {favourite && (
              <svg width="18px" height="18px" className={css.favouriteTrueIcon}>
                <use href={svg + '#icon-heart'}></use>
              </svg>
            )}
            {!favourite && (
              <svg
                width="18px"
                height="18px"
                className={css.favouriteFalseIcon}
              >
                <use href={svg + '#icon-heart'}></use>
              </svg>
            )}
          </button>
        </div>
        <ul className={css.descList}>
          <li className={css.descItem} key={nanoid()}>
            {address}
          </li>
          <li className={css.descItem} key={nanoid()}>
            {rentalCompany}
          </li>
          <li className={css.descItem} key={nanoid()}>
            {type}
          </li>
          <li className={css.descItem} key={nanoid()}>
            {model}
          </li>
        </ul>
        <button
          className={css.learnMoreBtn}
          onClick={handleShowModal}
          disabled={showModal ? true : false}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};
