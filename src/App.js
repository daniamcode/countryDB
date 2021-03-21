import React from 'react';
import Header from './components/presentational/Header'
import Home from './components/container/Home'
import Favourites from './components/container/Favourites'
import { Route, Switch } from 'react-router-dom';


function App(props) {
  return (
    <div className="container">
      <Header />

      <div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/favourites" component={Favourites} />
			</Switch>
			
		</div>
    </div>
  );
}

export default App;
