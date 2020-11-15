// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById("root"));

import reportWebVitals from "./reportWebVitals";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default class Reactor {
	/**
	 * Allow the application to work offline
	 */
	offlineApp() {
		reportWebVitals.register();
		return this;
	}

	/**
	 * start the apllication
	 */
	react() {}
}