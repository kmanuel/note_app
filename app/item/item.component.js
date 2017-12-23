angular
    .module('noteApp')
    .component('activeNote', {
        templateUrl: 'app/item/item.template.html',
        controller: function ActiveNoteController() {
            this.activeNote = {
                "id": "1",
                "title": "Programming Projects",
                "body": "some body\nwith several lines\nand\nmarkdownstuff"
            };
        }
    });