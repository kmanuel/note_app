angular
    .module('notebookItem')
    .component('notebookItem', {
        templateUrl: 'app/notebooks/notebook-item/notebook-item.template.html',
        controller: ['notebookService', function NotebookItemController(notebookService) {

            var self = this;
            self.notebook = {};

            this.save = function() {
                console.log('save called');
                notebookService.addNotebook(self.notebook);
                self.notebook = {};
            };

            this.reset = function() {
                console.log('reset called');
                self.notebook = {};
            };

        }]
    });