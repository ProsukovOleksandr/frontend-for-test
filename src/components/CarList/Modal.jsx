import { selectCurrentCar, setShowModal } from 'redux/carReducer';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import css from './Modal.module.css';
import svg from '../../img/symbol-defs.svg';
export const Modal = () => {
  const currentCar = useSelector(selectCurrentCar);
  const dispatch = useDispatch();
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = currentCar;
  const hideModal = useCallback(() => {
    dispatch(setShowModal(false));
    document.body.classList.remove('body-lock');
  }, [dispatch]);

  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        hideModal();
      }
    },
    [hideModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      hideModal();
    }
  };
  if (currentCar) {
    return (
      <div className={css.modalLayout} onClick={handleBackdropClick}>
        <button className={css.closeBtn} onClick={hideModal}>
          <svg width="16px" height="16px" className={css.closeIcon}>
            <use href={svg + '#icon-x'}></use>
          </svg>
        </button>
        <img src={img} alt={description} width="274px" height="268px" />
        <span className={css.modalCarName}>
          {make} <span className={css.modalCarModel}>{model}</span> , {year}{' '}
        </span>
        <ul className={css.infoList}>
          <li className={css.funcListItem}>{address}</li>
          <li className={css.funcListItem}>Id: {id}</li>
          <li className={css.funcListItem}>Year: {year}</li>
          <li className={css.funcListItem}>Type: {type}</li>
          <li className={css.funcListItem}>
            Fuel Consumption: {fuelConsumption}
          </li>
          <li className={css.funcListItem}>Engine Size: {engineSize}</li>
        </ul>
        <p className={css.description}>{description}</p>
        <ul className={css.funcList}>
          {accessories.map(item => {
            return (
              <li key={item} className={css.funcListItem}>
                {item}
              </li>
            );
          })}
          {functionalities.map(item => {
            return (
              <li key={item} className={css.funcListItem}>
                {item}
              </li>
            );
          })}
        </ul>
        <span>Rental conditions: </span>
        <ul className={css.rentalList}>
          {rentalConditions.split('\n').map(item => {
            return (
              <li key={item} className={css.rentalItem}>
                {item}
              </li>
            );
          })}
          <li className={css.rentalItem}>
            Mileage: {mileage.toLocaleString()}
          </li>
          <li className={css.rentalItem}>Price: {rentalPrice}</li>
        </ul>
        <a href="tel:+380730000000" className={css.rentalBtn}>
          Rental Car
        </a>
      </div>
    );
  }
};
