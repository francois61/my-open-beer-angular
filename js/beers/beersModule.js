var appBeers=angular.module("BeersApp", []).
controller("BeersController", ["$scope","rest","$timeout","$location","config","$route","save",require("./beersController")]).
controller("BeersAddController",["$scope","config","$location","rest","save","$document","modalService",require("./beerAddController")]).
controller("BeersUpdateController",["$scope","config","$location","rest","save","$document","modalService","$controller",require("./beerUpdateController")]);
module.exports=angular.module("BeersApp").name;