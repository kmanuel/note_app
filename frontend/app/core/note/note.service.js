angular
    .module('core.note')
    .factory('noteService', ['$http', function ($http) {
        var self = this;
        this.notes = {};
        this.remoteNoteIds = [];
        $http.get('http://localhost:8080/note').then(
            function success(response) {
                for (var index = 0; index < response.data.length; index++) {
                    var note = response.data[index];
                    self.notes[note.id] = note;
                    self.remoteNoteIds.push(note.id);
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
                newNote.title = "New";
                self.notes[newNote.id] = newNote;
                return newNote.id;
            },
            delete: function (noteId) {
              delete self.notes[noteId];
              var isRemoteNote = (self.remoteNoteIds.indexOf(parseInt(noteId)) >= 0);
              if (isRemoteNote) {
                  $http.delete('http://localhost:8080/note/' + noteId);
              }
            },
            upload: function () {
                return $http.post('http://localhost:8080/note/all', Object.values(self.notes));
            }
        }
    }]);