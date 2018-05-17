import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Scenes/Home.js';
import StoresCatalog from './Scenes/StoresCatalog.js';

class App extends React.Component {
	render() {
		return (
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/catalog" component={StoresCatalog}/>
				</Switch>
			)
	}
}

ReactDOM.render(
    <BrowserRouter>
    	<App/>
	</BrowserRouter>,
    document.getElementById('root')
);