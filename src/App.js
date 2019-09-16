import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import DairyDept from './components/DairyDept';
import FrozenDept from './components/FrozenDept';
import MeatDept from './components/MeatDept';
import Main from './components/Main';

function App(){
	return (
		<Router>
			<h1>Welcome to H Mart lol.</h1>
			<Route path='/' component={NavBar}/>
			<Route exact path='/main' component={Main} />
			<Route exact path='/dairy' component={DairyDept} />
			<Route exact path='/frozen' component={FrozenDept} />
			<Route exact path='/meat' component={MeatDept} />
		</Router>
	)
}

export default App;