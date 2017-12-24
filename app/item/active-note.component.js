angular
    .module('activeNote')
    .component('activeNote', {
        templateUrl: 'app/item/active-note.template.html',
        controller: ['$routeParams', '$http',
            function ActiveNoteController($routeParams, $http) {
                var self = this;
                $http.get('app/notes/notes.json').then(function (response) {
                    console.log(response);
                    self.notes = response.data;
                    self.activeNote = self.notes[$routeParams.noteId];
                });


            }]
    });