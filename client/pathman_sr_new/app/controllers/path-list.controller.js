(function(app){

	var PathListCtrl = function($scope, SharedDataService) {

		$scope.pathListData = SharedDataService.data.pathListData;

	};

	PathListCtrl.$inject = ['$scope'];
	app.controller('PathListCtrl', PathListCtrl);

})(app);