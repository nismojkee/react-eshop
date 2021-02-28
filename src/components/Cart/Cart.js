import React, { Component } from 'react';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../../context';

class Store extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col px-5">
							Cart
						</div>
					</div>
					<ProductConsumer>
						{value => {
							const {cart} = value;
							if (cart.length > 0) {
								return (
									<>
										<div className="row">
											<div className="col px-5">
												<table className="table table-hover">
													<div className="table-responsive">
														<table className="table">
															<thead>
																<tr>
																	<th scope="col">ID</th>
																	<th scope="col">Product</th>
																	<th scope="col">Price</th>
																	<th scope="col">Quantity</th>
																	<th scope="col">Remove</th>
																	<th scope="col">Total</th>
																</tr>
															</thead>
															<CartList value={value} />
														</table>
													</div>
												</table>
											</div>
										</div>
										<hr />
										<div className="row">
											<div className="col px-5 text-right">
												<CartTotals value={value} />
											</div>
										</div>
									</>
								)
							}
							else {
								return (
									<div className="row">
										<div className="col px-5">
											<h3>Your cart is empty</h3>
										</div>
									</div>
								)
							}
						}}
					</ProductConsumer>
				</div>
			</React.Fragment>
		)
	}
}

export default Store;