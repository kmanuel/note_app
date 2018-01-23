angular
    .module('core.notebook')
        .factory('notebookService', ['$http', function ($http) {
            var self = this;
            this.notebooks = {};
            fetchNotebooks();

            function fetchNotebooks() {
                $http.get('http://localhost:8080/notebook').then(
                    function success(response) {
                        console.log('received from http://localhost:8080/notebook');
                        console.log(response.data);
                        for (var i = 0; i < response.data.length; i++) {
                            var notebook = response.data[i];
                            self.notebooks[notebook.id] = notebook;
                        }
                        console.log('notebooks after processing are:');
                        console.log(response.data);
                    },
                    function errorCallback(response) {
                        console.error(response);
                    }
                );
            }

            return {
                getFetchNotebooks: function() {
                    return $http.get('http://localhost:8080/notebook');
                },
                getNotebooks: function () {
                    return self.notebooks;
                },
                getNotebook: function (notebookId) {
                    return $http.get('http://localhost:8080/notebook/' + notebookId);
                },
                addNoteToNotebook: function (note, notebookId) {
                    return $http.post('http://localhost:8080/notebook/' + notebookId + '/notes', note);
                },
                addNotebook: function (newNotebook) {
                    return $http.post('http://localhost:8080/notebook', newNotebook);
                },
                saveNotebook: function (notebook) {
                    return $http.post('http://localhost:8080/notebook/' + notebook.id, notebook);
                },
                getNotesForNotebook: function (notebookId) {
                    return $http.get('http://localhost:8080/notebook/' + notebookId + '/notes');
                }
            }

        }]);