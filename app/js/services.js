angular.module('AttendeeApp.services', [])
  .service('Attendee', ['$resource', 'URL', function($resource, URL){
    return $resource(URL.apiBase + 'attendees/:id');
  }])

  .service('Interest', ['$resource', 'URL', function($resource, URL){
    return $resource(URL.apiBase + 'interests');
  }]);

  

