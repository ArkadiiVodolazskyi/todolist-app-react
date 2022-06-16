import TodoItem from '../TodoItem';
import { v4 as uuidv4 } from 'uuid';

const TodoList = ({
	todos,
	onDelete,
	onToggleImportant,
	onToggleDone
}) => {

	const elems = todos.map((todo, index) => {
		const key = uuidv4();
		return (
			<TodoItem
				{...todo}
				index={index}
				key={key}
				onDelete={() => onDelete(index)}
				onToggleImportant={() => onToggleImportant(index)}
				onToggleDone={() => onToggleDone(index)}
			/>
		);
	});

	return (<ul className='TodoList list-group'>
		{elems}
	</ul>);
};

export default TodoList;