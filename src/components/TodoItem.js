const TodoItem = ({
	label,
	isImportant = false
}) => {
	return (
		<li
			className={
				"TodoItem list-group-item d-flex justify-content-between align-items-center px-1 py-2 "
				+ (isImportant ? 'important' : '' )
			}
		>
			<span className="px-2">{ label }</span>
			<div>
				<button type="button" className="check_delete btn btn-sm btn-danger mx-1">
					<i className="fa-solid fa-trash"></i>
				</button>
				<button type="button" className="check_done btn btn-sm btn-success mx-1">
					<i className="fa-solid fa-check"></i>
				</button>
			</div>
		</li>
	);
};

export default TodoItem;