import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/carReducer';
import filters from '../CarList/makes.json';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <select
      name="select-maker"
      id=""
      onChange={handleFilter}
      className={css.filter}
    >
      {filters.map(filter => {
        return <option value={filter}>{filter}</option>;
      })}
    </select>
  );
};
