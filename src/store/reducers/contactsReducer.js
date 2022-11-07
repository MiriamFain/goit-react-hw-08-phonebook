import { addContact, deleteContact } from '../actions/contactActions';
import { createReducer } from '@reduxjs/toolkit';

export default createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [addContact]: (state, action) => [...state, action.payload],

    [deleteContact]: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  }
);
