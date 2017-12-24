angular
    .module('core.note')
    .factory('noteService', ['$http', function($http) {
        var self = this;
        self.notes = [];
        return {
            getNotes: function() {
                return $http.get('app/notes/notes.json');
            },
            getNote: function(noteId) {
                console.log('getnote');
                return $http.get('app/notes/notes.json').then(function (response) {
                    self.notes = response.data;
                    console.log('returning: ');
                    console.log(self.notes[noteId]);
                    return self.notes[noteId];
                });
            }
        }
    }]);