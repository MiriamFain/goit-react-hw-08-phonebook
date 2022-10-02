import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.filter}>
      <label className={s.label}>
        <BsSearch className={s.icon} /> Search
        <input
          className={s.input}
          value={value}
          name="filter"
          type="text"
          onChange={onChange}
          placeholder="Find contact by name"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
