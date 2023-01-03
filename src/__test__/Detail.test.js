import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore'
import Detail from '../components/Detail';
import { BrowserRouter } from 'react-router-dom';

describe('Testing Detail page component', () => {
  it('should render correctly Detail page component', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
            <Detail />     
        </BrowserRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});