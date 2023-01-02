import { FETCH_GAMES } from "./actions";


let initial_State = [];

export const gameReducer = (state = initial_State, actions) => {
    switch (actions.type) {
        case `${FETCH_GAMES}/fulfilled`:
            return [...actions.payload];
        default:
            return state
    }
}   