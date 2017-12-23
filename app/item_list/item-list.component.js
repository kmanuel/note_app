angular
    .module('noteApp')
    .component('noteList', {
        templateUrl: 'app/item_list/item-list.template.html',
        controller: function NoteListController() {
            this.notes = [
                {
                    "id": "1",
                    "title": "Programming Projects",
                    "body": "some body\nwith several lines\nand\nmarkdownstuff"
                }, {
                    "id": "2",
                    "title": "Title2",
                    "body": "some body\nwith several lines\nand\nmarkdownstuff"
                }, {
                    "id": "3",
                    "title": "Title3",
                    "body": "some body\nwith several lines\nand\nmarkdownstuff"
                }, {
                    "id": "4",
                    "title": "Title4",
                    "body": "some body\nwith several lines\nand\nmarkdownstuff"
                }, {
                    "id": "5",
                    "title": "Title5",
                    "body": "some body\nwith several lines\nand\nmarkdownstuff"
                }, {
                    "id": "6",
                    "title": "Title6",
                    "body": "some body\nwith several lines\nand\nmarkdownstuff"
                }
            ];
        }
    });