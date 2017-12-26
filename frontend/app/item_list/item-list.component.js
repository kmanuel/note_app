angular
    .module('noteApp')
    .component('noteList', {
        templateUrl: 'app/item_list/item-list.template.html',
        controller: ['$location', '$routeParams', 'noteService',
            function NoteListController($location, $routeParams, noteService) {
                var self = this;
                self.notes = noteService.getNotes();

                this.addNote = function () {
                    var newNote = {
                        "id": "",
                        "created": new Date().getTime(),
                        "title": "",
                        "body": ""
                    };
                    var noteId = noteService.addNote(newNote);
                    $location.path('/note/' + noteId);

                };

                this.classForNoteId = function (noteId) {
                    return (noteId == $routeParams.noteId) ? 'active' : '';
                }


            }]
    });