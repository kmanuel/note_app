angular
    .module('noteApp')
    .component('noteList', {
        templateUrl: 'app/item_list/item-list.template.html',
        controller: ['$location', 'noteService',
            function NoteListController($location, noteService) {
                var self = this;
                self.notes = noteService.getNotes();

                this.addNote = function () {
                    console.log('addNote called');
                    var newNote = {
                        "id": "",
                        "lastEdit": "dummy-date",
                        "title": "",
                        "body": ""
                    }
                    var noteId = noteService.addNote(newNote);
                    $location.path('/note/' + noteId);

                }
            }]
    });