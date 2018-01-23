angular
    .module('noteApp')
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/note/:noteId', {
                    template: '<notes></notes>'
                })
                .when('/notebook/', {
                    template: '<notebooks></notebooks>'
                })
                .when('/notebook/:notebookId/note/:noteId', {
                    template: '<notebook-notes></notebook-notes>'
                })
                .when('/notebook/:notebookId', {
                    template: '<notebook-notes></notebook-notes>'
                })
                .when('/favorites/', {
                    template: '<favorites></favorites>'
                })
                .when('/home', {
                    templateUrl: '/app/home/home.template.html'
                })
                .otherwise('/home');
        }
    ]);