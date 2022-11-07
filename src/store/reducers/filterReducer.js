import { createReducer } from '@reduxjs/toolkit';
import changeFilter from '../actions/filterActions';

export default createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});
