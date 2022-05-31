import './index.css';

import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

const App = () => {

	const todos = [
		{ label: 'Pet a cat', isImportant: false },
		{ label: 'Feed a cat', isImportant: true },
		{ label: 'Walk a cat', isImportant: false },
		{ label: 'Walk myself', isImportant: false },
	];

	return (
		<div id="app">
			<SearchPanel />
			<TodoList todos={todos} />
		</div>
	);
};

export default App;