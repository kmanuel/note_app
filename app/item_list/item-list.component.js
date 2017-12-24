angular
    .module('noteApp')
    .component('noteList', {
        templateUrl: 'app/item_list/item-list.template.html',
        controller: ['noteService',
            function NoteListController(noteService) {
                var self = this;
                self.notes = noteService.getNotes();
            }]
    });