// we need a container to store our service provider
let serviceProviders = [];

/**
 * Register the given service provider
 *
 * @param {array} serviceProvidersList
 */
function register(serviceProvidersList) {
	serviceProviders = serviceProvidersList;
}

/**
 * Start calling all service providers
 */
function dispatch() {
	for (let serviceProvider of serviceProviders) {
		new serviceProvider(); // function or class
	}
}

export default {
	register,
	dispatch,
};
