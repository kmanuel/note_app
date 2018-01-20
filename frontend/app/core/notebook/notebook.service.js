angular
    .module('core.notebook')
        .factory('notebookService', ['$http', function ($http) {
            var self = this;
            this.notebooks = {};
            $http.get('http://localhost:8080/notebook').then(
                function success(response) {
                    for (var i = 0; i < response.data.length; i++) {
                        var notebook = response.data[i];
                        self.notebooks[i] = notebook;
                    }
                },
                function errorCallback(response) {
                    console.error(response);
                }
            );

            return {
                getNotebooks: function () {
                    return self.notebooks;
                },
                getNotebook: function (notebookId) {
                    return self.notebooks[notebookId];
                },
                addNotebook: function (newNotebook) {
                    function getNotebookId() {
                        var ids = Object.keys(self.notebooks);
                        var max = 0;
                        for (var i = 0; i < ids.length; i++) {
                            var currId = parseInt(ids[i]);
                            if (currId > max) {
                                max = currId;
                            }
                        }
                        return max + 1;
                    }
                    newNotebook.id = getNotebookId();
                    self.notebooks[newNotebook.id] = newNotebook;
                    return newNotebook.id;
                }
            }

        }]);