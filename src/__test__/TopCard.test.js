import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import TopCard from '../components/TopCard';

describe('Testing TopCard page component', () => {
  it('should render correctly TopCard page component', () => {
    const game = {
      id: 1,
      title: 'god of war',
      thumbnail: 'https://image.jpg',
      short_description: 'best game',
      genre: 'Action',
      platform: 'Windows',

    };

    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <TopCard game={game} />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toBeTruthy();
  });
});
