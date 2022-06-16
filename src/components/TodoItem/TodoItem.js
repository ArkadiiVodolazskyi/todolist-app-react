import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {

	const {
		label,
		isImportant,
		isDone,
		onDelete,
		onToggleImportant,
		onToggleDone
	} = props;

	return (
		<li
			className={
				"TodoItem list-group-item d-flex justify-content-between align-items-center p-0"
				+ (isImportant ? ' important' : '' )
				+ (isDone ? ' done' : '' )
			}
		>
			<span
				className="TodoItem_label d-inline-flex flex-grow-1 p-2"
			>{ label }</span>
			<div className='TodoItem_buttons p-2'>
				<button
					type="button"
					className="check_delete btn btn-sm btn-danger mx-1"
					onClick={onDelete}
				>
					<i className="fa-solid fa-trash"></i>
				</button>
				<button
					type="button"
					className="check_important btn btn-sm btn-info mx-1 text-light"
					onClick={onToggleImportant}
				>
					<i className="fa-solid fa-exclamation"></i>
				</button>
				<button
					type="button"
					className="check_done btn btn-sm btn-success mx-1"
					onClick={onToggleDone}
				>
					<i className="fa-solid fa-check"></i>
				</button>
			</div>
		</li>
	);

}

export default TodoItem;