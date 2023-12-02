import { selectFilter } from 'redux/carReducer';
import css from './CarList.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { CarListItem } from './CarListItem';
import { nanoid } from 'nanoid';
export const CarList = ({ items }) => {
  const filter = useSelector(selectFilter);
  const filterCars = (items, filter) => {
    if (filter === '') {
      return items;
    } else {
      return items.filter(car =>
        car.make.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  return (
    <div className={css.carList}>
      <ul className={css.carList}>
        {filterCars(items, filter).map(item => {
          return (
            <CarListItem
              item={{ ...item }}
              key={nanoid()}
            />
          );
        })}
      </ul>
    </div>
  );
};
