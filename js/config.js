module.exports=function($routeProvider,$locationProvider,$httpProvider) {
	//$httpProvider.defaults.useXDomain = true;
	//$httpProvider.defaults.withCredentials = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
	$routeProvider.
	when('/', {
		templateUrl: 'templates/main.html',
		controller: 'MainController'
	}).when('/breweries', {
		templateUrl: 'templates/breweries/main.html',
		controller: 'BreweriesController'
	}).when('/breweries/refresh', {
		templateUrl: 'templates/breweries/main.html',
		controller: 'BreweriesController'
	}).when('/breweries/new', {
		templateUrl: 'templates/breweries/breweryForm.html',
		controller: 'BreweryAddController'
	}).when('/breweries/update', {
		templateUrl: 'templates/breweries/breweryForm.html',
		controller: 'BreweryUpdateController'
	}).when('/saves', {
		templateUrl: 'templates/saveMain.html',
		controller: 'SaveController'
	}).when('/config', {
		templateUrl: 'templates/config.html',
		controller: 'ConfigController'
		}).when('/beers', {
		templateUrl: 'templates/beers/main.html',
		controller: 'BeersController'
	}).when('/beers/detail', {
		templateUrl: 'templates/beers/beerDetail.html',
		controller: 'BeersDetailController'
	}).when('/beers/refresh', {
		templateUrl: 'templates/beers/main.html',
		controller: 'BeersController'
	}).when('/beers/new',{
		templateUrl: 'templates/beers/beersForm.html',
		controller: 'BeersAddController'
	}).when('/breweries/update', {
		templateUrl: 'templates/breweries/breweryForm.html',
		controller: 'BreweryUpdateController'
	}).when('/breweries/detail', {
			templateUrl: 'templates/breweries/breweryDetail.html',
			controller: 'BreweryDetailController'
		}).otherwise({
		redirectTo: '/'
	});
	if(window.history && window.history.pushState){
		$locationProvider.html5Mode(true);
	}
};