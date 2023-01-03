import { FETCH_GAMES, GET_DETAIL, GET_CATEGORY } from './actions';

const initialState = {
  games: [],
  details: [],
  categories: [],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case `${FETCH_GAMES}/fulfilled`:
      return {
        games: [...actions.payload],
        details: [...state.details],
        categories: [...state.categories],
      };
    case `${GET_DETAIL}/fulfilled`:
      return {
        games: [...state.games],
        details: [...state.details, actions.payload],
        categories: [...state.categories],
      };
    case `${GET_CATEGORY}/fulfilled`:
      return {
        games: [...state.games],
        details: [...state.details],
        categories: actions.payload,
      };
    default:
      return state;
  }
};
