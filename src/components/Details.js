import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{ (value) => {
					const {id, company, img, info, price, title, inCart} = value.detailProduct;
					return (
						<div className="container-fluid">
							<div className="row">
								<div className="col text-center">
									<h3 className="h3 text-primary">{title}</h3>
								</div>
							</div>
							<div className="row p-5">
								<div className="col-12 col-sm-6 col-md-4 text-center text-md-right">
									<img src={img} alt={title} />
								</div>
								<div className="col">
									<h5 className="h5 text-black">{title}</h5>
									<p className="text-uppercase text-muted">{company}</p>
									<p>{info}</p>
									<p className="text-primary">{price} &euro;</p>
									<div className="d-flex flex-row justify-content-start align-items-center">
										<Link to="/">
											<button className="btn btn-secondary">Back to products</button>
										</Link>
										<button className="btn btn-primary ml-3" disabled={inCart ? true : false} onClick={ () => { value.addToCart(id); }} >
											{
												inCart ?
													(<p className="text-capitalize mb-0" disabled >in cart</p>) :
													(<p className="text-capitalize mb-0"><i className="fa fa-sm fa-cart-plus fa-fw"></i></p>)
											}
										</button>
									</div>
								</div>
							</div>
						</div>
					)
				}}
			</ProductConsumer>
		)
	}
}