import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers/contactsReducer';
import filterReducer from './reducers/filterReducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
