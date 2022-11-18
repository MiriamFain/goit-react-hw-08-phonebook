import { createSlice } from '@reduxjs/toolkit';
import contactsInitialState from './initial-state.contacts';
import {
  addContactThunk,
  getContactsThunk,
  deleteContactThunk,
} from './thunk.contacts';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [getContactsThunk.pending]: handlePending,
    [getContactsThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
    [getContactsThunk.rejected]: handleRejected,

    [addContactThunk.pending]: handlePending,
    [addContactThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(el => el.id !== payload);
    },
    [addContactThunk.rejected]: handleRejected,

    [deleteContactThunk.pending]: handlePending,
    [deleteContactThunk.fulfilled]: state => {
      state.isLoading = false;
    },
    [deleteContactThunk.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
