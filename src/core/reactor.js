// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById("root"));

import reportWebVitals from "./reportWebVitals";
import serviceProvidersContainer from "./service-provider-container";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default class Reactor {
	/**
	 * Allow the application to work offline
	 */
	workOffline() {
		reportWebVitals.register();
		return this;
	}
	/**
	 * Register the entire apllication service provider to the service provider container
	 * @param {array} serviceProviders
	 */
	registerServiceProviders(serviceProviders) {
		serviceProvidersContainer.register(serviceProviders);
	}

	/**
	 * start the apllication
	 */
	react() {
		// start calling all service providers
		serviceProvidersContainer.dispatch();
	}
}
