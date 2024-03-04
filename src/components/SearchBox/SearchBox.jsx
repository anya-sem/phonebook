import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contacts/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <h2 className={css.label}>Find contact</h2>
      <input
        className={css.input}
        type="text"
        name="search"
        onChange={evt => dispatch(updateFilter(evt.target.value))}
      />
    </div>
  );
}
