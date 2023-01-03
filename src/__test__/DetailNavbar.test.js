import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import DetailNavbar from '../components/DetailNavber';

describe('Testing Navigation', () => {
  test('Test for DetailNavbar component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DetailNavbar />
        </BrowserRouter>
      </Provider>,
    );

    useEvent.click(screen.getByText('GAMERY'));
  });
});
