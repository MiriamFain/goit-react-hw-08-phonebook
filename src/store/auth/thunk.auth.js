import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services/api/contacts.api';

export const registerUserThunk = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const res = await API.signUpUser(user);
      API.setToken(res.token);
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const res = await API.loginUser(user);
      API.setToken(res.token);
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await API.logoutUser();
      API.unsetToken();
      return;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const token = state.auth.token;
    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      API.setToken(token);

      const res = await API.getCurrentUser();
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
