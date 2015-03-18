module.exports=function() {
	var factory={breweries:{},server:{}};
	factory.activeBrewery=undefined;
	factory.breweries.loaded=false;
	factory.breweries.refresh="all";//all|ask
	factory.breweries.update="immediate";//deffered|immediate
	factory.server.privateToken="";
	factory.server.restServerUrl="http://127.0.0.1/rest-open-beer-master/";
	factory.server.force=false;
	return factory;
};