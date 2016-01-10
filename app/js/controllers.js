angular.module('AttendeeApp.controllers', []).

  controller('attendeesCtrl', function($scope, Attendee, Interest) {
    page = 1;
    $scope.attendees = [];
    $scope.busy = false;

    $scope.addMoreItems = function() {
      if ($scope.busy) return;
      $scope.busy = true;
      var per_page = page === 1 ? 100 : 25
      
      Attendee.query({page: page, interest: $scope.order, per_page: per_page}).$promise.then(function (response) {
         for (var i = 0; i < response.length; i++) {
            $scope.attendees.push(response[i]);
          }
        page += 1;
        $scope.busy = false;
      })
    }

    $scope.interests = Interest.query();
    $scope.order = "Importance"

    $scope.resetAttendees = function() {
      page = 1
      $scope.attendees = [];
      $scope.addMoreItems();
    }
  }).

  controller('attendeeCtrl', function($scope, $routeParams, Attendee) {
    $scope.attendee = Attendee.get({id: $routeParams.id});
  });



