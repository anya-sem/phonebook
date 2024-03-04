import { createSlice } from '@reduxjs/toolkit';

const deleteConfirmationSlice = createSlice({
  name: 'deleteConfirmation',
  initialState: {
    isOpen: false,
    contactId: null,
  },
  reducers: {
    openDeleteConfirmation: (state, action) => {
      state.isOpen = true;
      state.contactId = action.payload;
    },
    closeDeleteConfirmation: state => {
      state.isOpen = false;
      state.contactId = null;
    },
  },
});

export const { openDeleteConfirmation, closeDeleteConfirmation } = deleteConfirmationSlice.actions;

export default deleteConfirmationSlice.reducer;
