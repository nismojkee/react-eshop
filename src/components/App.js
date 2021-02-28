import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

import Main from './Main';
import Blog from './Blog/Blog'
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart';
import Default from './Default';

class App extends Component {
	render () {
		return (
			<React.Fragment>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Main} />
					<Route path="/blog" component={Blog} />
					<Route path="/catalog" component={ProductList} />
					<Route path="/cart" component={Cart} />
					<Route path="/details" component={Details} />
					<Route component={Default} />
				</Switch>
			</React.Fragment>
		)
	}
}

export default App;