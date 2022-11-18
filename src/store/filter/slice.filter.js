import { createSlice } from '@reduxjs/toolkit';
import filterInitialState from './initial-state.filter';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterAction: (state, action) => action.payload,
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilterAction } = filterSlice.actions;
