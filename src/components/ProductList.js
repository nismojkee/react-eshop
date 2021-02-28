import React, { Component } from 'react';
import Product from './Product';
import { ProductConsumer } from '../context';

class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col px-5">
							Catalog
						</div>
					</div>
					<div className="row">
						<ProductConsumer>
							{ value => {
								return value.products.map( product => {
									return <Product key={product.id} product={product} />
								})
							}}
						</ProductConsumer>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default ProductList;