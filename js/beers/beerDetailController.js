module.exports=function($scope,config,$location,rest,save,$document,modalService, $controller){
    
    $scope.beer = config.activeBeer;

    if (angular.isUndefined(config.activeBeer)) {
        $location.path("beers/");
    } else {
        if ($scope.beer.photo == null || $scope.beer.photo == "") {
            $scope.beer.photo = "./img/beer.jpg";
        }
    }

    $scope.detailsBrewery=function(brewery){
        if(angular.isDefined(brewery))
            $scope.activeBrewery=$scope.beer.idBrewery;
        config.activeBrewery=angular.copy($scope.activeBrewery);
        config.activeBrewery.reference=$scope.activeBrewery;
        $location.path("breweries/details");
    }; 
};