angular
    .module('activeNote')
    .component('activeNote', {
        templateUrl: 'app/notes/active-note/active-note.template.html',
        controller: ['$location', '$routeParams', 'noteService',
            function ActiveNoteController($location, $routeParams, noteService) {
                this.activeNote = noteService.getNote($routeParams.noteId);
            }]
    });