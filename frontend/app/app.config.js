angular
    .module('noteApp')
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/note/:noteId', {
                    template: '<notes></notes>'
                })
                .when('/notebooks/', {
                    template: '<notebooks></notebooks>'
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