import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore'
import { BrowserRouter } from 'react-router-dom';
import Card from '../components/Card';

describe('Testing Card page component', () => {
  it('should render correctly Card page component', () => {

    const game = {
        id:1,
        title:"god of war",
        thumbnail:"https://image.jpg",
        short_description:"best game",
        genre:"Action",
        platform:"Windows"


    }

    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
            <Card game={game} />     
        </BrowserRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});