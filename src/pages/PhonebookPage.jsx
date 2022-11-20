import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import s from './PhonebookPage.module.css';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { selectError } from 'store/selectors';

import { getContactsThunk } from 'store/contacts/thunk.contacts';

const PhonebookPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const error = useSelector(selectError);

  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Phone<span style={{ color: '#1677ff' }}>Book</span>
      </h1>
      <div className={s.form}>
        <ContactForm />
      </div>
      {error ? (
        <p>Oops, something went wrong, try again later, please!</p>
      ) : (
        <div className={s.contacts}>
          <h2 className={s.subtitle}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      )}
    </div>
  );
};

export default PhonebookPage;
