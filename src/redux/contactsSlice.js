import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const contantsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setContact, deleteContact } = contantsSlice.actions;

export default contantsSlice.reducer;
