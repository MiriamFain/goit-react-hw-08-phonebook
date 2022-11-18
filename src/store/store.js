import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice.contacts';
import { filterReducer } from './filter/slice.filter';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
