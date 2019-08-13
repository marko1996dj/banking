import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './App.module.scss';

import Login from './container/Auth/Login/Login';
import Dashboard from './container/Dashboard/Dashboard';
import Register from './container/Auth/Register/Register';

class App extends Component {
	render() {
		return (
			<div className={classes.App}>
				<Switch>
					<Route path="/" exact component={Login} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/register" component={Register} />
				</Switch>
			</div>
		);
	}
}

export default App;
