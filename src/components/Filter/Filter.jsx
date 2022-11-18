import s from './Filter.module.css';
import { selectFilter } from 'store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterAction } from 'store/filter/slice.filter';

import { BsSearch } from 'react-icons/bs';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.filter}>
      <label className={s.label}>
        <BsSearch className={s.icon} /> Search
        <input
          className={s.input}
          value={filter}
          name="filter"
          type="text"
          onChange={e => dispatch(setFilterAction(e.currentTarget.value))}
          placeholder="Find contact by name"
        />
      </label>
    </div>
  );
};

export default Filter;
