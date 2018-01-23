angular
    .module('notebookNotes')
    .component('notebookNotes', {
        templateUrl: 'app/notebook-notes/notebook-notes.template.html',
        controller: ['$scope', '$routeParams', 'notebookService',
            function NoteNotesController($scope, $routeParams, notebookService) {
                var self = this;
                self.notebookId = $routeParams.notebookId;
                self.notebook = {
                    id : '',
                    notes : []
                };
                self.activeNote = {};
                fetchNotebook(self.notebookId);

                $scope.$on("$destroy", function(){
                    saveActiveNoteUpdates();
                });

                function saveActiveNoteUpdates() {
                    for (var i in self.notebook.notes) {
                        var note = self.notebook.notes[i];
                        if (note.id === self.activeNote.id) {
                            self.notebook.notes[i] = self.activeNote;
                        }
                    }
                    notebookService.saveNotebook(self.notebook);
                }

                function setActiveNote(activeNoteId) {
                    if (activeNoteId) {
                        for (var i in self.notebook.notes) {
                            var note = self.notebook.notes[i];
                            if (note.id === activeNoteId) {
                                self.activeNote = note;
                            }
                        }
                        console.log('activeNote=');
                        console.log(self.activeNote);
                    }
                }

                function fetchNotebook(notebookId) {
                    notebookService.getNotebook(notebookId).then(
                        function success(response) {
                            self.notebook = response.data;
                            setActiveNote(
                                parseInt($routeParams.noteId));
                        },
                        function error(response) {
                            console.error('could not load notebook for id=' + self.notebookId);
                        }
                    );
                }

                this.addNote = function () {
                    var newNote = {
                        "id": "",
                        "created": new Date().getTime(),
                        "title": "",
                        "body": ""
                    };
                    notebookService.addNoteToNotebook(newNote, self.notebookId).then(
                        function success(response) {
                            fetchNotebook(self.notebookId);
                        },
                        function error(response) {
                            console.error('adding of note failed');
                        }
                    )

                };

                this.switchToNote = function(noteId) {
                    saveActiveNoteUpdates();
                    setActiveNote(parseInt(noteId));
                }
            }]
    });