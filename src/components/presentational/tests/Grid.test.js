import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import Grid from '../Grid';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


describe('Grid Component', () => {
  let wrapper = null;
  let store = null;
  const wrapperFactory = (wrapperState) => {
    store = configureStore(wrapperState);

    const client = new ApolloClient({
        uri: 'https://rickandmortyapi.com/graphql',
        cache: new InMemoryCache()
      })

    return ({ children }) => (
        <Provider store={store}>
        <ApolloProvider client={client}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
        </ApolloProvider>
        </Provider>
    );
  };

  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });

  test('Should render box', () => {
    const state = {}
    wrapper = wrapperFactory(state);

    render(<Grid />, { wrapper });

    expect(document.querySelector('.box')).toBeInTheDocument();
  })

  
})