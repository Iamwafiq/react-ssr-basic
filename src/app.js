import React from 'react';
import {Switch, Route} from 'react-router';

import LoginPage from './pages/loginPage'

class App extends React.Component {
	render(){
		return(<LoginPage />)
	}
}

export default App;
