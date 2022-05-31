const TodoItem = ({
	label,
	isImportant = false
}) => {
	return (
		<li
			className={isImportant ? 'important' : ''}
		>
			{ label }
		</li>
	);
};

export default TodoItem;