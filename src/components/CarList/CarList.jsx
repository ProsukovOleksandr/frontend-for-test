import { selectFilter } from 'redux/carReducer';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { CarListItem } from './CarListItem';
import { Filter } from './Filter';
export const CarList = ({items}) => {
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
    <div>
      <h3>List of cars</h3>
      <Filter />
      <ul>
        {filterCars(items, filter).map(item => {
          return <CarListItem item={item} key={item._id} />;
        })}
      </ul>
    </div>
  );
};
