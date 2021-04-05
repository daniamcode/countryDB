import React from 'react';
import Header from './components/presentational/Header'
import Home from './components/container/Home'
import Favourites from './components/container/Favourites'
import { Route, Switch } from 'react-router-dom';
import { useSelector } from "react-redux";
import { gql } from '@apollo/client';


function App({cache}) {
  const favourites = useSelector(
    (state) => state.favouritesReducer?.favourites
  );

  const listQuery = gql`
    query ($gender: String, $status: String, $species: String, $page: Int) {
      characters(
        page: $page
        filter: { gender: $gender, status: $status, species: $species }
      ) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          gender
          image
          status
          species
        }
      }
      favs @client
    }
  `;

  cache.writeQuery({
    query: listQuery,
    data: {
      favs: {favourites},
    },
  });

  return (
    <div className="container">
      <Header/>

      <div>
			<Switch>
				<Route exact path="/" render={(props) => (<Home {...props} listQuery={listQuery}/>)} />
				<Route path="/favourites" render={(props) => (<Favourites {...props} cache={cache} favs={favourites}/>)} />
			</Switch>
			
		</div>
    </div>
  );
}

export default App;
