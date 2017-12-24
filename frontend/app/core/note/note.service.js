angular
    .module('core.note')
    .factory('noteService', ['$http', function ($http) {
        var self = this;
        this.notes = {};
        $http.get('http://localhost:8080/note').then(
            function success(response) {
                for (var index = 0; index < response.data.length; index++) {
                    var note = response.data[index];
                    self.notes[note.id] = note;
                }
            }, function errorCallback(response) {
                console.error(response);
            }
        );

        return {
            getNotes: function () {
                return self.notes;
            },
            getNote: function (noteId) {
                return self.notes[noteId];
            },
            addNote: function (newNote) {
                newNote.id = Object.keys(self.notes).length + 1;
                self.notes[newNote.id] = newNote;
                return newNote.id;
            }
        }
    }]);