import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/carReducer';
import filters from '../CarList/makes.json';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectShowModal } from 'redux/carReducer';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  const showModal = useSelector(selectShowModal)
  return (
    <div className={css.filterContainer}>
    <select
      name="select-maker"
      id=""
      onChange={handleFilter}
      className={css.filter }
      disabled={showModal? true:false}
    >
      {filters.map(filter => {
        return <option value={filter}>{filter}</option>;
      })}
    </select>
    </div>
  );
};
