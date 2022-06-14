import React from 'react';

export default class SearchPanel extends React.Component {

	onAdd = this.props.onAdd;

	state = {
		input_value: ''
	}

	change_input_value = () => {
		this.setState(() => {
			return {
				input_value: document.querySelector('.new_todo_title').value
			};
		});
	}

	handle_on_add = () => {
		this.onAdd(this.state.input_value);
		this.setState(() => {
			return {
				input_value: ''
			};
		});
	}

	render() {


		return (
			<div className="SearchPanel d-flex justify-content-between align-items-center py-2">
				<input
					type="text"
					onChange={this.change_input_value}
					className="new_todo_title px-2 py-1"
					value={this.state.input_value}
				/>
				<button
					type="button"
					className="btn btn-success"
					onClick={this.handle_on_add}
				>Add</button>
				<div className="btn-group btn-group-md">
					<button type="button" className="btn btn-primary">All</button>
					<button type="button" className="btn btn-outline-primary">Active</button>
					<button type="button" className="btn btn-outline-primary">Done</button>
				</div>
			</div>
		);
	}
}