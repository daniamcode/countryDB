import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './redux/reducers/rootReducer';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

test('renders some text', () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  })

  render(
    <Provider store={store}>
    <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ApolloProvider>
    </Provider>);
  const textElement = screen.getByText(/CharactersDB/);
  
  expect(textElement).toBeInTheDocument();
});

