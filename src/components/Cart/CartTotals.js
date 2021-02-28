import React from 'react';
import PayPalButton from './PayPalButton';

export default function CartTotals( {value, history} ) {
	const {cartSubTotal, cartTotal, clearCart} = value;
	return (
		<>
			<ul className="list-unstyled">
				<li>
					<button className="btn btn-danger" onClick={ () => clearCart() }>Remove all</button>
				</li>
				<li>
					Subtotal: {cartSubTotal} &euro;
				</li>
				<li>
					Tax: 10%
				</li>
				<li>
					Total: {cartTotal} &euro;
				</li>
				<li>
					<PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
				</li>
			</ul>
		</>
	)
}
