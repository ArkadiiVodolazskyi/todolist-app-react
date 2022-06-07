const SearchPanel = () => {
	return (
		<div className="SearchPanel d-flex justify-content-between align-items-center py-2">
			<input type="text" />
			<div className="btn-group btn-group-md">
				<button type="button" className="btn btn-primary">All</button>
				<button type="button" className="btn btn-outline-primary">Active</button>
				<button type="button" className="btn btn-outline-primary">Done</button>
			</div>
		</div>
	);
};

export default SearchPanel;