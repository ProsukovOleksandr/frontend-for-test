import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/carReducer';
import filters from '../CarList/makes.json';
import { nanoid } from 'nanoid';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div className={css.filterContainer}>
      <select
        name="select-maker"
        id=""
        onChange={handleFilter}
        className={css.filter}
      >
        {filters.map(filter => {
          return (
            <option value={filter} key={nanoid()}>
              {filter}
            </option>
          );
        })}
      </select>
    </div>
  );
};
