import { FETCH_GAMES, GET_DETAIL } from './actions';

const initialState = {
  games: [],
  details: [],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case `${FETCH_GAMES}/fulfilled`:
      return { games: [...actions.payload], details: [...state.details] };
    case `${GET_DETAIL}/fulfilled`:
      return { games: [...state.games], details: [...state.details, actions.payload] };
    default:
      return state;
  }
};
