import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducer';

export default configureStore({
  reducer: {
    games: gameReducer,
  },
});
