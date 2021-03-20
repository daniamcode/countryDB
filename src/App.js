import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Favourites from './components/Favourites'
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
