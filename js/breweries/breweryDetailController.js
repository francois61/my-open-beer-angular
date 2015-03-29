module.exports=function($scope,config,$location,rest,save,$document,modalService, $controller){

    if (config.activeBrewery==null || config.activeBrewery =="")
        $scope.brewery = $routeParams
    else
        $scope.brewery = config.activeBrewery;

   


};