import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    updateFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { updateFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
