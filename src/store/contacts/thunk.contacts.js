import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services/api/contacts.api';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      return await API.getAllContacts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const data = await API.addContact(contact);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await API.deleteContact(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editContactThunk = createAsyncThunk(
  'contacts/editContact',
  async ({ id, editedContact }, thunkAPI) => {
    try {
      const data = await API.editContact({ id, editedContact });
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
