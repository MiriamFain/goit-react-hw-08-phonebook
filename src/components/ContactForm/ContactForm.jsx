import React, { useState } from 'react';
import s from './ContactForm.module.css';
import { addContactThunk } from 'store/contacts/thunk.contacts';
import { selectAllContacts } from 'store/selectors';
import { useDispatch, useSelector } from 'react-redux';

import { UserOutlined, PhoneOutlined } from '@ant-design/icons';
import { Input, Button, Space } from 'antd';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = { name, phone };
    if (contacts.some(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    dispatch(addContactThunk(newContact));
    formReset();
  };

  const formReset = () => {
    setName('');
    setPhone('');
  };

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setPhone(e.currentTarget.value);
        break;
      default:
        console.log(e.currentTarget.name + ' is not a valid value');
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Input
        placeholder="Enter name"
        prefix={<UserOutlined />}
        className={s.nameInput}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChange}
        onPressEnter={handleChange}
        required
      />

      <Input
        placeholder="Enter phone"
        prefix={<PhoneOutlined />}
        className={s.telInput}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={phone}
        onChange={handleChange}
        onPressEnter={handleChange}
        required
      />
      <Space direction="vertical">
        <Button className={s.btn} size="large" type="primary">
          Add contact
        </Button>
      </Space>
    </form>
  );
};

export default ContactForm;
