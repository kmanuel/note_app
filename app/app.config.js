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
                    template: '<div>View, edit & create Notes easily</div>'
                })
                .otherwise('/home');
        }
    ]);