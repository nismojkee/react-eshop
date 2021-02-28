import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ProductConsumer } from '../context';

class Navbar extends Component {
	render() {
		return (
			<>
			<nav className="navbar position-sticky sticky-top navbar-expand-md navbar-dark px-sm-5 bg-dark shadow-sm">
				<Link to="/"><span className="navbar-brand">eShop</span></Link>

					<button className="navbar-toggler" type="button" >
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink to="/catalog" activeClassName="active" className="nav-link">
								Catalog
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/blog" activeClassName="active" className="nav-link">
								News
							</NavLink>
						</li>
					</ul>

					<ul className="navbar-nav ml-auto">
						<form className="form-inline mr-3">
							<input type="search" className="form-control form-control-sm" placeholder="Search..."/>
						</form>
						<li className="nav-item">
							<NavLink to="/cart" activeClassName="active" className="nav-link">
								<i className="fa fa-shopping-cart mr-2"></i>
								Cart
								<ProductConsumer>
									{value => {
										const { cart } = value;
										const cartLength = cart.length;
										return ( <span className="badge bg-light text-dark ml-2">{cartLength}</span>)
									}}
								</ProductConsumer>
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
			</>
		)
	}
}

export default Navbar;