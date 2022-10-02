import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { BsTrash } from 'react-icons/bs';

const ContactItem = ({ id, name, number, handleDelete }) => {
  return (
    <li className={s.item}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
      <button className={s.btn} onClick={() => handleDelete(id)}>
        <BsTrash className={s.icon} />
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactItem;
