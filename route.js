app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'corridas.html',
            controller: 'corridasCtrl'
        });
});