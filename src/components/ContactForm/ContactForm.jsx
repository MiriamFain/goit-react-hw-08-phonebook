import React, { useState } from 'react';
import s from './ContactForm.module.css';

import { nanoid } from 'nanoid';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addContact } from '../../store/actions/contactActions';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts, shallowEqual);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = { id: nanoid(), name, number };
    if (contacts.some(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    dispatch(addContact(newContact));
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const prop = e.currentTarget.name;
    switch (prop) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        throw new Error('Error');
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={s.nameInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Number
        <input
          className={s.telInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
