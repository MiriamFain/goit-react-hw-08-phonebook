import React from 'react';
import s from './Filter.module.css';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import changeFilter from '../../store/actions/filterActions';

import { BsSearch } from 'react-icons/bs';

const Filter = () => {
  const filter = useSelector(state => state.filter, shallowEqual);
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
          onChange={e => dispatch(changeFilter(e.currentTarget.value))}
          placeholder="Find contact by name"
        />
      </label>
    </div>
  );
};

export default Filter;
