import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { BsTrash } from 'react-icons/bs';

const ContactItem = ({ name, phone, handleDelete }) => {
  return (
    <li className={s.item}>
      <p className={s.name}>{name}</p>
      <p className={s.phone}>{phone}</p>
      <button className={s.btn} onClick={handleDelete}>
        <BsTrash className={s.icon} />
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactItem;
