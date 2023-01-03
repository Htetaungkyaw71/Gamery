import reducer from '../redux/reducer';

const initialState = {
  games: [],
  details: [],
};

describe('game Reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles fetch games request', () => {
    expect(reducer(initialState, { type: 'FETCH_GAMES/fulfilled', payload: [{ id: 1, title: 'god of war', decription: 'best game' }] })).toEqual({
      ...initialState,
      games: [{ id: 1, title: 'god of war', decription: 'best game' }],
    });
  });

  it('handles fetch detail games request', () => {
    expect(reducer(initialState, { type: 'GET_DETAIL/fulfilled', payload: { id: 2, title: 'need for speed', decription: 'best seller game' } })).toEqual({
      ...initialState,
      details: [...initialState.details, { id: 2, title: 'need for speed', decription: 'best seller game' }],
    });
  });
});
