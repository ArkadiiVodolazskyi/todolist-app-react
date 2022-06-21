import React from 'react';
import './AddPanel.css';

export default class AddPanel extends React.Component {

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
			<div className="AddPanel d-flex justify-content-between align-items-center py-2 gap-3">
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
			</div>
		);
	}
}