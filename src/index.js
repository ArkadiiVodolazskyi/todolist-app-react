import { createRoot } from "react-dom/client";

const SearchPanel = () => {
	return (
		<input type="text" />
	);
};

const Todoitem = () => {
	return (
		<li>Item</li>
	);
};

const TodoList = () => {
	return (<ul>
		<Todoitem />
	</ul>);
};

const App = () => {
	return (
		<div id="app">
			<SearchPanel />
			<TodoList />
		</div>
	);
};

createRoot(
	document.querySelector('#root'))
.render(
	<App />
);