import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
};

const contactsInitialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },

    deleteContacts(state, { payload: idDeleteContact }) {
      return {
        contacts: state.contacts.filter(({ id }) => id !== idDeleteContact),
      };
    },
  },
});

export const { addContact, deleteContacts } = contactsSlice.actions;
export const persistContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
