import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { UserDeleteOutlined } from '@ant-design/icons';

const ContactItem = ({ name, phone, handleDelete }) => {
  return (
    <li className={s.item}>
      <div className={s.data}>
        <p className={s.name}>{name}</p>
        <p className={s.phone}>{phone}</p>
      </div>
      <button className={s.btn} onClick={handleDelete}>
        <UserDeleteOutlined className={s.icon} />
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
