import React, { useState } from 'react';
import s from './ContactForm.module.css';
import { toast } from 'react-toastify';
import { addContactThunk } from 'store/contacts/thunk.contacts';
import { selectAllContacts } from 'store/selectors';
import { useDispatch, useSelector } from 'react-redux';

import { UserOutlined, PhoneOutlined } from '@ant-design/icons';
import { Input, Button, Space, Form } from 'antd';

const ContactForm = () => {
  const [contact, setContact] = useState({ name: '', number: '' });

  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // e.preventDefault();
    const newContact = contact;

    if (contacts.some(({ name }) => name === newContact.name)) {
      toast.warn(`${newContact.name} is already in contacts!`, {
        autoClose: 4000,
        hideProgressBar: true,
      });
      return;
    }
    dispatch(addContactThunk(newContact));
    formReset();
  };
  const formReset = () => {
    setContact({ name: '', number: '' });
  };

  const handleChange = e => {
    setContact(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <Form className={s.form} onFinish={handleSubmit}>
      <Form.Item>
        <Input
          placeholder="Enter name"
          prefix={<UserOutlined />}
          className={s.nameInput}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={contact.name}
          onChange={handleChange}
          onPressEnter={handleChange}
          required
        />
      </Form.Item>

      <Form.Item>
        <Input
          placeholder="Enter phone"
          prefix={<PhoneOutlined />}
          className={s.telInput}
          name="number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={contact.number}
          onChange={handleChange}
          onPressEnter={handleChange}
          required
        />
      </Form.Item>
      <Form.Item>
        <Space direction="vertical">
          <Button
            className={s.btn}
            size="large"
            type="primary"
            htmlType="submit"
          >
            Add contact
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
