import { configureStore } from '@reduxjs/toolkit';
import { gameReducer } from './reducer';

export const store = configureStore({
  reducer: {
    games:gameReducer
  },
})