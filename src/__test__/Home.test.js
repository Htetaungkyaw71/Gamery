import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore'
import Home from '../components/Home';
import { BrowserRouter } from 'react-router-dom';

describe('Testing Home page component', () => {
  it('should render correctly Home page component', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
            <Home />     
        </BrowserRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});