var rhymeApp = angular.module('rhymeApp', ['ngResource']);

rhymeApp.controller('rhymeView', function ($scope, $resource) {
		$scope.rhymeApi = $resource("http://store.apicultur.com/api/rima/1.0.0/flor/true/0/200/true", {callBack: "JSON_CALLBACK"}, { get: {method: "JSONP"}});
		$scope.rhymeResult = $scope.rhymeApi.get();

		console.log($scope.rhymeResult);
});
