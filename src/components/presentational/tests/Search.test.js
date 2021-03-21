import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import Search from '../Search';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


describe('Search Component', () => {
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

  test('Should render search', () => {
    const state = {}
    wrapper = wrapperFactory(state);

    render(<Search />, { wrapper });

    expect(document.querySelector('.search')).toBeInTheDocument();
  })

  
})