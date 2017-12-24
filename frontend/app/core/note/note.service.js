angular
    .module('core.note')
    .factory('noteService', ['$http', function ($http) {
        var self = this;
        this.notes = [];
        $http.get('http://localhost:8080/note').then(
            function success(response) {
                for (var index = 0; index < response.data.length; index++) {
                    var note = response.data[index];
                    self.notes.push(note);
                }
            }, function errorCallback(response) {
                console.error(response);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            }
        );

        return {
            getNotes: function () {
                return self.notes;
            },
            getNote: function (noteIdx) {
                return self.notes[noteIdx];
            },
            addNote: function (newNote) {
                newNote.id = self.notes.length;
                self.notes.push(newNote);
                return newNote.id;
            }
        }
    }]);