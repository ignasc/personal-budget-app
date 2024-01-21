function initialise(){
	console.log("Page has been loaded")
};


window.onload = function(){
	ReactDOM.render(
		<StrictMode>
			<App />
		</StrictMode>,
		document.getElementById("root-debug")
);
};

function App(){
	return <div>Testas</div>;
};
