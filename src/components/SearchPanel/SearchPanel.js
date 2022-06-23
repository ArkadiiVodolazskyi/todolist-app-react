import React from 'react';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
	state = {
		search_query: '',
		category: 'all'
	}

	changeSearchQuery = (e) => {
		const search_query = e.target.value;
		this.setState({ search_query });
		this.props.writeSearchQuery( search_query );
	}

	changeCategory = (e) => {
		if ( e.target.classList.contains('category_btn') ) {
			const category = e.target.getAttribute('data-category');
			this.setState({ category });
			this.props.writeCategoryQuery( category );
		}
	}

	render() {
		const getBtnClass = (category) => {
			return category === this.state.category ? (
				' btn-primary'
			) : (
				' btn-outline-primary'
			);
		}

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
				<div className="btn-group btn-group-md" onClick={this.changeCategory}>
					<button
						type="button"
						className={"category_btn btn" + getBtnClass('all')}
						data-category="all">
						All
					</button>
					<button
						type="button"
						className={"category_btn btn" + getBtnClass('active')}
						data-category="active">
						Active
					</button>
					<button
						type="button"
						className={"category_btn btn" + getBtnClass('done')}
						data-category="done">
						Done
					</button>
				</div>
			</div>
		);
	}
}