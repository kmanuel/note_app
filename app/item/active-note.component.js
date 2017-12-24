angular
    .module('activeNote')
    .component('activeNote', {
        templateUrl: 'app/item/active-note.template.html',
        controller: ['$routeParams', 'noteService',
            function ActiveNoteController($routeParams, noteService) {
                var self = this;
                noteService.getNotes().then(function (response) {
                    self.activeNote = response.data[$routeParams.noteId];
                });
            }]
    });