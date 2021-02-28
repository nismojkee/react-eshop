import React from 'react'

export default function CartItem( {item, value} ) {
	const {id, title, price, total, count} = item;
	const {increment, decrement, removeItem} = value;

	return (
		<>
			<td>
				{id}
			</td>
			<td>
				{title}
			</td>
			<td>
				{price}
			</td>
			<td>
				<div className="btn-group">
					<button className="btn btn-sm btn-outline-info" onClick={ () => decrement(id) }> - </button>
					<span className="btn btn-sm btn-outline-info">{count}</span>
					<button className="btn btn-sm btn-outline-info" onClick={ () => increment(id) }> + </button>
				</div>
			</td>
			<td>
				<button className="btn btn-sm btn-danger" onClick={ () => removeItem(id) }>
					Remove <i className="fa fa-trash fa-fw"></i>
				</button>
			</td>
			<td>
				{total}
			</td>
		</>
	)
}
