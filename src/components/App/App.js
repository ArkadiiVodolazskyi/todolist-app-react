import React from 'react';
import './App.css';

import Header from "../Header";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";

export default class App extends React.Component {

	state = {
		todos: [
			{ label: 'Pet a cat', isImportant: false },
			{ label: 'Feed a cat', isImportant: true },
			{ label: 'Walk a cat', isImportant: false },
			{ label: 'Walk myself', isImportant: false },
		]
	}

	onDelete = (index) => {
		this.setState(({todos}) => {
			const new_todos = todos.filter((todo, todo_index) => todo_index !== index);
			return {
				todos: new_todos
			};
		});
	}

	render() {
		const { todos } = this.state;

		return (
			<div id="app" className='App p-4 fs-5'>
				<Header />
				<SearchPanel />
				<TodoList
					todos={todos}
					onDelete={this.onDelete}
				/>
			</div>
		);
	}

};