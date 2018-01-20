angular
    .module('notebookList')
    .component('notebookList', {
        templateUrl: 'app/notebooks/notebook-list/notebook-list.template.html',
        controller: ['notebookService',
            function NotebookListController(notebookService) {
                var self = this;
                self.notebooks = notebookService.getNotebooks();
            }]
    });