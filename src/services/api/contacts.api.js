import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  contactsAPI.defaults.headers.Authorization = `Bearer ${token}`;
};
const unsetToken = () => {
  contactsAPI.defaults.headers.Authorization = '';
};

const getAllContacts = async () => {
  try {
    const res = await contactsAPI.get('/contacts');
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
const addContact = async contact => {
  try {
    return await contactsAPI.post('/contacts', contact);
  } catch (error) {
    throw new Error(error.message);
  }
};
const deleteContact = async contactId => {
  try {
    return await contactsAPI.delete(`contacts/${contactId}`);
  } catch (error) {
    throw new Error(error.message);
  }
};
const editContact = async ({ id, editedContact }) => {
  try {
    return await contactsAPI.patch(`contacts/${id}`, editedContact);
  } catch (error) {
    throw new Error(error.message);
  }
};

const signUpUser = async user => {
  try {
    const res = await contactsAPI.post('/users/signup', user);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
const loginUser = async user => {
  try {
    const res = await contactsAPI.post('/users/login', user);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
const logoutUser = async () => {
  try {
    return await contactsAPI.post('/users/logout');
  } catch (error) {
    throw new Error(error.message);
  }
};
const getCurrentUser = async () => {
  try {
    const res = await contactsAPI.get('/users/current');
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const API = {
  getAllContacts,
  addContact,
  deleteContact,
  editContact,
  signUpUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  setToken,
  unsetToken,
};

export default API;
