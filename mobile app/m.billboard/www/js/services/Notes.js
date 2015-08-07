angular.module('app.services')

.service('Notes', function($http, URL) {
  return {
    getAll: function() {
      return $http.get(URL + '/notes');
    },
    saveNote: function(newNote) {
      return $http.post(URL + '/notes', newNote);
    },
    getNotesByUsername: function() {
      return $http.get(URL + '/notesByUsername')
        .success(function(notes) { return notes; });
    }
  };
});
