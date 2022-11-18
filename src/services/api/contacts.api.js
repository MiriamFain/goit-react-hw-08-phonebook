import axios from 'axios';

const BASE_URL = 'https://63774a505c47776512195815.mockapi.io/contacts';

const getAllContacts = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
const addContact = async contact => {
  try {
    return await axios.post(BASE_URL, contact);
  } catch (error) {
    throw new Error(error.message);
  }
};
const deleteContact = async contactId => {
  try {
    return await axios.delete(`${BASE_URL}/${contactId}`);
  } catch (error) {
    throw new Error(error.message);
  }
};

const API = {
  getAllContacts,
  addContact,
  deleteContact,
};

export default API;
