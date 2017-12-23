angular
    .module('activeNote')
    .component('activeNote', {
        templateUrl: 'app/item/active-note.template.html',
        controller: ['$routeParams',
            function ActiveNoteController($routeParams) {
                this.notes = [
                    {
                        "id": "0",
                        "title": "Programming Projects",
                        "body": "some body\nwith several lines\nand\nmarkdownstuff"
                    }, {
                        "id": "1",
                        "title": "Title2",
                        "body": "some body\nwith several lines\nand\nmarkdownstuff"
                    }, {
                        "id": "2",
                        "title": "Title3",
                        "body": "some body\nwith several lines\nand\nmarkdownstuff"
                    }, {
                        "id": "3",
                        "title": "Title4",
                        "body": "some body\nwith several lines\nand\nmarkdownstuff"
                    }, {
                        "id": "4",
                        "title": "Title5",
                        "body": "some body\nwith several lines\nand\nmarkdownstuff"
                    }, {
                        "id": "5",
                        "title": "Title6",
                        "body": "some body\nwith several lines\nand\nmarkdownstuff"
                    }
                ];

                this.activeNote = this.notes[$routeParams.noteId];
            }]
    });