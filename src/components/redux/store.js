import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  contacts: [],
  filter: '',
});
