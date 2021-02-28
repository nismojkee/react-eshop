import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar position-sticky sticky-top navbar-expand-sm navbar-dark px-sm-5 bg-dark shadow-sm">
				<Link to="/"><span className="navbar-brand">eShop</span></Link>

				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<NavLink to="/cart" activeClassName="active" className="nav-link">
							<i className="fa fa-shopping-cart"></i> Cart <span className="badge bg-light text-dark">0</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Navbar;