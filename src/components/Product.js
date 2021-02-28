import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {

	render() {
		const { id, title, company, price, inCart, color, img } = this.props.product;
		const colorCode = {color};

		return (
			<div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
				<div className="card shadow-sm">
					<ProductConsumer>
						{(value) => (
							<>
							<div className="img-container p-5" onClick={() => value.handleDetail(id)}>
								<Link to="/details">
									<img src={img} alt={title} className="card-img-top"/>
								</Link>
							</div>
							<div className="card-body">
								<p className="text-muted small text-uppercase my-0">
									{company}
								</p>
								<div className="d-flex flex-row justify-content-between align-items-center">
									<h5 className="h5 my-0">{title}</h5>
									<h3 className="h4 my-0 text-secondary">{price} &euro;</h3>
								</div>
								<div className="d-flex flex-row justify-content-start align-items-center">
									{colorCode.color.map(colorItem => {
										return <button key={colorItem[0]} className={`colorBtn ${colorItem}`}>&nbsp;</button>
									})}
								</div>
							</div>
							<div className="card-footer">
								<button className="btn btn-primary" disabled={inCart ? true : false} onClick={ () => { value.addToCart(id) } }>
									{
										inCart ?
										(<p className="text-capitalize mb-0" disabled >in cart</p>) :
											(<p className="text-capitalize mb-0"><i className="fa fa-sm fa-cart-plus fa-fw"></i></p>)
									}
								</button>
							</div>
							</>
						)}
					</ProductConsumer>
				</div>
			</div>
		)
	}
};