import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import Navbar from '../components/Navbar';
import { Provider } from 'react-redux';
import store from '../redux/configureStore'
import { BrowserRouter } from 'react-router-dom';

describe('Testing Navigation', () => {
  test('Test for Navbar component', () => {
    render(
        <Provider store={store}>
        <BrowserRouter>
            <Navbar />     
        </BrowserRouter>
      </Provider>
    );

    useEvent.click(screen.getByText('GAMERY'));
  });
});