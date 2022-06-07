import './App.css';

import Header from "../Header";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";

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