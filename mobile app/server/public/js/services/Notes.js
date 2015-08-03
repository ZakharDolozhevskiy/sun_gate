angular.module('app.services')

  .service('Notes', function($http) {

    return {
      getAll: function() {

        return $http.get('/notes').success(function(notes) { return notes; });
      },

      saveNote: function(newNote) { $http.post('/notes', newNote); },

      getNotesByUsername: function() {

        return $http.get('/notesByUsername')

          .success(function(notes) { return notes; });
      }
    };

  });
