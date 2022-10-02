import React, { useState, useEffect, useMemo } from 'react';
import s from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    if (
      contacts.some(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prev => [...prev, contact]);
  };

  const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value.trim());
  };

  const filteredContacts = useMemo(() => {
    return contacts.length
      ? contacts.filter(({ name }) => {
          return name.toLowerCase().includes(filter.toLowerCase());
        })
      : [];
  }, [contacts, filter]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <div className={s.form}>
        <ContactForm onSubmit={onAddContact} />
      </div>
      <div className={s.contacts}>
        <h2 className={s.title}>Contacts</h2>
        <Filter onChange={handleFilter} value={filter} />
        <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
