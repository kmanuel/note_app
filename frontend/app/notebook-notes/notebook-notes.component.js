angular
    .module('notebookNotes')
    .component('notebookNotes', {
        templateUrl: 'app/notebook-notes/notebook-notes.template.html',
        controller: ['$scope', '$location', '$routeParams', 'notebookService',
            function NoteNotesController($scope, $location, $routeParams, notebookService) {
                var self = this;
                self.notebookId = $routeParams.notebookId;
                self.notebook = {
                    id : '',
                    notes : []
                };
                self.activeNote = {};
                fetchNotebook(self.notebookId);

                function saveActiveNoteUpdates() {
                    for (var i in self.notebook.notes) {
                        var note = self.notebook.notes[i];
                        if (note.id === self.activeNote.id) {
                            self.notebook.notes[i] = self.activeNote;
                        }
                    }
                    return notebookService.saveNotebook(self.notebook);
                }

                function setActiveNote(activeNoteId) {
                    if (activeNoteId) {
                        for (var i in self.notebook.notes) {
                            var note = self.notebook.notes[i];
                            if (note.id === activeNoteId) {
                                self.activeNote = note;
                            }
                        }
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
                    saveActiveNoteUpdates();
                    var newNote = {
                        "id": "",
                        "created": new Date().getTime(),
                        "title": "",
                        "body": ""
                    };
                    notebookService.addNoteToNotebook(newNote, self.notebookId).then(
                        function success(response) {
                            var newNoteId = response.data.id;
                            fetchNotebook(self.notebookId);
                            self.switchToNote(newNoteId, false);
                        },
                        function error(response) {
                            console.error('adding of note failed');
                        }
                    )

                };

                this.switchToNote = function(noteId, save) {
                    saveActiveNoteUpdates();
                    setActiveNote(parseInt(noteId));
                }
            }]
    });