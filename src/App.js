import './index.css';

import Header from "./components/Header";
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
		<div id="app" className='App p-4 fs-5'>
			<Header />
			<SearchPanel />
			<TodoList todos={todos} />
		</div>
	);
};

export default App;