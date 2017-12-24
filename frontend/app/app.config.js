angular
    .module('noteApp')
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/note/:noteId', {
                    template: '<active-note></active-note>'
                })
                .when('/home', {
                    templateUrl: '/app/home/home.template.html'
                })
                .otherwise('/home');
        }
    ]);