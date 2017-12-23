angular
    .module('noteApp')
    .component('noteList', {
        templateUrl: 'app/item_list/item-list.template.html',
        controller: function NoteListController() {
            this.notes = [
                {
                    "id": "0",
                    "lastEdit": "24.12.2017",
                    "title": "Programming Projects",
                    "body": "some body\nwith several lines\nand\nmarkdownstuff"
                }, {
                    "id": "1",
                    "lastEdit": "22.12.2017",
                    "title": "Title2",
                    "body": "some body\nwith several lines\nand\nmarkdownstuff"
                }, {
                    "id": "2",
                    "lastEdit": "22.12.2017",
                    "title": "Title3",
                    "body": "some body\nwith several lines\nand\nmarkdownstuff"
                }, {
                    "id": "3",
                    "lastEdit": "22.12.2017",
                    "title": "Title4",
                    "body": "some body\nwith several lines\nand\nmarkdownstuff"
                }, {
                    "id": "4",
                    "lastEdit": "03.12.2017",
                    "title": "Title5",
                    "body": "some body\nwith several lines\nand\nmarkdownstuff"
                }, {
                    "id": "5",
                    "lastEdit": "20.11.2017",
                    "title": "Title6",
                    "body": "some body\nwith several lines\nand\nmarkdownstuff"
                }
            ];
        }
    });