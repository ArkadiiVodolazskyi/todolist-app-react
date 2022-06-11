import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {

	state = {
		isImportant: this.props.isImportant || false,
		isDone: this.props.isDone || false
	}

	process_item_click = () => {
		this.setState(({isDone}) => {
			return {
				isDone: !this.state.isDone
			};
		});
	}

	change_importance = () => {
		this.setState(({isImportant}) => {
			return {
				isImportant: !this.state.isImportant
			};
		});
	}

	render() {
		const { label, onDelete } = this.props;
		const { isImportant, isDone } = this.state;

		return (
			<li
				className={
					"TodoItem list-group-item d-flex justify-content-between align-items-center p-0"
					+ (isImportant ? ' important' : '' )
					+ (isDone ? ' done' : '' )
				}
			>
				<span
					className="TodoItem_label d-inline-flex flex-grow-1 p-2"
					onClick={this.process_item_click}
				>{ label }</span>
				<div className='TodoItem_buttons p-2'>
					<button
						type="button"
						className="check_delete btn btn-sm btn-danger mx-1"
						onClick={onDelete}
					>
						<i className="fa-solid fa-trash"></i>
					</button>
					<button
						type="button"
						className="check_important btn btn-sm btn-info mx-1 text-light"
						onClick={this.change_importance}
					>
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