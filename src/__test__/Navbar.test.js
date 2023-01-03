import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import store from '../redux/configureStore';

describe('Testing Navigation', () => {
  test('Test for Navbar component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );

    useEvent.click(screen.getByText('GAMERY'));
  });
});
