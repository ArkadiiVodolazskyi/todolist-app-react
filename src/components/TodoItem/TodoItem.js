import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {

	// Variant 1 - modern
	process_item_lick = () => {
		console.log(`Clicked: ${this.props.label}`)
	}

	// Variant 2 - classic
	// constructor() {
	// 	super();

	// 	this.process_item_lick = () => {
	// 		console.log(`Clicked: ${this.props.label}`)
	// 	}
	// }

	render() {
		const {
			label,
			isImportant = false
		} = this.props;

		// Variant 3 - mine
		// ! should be used without 'this'
		// const process_item_lick = () => {
		// 	console.log(`Clicked: ${this.props.label}`)
		// }

		return (
			<li
				className={
					"TodoItem list-group-item d-flex justify-content-between align-items-center p-0"
					+ (isImportant ? ' important' : '' )
				}
			>
				<span
					className="TodoItem_label d-inline-flex flex-grow-1 p-2"
					onClick={this.process_item_lick}
				>{ label }</span>
				<div className='TodoItem_buttons p-2'>
					<button type="button" className="check_delete btn btn-sm btn-danger mx-1">
						<i className="fa-solid fa-trash"></i>
					</button>
					<button type="button" className="check_important btn btn-sm btn-info mx-1 text-light">
						<i className="fa-solid fa-exclamation"></i>
					</button>
					<button type="button" className="check_done btn btn-sm btn-success mx-1">
						<i className="fa-solid fa-check"></i>
					</button>
				</div>
			</li>
		);
	}
}