import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

const TodoList = ({ todos }) => {

	const elems = todos.map((todo) => {
		return (
			<TodoItem {...todo} key={uuidv4()} />

			// same as:

			// <TodoItem
			// 	label={todo.label}
			// 	isImportant={todo.isImportant}
			// 	key={uuidv4()}
			// />
		);
	});

	return (<ul>
		{elems}
	</ul>);
};

export default TodoList;