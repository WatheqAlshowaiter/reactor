import Reactor from "./core/reactor";

// grap all service provider from all modules
import usersServiceProvider from "./modules/users/service-provider";
import categoriesServiceProvider from "./modules/categories/service-provider";

const reactor = new Reactor();

reactor.registerServiceProviders([
	// service provider list
	usersServiceProvider,
	categoriesServiceProvider,
]);

// start the application
reactor.react();
