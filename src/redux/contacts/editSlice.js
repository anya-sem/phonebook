import { createSlice } from '@reduxjs/toolkit';

const editSlice = createSlice({
  name: 'edit',
  initialState: {
    isOpen: false,
    contactId: null,
    initialName: '',
    initialNumber: '',
  },
  reducers: {
    openEditModal: (state, action) => {
      state.isOpen = true;
      state.contactId = action.payload.contactId;
      state.initialName = action.payload.initialName;
      state.initialNumber = action.payload.initialNumber;
    },
    closeEditModal: state => {
      state.isOpen = false;
      state.contactId = null;
      state.initialName = '';
      state.initialNumber = '';
    },
  },
});

export const { openEditModal, closeEditModal } = editSlice.actions;

export default editSlice.reducer;
