import { createRoot } from "react-dom/client";

const el = (
	<div>
		<h1>Works</h1>
		<p>Okay</p>
	</div>
);

createRoot(
	document.querySelector('#root'))
.render(
	el
);