const Header = (props) => {
	const { todoAmount, doneAmount } = props;

	return (
		<header className="Header">
			<h1 className="text-center fs-1">Todo List</h1>
			<p className="text-center fs-5 my-3 text-secondary fw-semibold">
				{todoAmount} more to do, {doneAmount} done
			</p>
		</header>
	);
};

export default Header;