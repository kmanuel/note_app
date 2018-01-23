angular
    .module('notebooks')
    .component('notebooks', {
        templateUrl: 'app/notebooks/notebooks.template.html',
        controller: [ 'notebookService', function NotebooksController(notebookService) {

            var self = this;
            self.newNotebook = {};
            fetchNotebooks();


            function fetchNotebooks() {
                notebookService.getFetchNotebooks().then(
                    function success(response) {
                        self.notebooks = response.data;
                    },
                    function error(response) {
                        console.log(response);
                    }
                );
            }

            this.save = function() {

                notebookService.addNotebook(self.newNotebook).then (
                    function success(response) {
                        fetchNotebooks();
                    },
                    function error(response) {
                        console.log(response);
                    }
                );
                self.newNotebook = {};
            };

            this.reset = function() {
                console.log('reset called');
                self.newNotebook = {};
            };

        }]
    });