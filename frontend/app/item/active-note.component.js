angular
    .module('activeNote')
    .component('activeNote', {
        templateUrl: 'app/item/active-note.template.html',
        controller: ['$location', '$routeParams', 'noteService',
            function ActiveNoteController($location, $routeParams, noteService) {
                this.activeNote = noteService.getNote($routeParams.noteId);

                this.deleteActiveNote = function() {
                    noteService.delete($routeParams.noteId);
                    $location.path('/');
                }
            }]
    });