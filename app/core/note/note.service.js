angular
    .module('core.note')
    .factory('noteService', ['$http', function ($http) {
        var self = this;
        this.notes = [];
        $http.get('app/notes/notes.json').then(function(response) {
            for (var index = 0; index < response.data.length; index++) {
                var note = response.data[index];
                self.notes.push(note);
            }
        });

        return {
            getNotes: function () {
                return self.notes;
            },
            getNote: function (noteIdx) {
                return self.notes[noteIdx];
            }
        }
    }]);