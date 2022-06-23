import React from 'react';
import './SearchPanel.css';
import { v4 as uuidv4 } from 'uuid';

export default class SearchPanel extends React.Component {
	state = {
		search_query: '',
		category: this.props.category
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

		const { btnsList } = this.props;
		const btnsHtml = btnsList.map(btn => {
			return (
				<button
					type="button"
					className={"category_btn btn" + getBtnClass( btn )}
					data-category={ btn }
					key={ uuidv4() }
				>
					{ btn.toUpperCase() }
				</button>
			);
		});

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
				<div
					className="btn-group btn-group-md"
					onClick={this.changeCategory}
				>
					{ btnsHtml }
				</div>
			</div>
		);
	}
}