angular.module('AttendeeApp', [
  'AttendeeApp.services',
  'AttendeeApp.controllers',
  'AttendeeApp.constants',
  'ngRoute',
  'ngResource',
  'infinite-scroll'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/attendees", {templateUrl: "partials/attendees.html", controller: "attendeesCtrl"}).
	when("/attendees/:id", {templateUrl: "partials/attendee.html", controller: "attendeeCtrl"}).
	otherwise({redirectTo: '/attendees'});
}]);



