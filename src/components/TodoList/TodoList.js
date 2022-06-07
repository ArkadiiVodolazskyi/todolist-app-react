import TodoItem from '../TodoItem';
import { v4 as uuidv4 } from 'uuid';

const TodoList = ({ todos }) => {

	const elems = todos.map((todo) => {
		return (
			<TodoItem {...todo} key={uuidv4()} />
		);
	});

	return (<ul className='TodoList list-group'>
		{elems}
	</ul>);
};

export default TodoList;