// import { fetchGames } from '../redux/actions';
// import { configureStore } from '@reduxjs/toolkit';

// describe('Testing actions creator', () => {
//   it('should pass', async () => {

//     const nameAndEmail = {
//       name: 'John Smith',
//       email: '123@123.com',
//     };

//     const getSpy = jest.spyOn(fetch, 'get').mockResolvedValueOnce({ data: { id: '1' } });
//     const store = configureStore({
//       reducer: function (state = '', action) {
//         switch (action.type) {
//           case 'FETCH_GAMES/fulfilled':
//             return action.payload;
//           default:
//             return state;
//         }
//       },
//     });
//     await store.dispatch(fetchGames(nameAndEmail));
//     expect(getSpy).toBeCalledWith('FETCH_GAMES', nameAndEmail);
//     const state = store.getState();
//     expect(state).toEqual('1');
//   });
// });