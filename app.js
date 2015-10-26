var rhymeApp = angular.module('rhymeApp', ['ngResource']);

rhymeApp.controller('rhymeView', function ($scope, $resource) {

$scope.rhymeApi = $resource("http://store.apicultur.com/api/rima/1.0.0/flor/true/0/200/true",
{ get: { method: 'GET', headers : { 'auth-key' : '49vlBAfa41zQclqtq4DXIxzzU3oa' }}});

$scope.rhymeApi.get({},function (result) {
	console.log(result);
});

});