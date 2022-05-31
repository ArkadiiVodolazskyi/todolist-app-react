import TodoItem from './TodoItem';

const TodoList = () => {
	return (<ul>
		<TodoItem label='Pet a cat' isImportant />
		<TodoItem label='Feed a cat' />
	</ul>);
};

export default TodoList;