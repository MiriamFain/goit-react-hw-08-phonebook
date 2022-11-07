import s from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

import { useMemo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { deleteContact } from '../../store/actions/contactActions';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts, shallowEqual);
  const filter = useSelector(state => state.filter, shallowEqual);
  const dispatch = useDispatch();

  const filteredContacts = useMemo(() => {
    return contacts.length
      ? contacts.filter(({ name }) => {
          return name.toLowerCase().includes(filter.toLowerCase());
        })
      : [];
  }, [contacts, filter]);

  const elements = filteredContacts.map(({ id, name, number }) => (
    <ContactItem
      key={id}
      id={id}
      name={name}
      number={number}
      handleDelete={() => dispatch(deleteContact(id))}
    />
  ));

  return <ul className={s.list}>{elements}</ul>;
};

export default ContactList;
