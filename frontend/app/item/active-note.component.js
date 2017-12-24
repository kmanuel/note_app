angular
    .module('activeNote')
    .component('activeNote', {
        templateUrl: 'app/item/active-note.template.html',
        controller: ['$routeParams', 'noteService',
            function ActiveNoteController($routeParams, noteService) {
                this.activeNote = noteService.getNote($routeParams.noteId);
            }]
    });