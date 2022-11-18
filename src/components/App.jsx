import { useSelector } from 'react-redux';
import s from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { selectError } from 'store/selectors';

function App() {
  const error = useSelector(selectError);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <div className={s.form}>
        <ContactForm />
      </div>
      {error ? (
        <p>Oops, something went wrong, try again later, please!</p>
      ) : (
        <div className={s.contacts}>
          <h2 className={s.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      )}
    </div>
  );
}

export default App;
