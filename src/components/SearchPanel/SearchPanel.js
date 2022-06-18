import React from 'react';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {

	onAdd = this.props.onAdd;

	state = {
		input_value: ''
	}

	change_input_value = (e) => {
		this.setState(() => {
			return {
				input_value: e.target.value
			};
		});
	}

	handle_on_add = (e) => {
		e.preventDefault();
		this.onAdd(this.state.input_value);
		this.setState(() => {
			return {
				input_value: ''
			};
		});
	}

	render() {
		return (
			<div className="SearchPanel d-flex justify-content-between align-items-center py-2 gap-3">
				<form
					className='input-group form_add_todo'
					onSubmit={this.handle_on_add}
				>
					<input
						type="text"
						onChange={this.change_input_value}
						className="form-control new_todo_title display-inline-block px-2 py-1"
						value={this.state.input_value}
						placeholder='New task'
					/>
					<input className="btn btn-success" type="submit" value="Add" />
				</form>
				<div className="btn-group btn-group-md">
					<button type="button" className="btn btn-primary">All</button>
					<button type="button" className="btn btn-outline-primary">Active</button>
					<button type="button" className="btn btn-outline-primary">Done</button>
				</div>
			</div>
		);
	}
}