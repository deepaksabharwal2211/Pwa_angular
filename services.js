finalApp.factory('getData', ['$http' , function ($http) {
	return {
			fetching : function(callback){
					 $http.get('main.json').then(function(callback) {
					 	//alert(callback)
  });
			}
	};


}])