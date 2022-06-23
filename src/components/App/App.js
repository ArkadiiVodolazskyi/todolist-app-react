import React from 'react';
import './App.css';

import Header from "../Header";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import AddPanel from "../AddPanel";

export default class App extends React.Component {

	createItem = (title) => {
		return {
			label: title,
			isImportant: false,
			isDone: false
		}
	}

	state = {
		todos: [
			this.createItem('Pet a cat'),
			this.createItem('Feed a cat'),
			this.createItem('Walk a cat'),
			this.createItem('Walk myself')
		],
		search_query: '',
		category: 'all'
	}

	onDelete = (index) => {
		this.setState(({todos}) => {
			const new_todos = todos.filter((todo, todo_index) => todo_index !== index);
			return {
				todos: new_todos
			};
		});
	}

	onAdd = (title) => {
		this.setState(({todos}) => {
			const new_todos = [...todos, this.createItem(title)];
			return {
				todos: new_todos
			};
		});
	}

	onToggleImportant = (index) => {
		const new_todos = [...this.state.todos];
		new_todos[index].isImportant = !new_todos[index].isImportant;
		this.setState(({todos}) => {
			return {
				todos: new_todos
			};
		});
	}

	onToggleDone = (index) => {
		const new_todos = [...this.state.todos];
		new_todos[index].isDone = !new_todos[index].isDone;
		this.setState(({todos}) => {
			return {
				todos: new_todos
			};
		});
	}

	calcTodoAmount = () => {
		return this.state.todos.reduce(
			(sum, el) => sum + !el.isDone,
  		0
		);
	}

	calcDoneAmount = () => {
		return this.state.todos.reduce(
			(sum, el) => sum + el.isDone,
  		0
		);
	}

	writeSearchQuery = (search_query) => {
		this.setState({ search_query });
	}

	writeCategoryQuery = (category) => {
		this.setState({ category });
	}

	render() {
		const { todos, search_query, category } = this.state;

		const filterTodosBySearch = () => {
			if (search_query.length === 0) { return todos; }
			return todos.filter(todo => todo.label.toLowerCase().includes(search_query.toLowerCase()));
		}

		const filterTodosByCategory = () => {
			if (category === 'all') { return todos; }
			const filteredTodosBySearch = filterTodosBySearch();
			return filteredTodosBySearch.filter((todo) => {
				if (category === 'active') { return todo.isDone === false; }
				if (category === 'done') { return todo.isDone === true; }
			})
		}

		return (
			<div id="app" className='App p-4 fs-5'>
				<Header
					todoAmount={this.calcTodoAmount()}
					doneAmount={this.calcDoneAmount()}
				/>
				<SearchPanel
					writeSearchQuery={this.writeSearchQuery}
					writeCategoryQuery={this.writeCategoryQuery}
				/>
				<TodoList
					todos={filterTodosByCategory()}
					onDelete={this.onDelete}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
				/>
				<AddPanel
					onAdd={this.onAdd}
				/>
			</div>
		);
	}

};