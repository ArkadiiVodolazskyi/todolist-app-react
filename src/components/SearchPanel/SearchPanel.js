import React from 'react';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
	state = {
		search_query: ''
	}

	writeSearchQuery = this.props.writeSearchQuery;

	changeSearchQuery = (e) => {
		this.setState(() => {
			return {
				search_query: e.target.value
			};
		});
		this.writeSearchQuery(this.state.search_query);
	}

	render() {
		return (
			<div className="SearchPanel d-flex justify-content-between align-items-center py-2 gap-3">
				<form
					className='input-group form_add_todo'
				>
					<input
						type="text"
						className="form-control new_todo_title display-inline-block px-2 py-2"
						onChange={this.changeSearchQuery}
						value={this.state.search_query}
						placeholder='Search task title'
					/>
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