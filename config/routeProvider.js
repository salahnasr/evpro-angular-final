(function(angular){
    'use strict';
    function configFn($routeProvider) {
        $routeProvider
            .when('/event', {
                controller: "sController",
                templateUrl: "../eventon/event.html"
            });
        $routeProvider.when(
            '/home',
            {
                templateUrl: '../eventon/body.html',
                controller: 'Home',
                caseInsensitiveMatch:true
            });
        $routeProvider.when(
            '/Task',
            {
                templateUrl: '../utils/Task/List.html',
                controller: 'TaskController',
                caseInsensitiveMatch:true
            });
        $routeProvider.when(
            '/sat',
            {
                templateUrl: '../utils/Satisfactions/test.view.html',
                controller: 'SatController',
                caseInsensitiveMatch:true
            });


        $routeProvider.when(
            '/event-sidebar-left',
            {
                templateUrl: '../eventon/event-sidebar-left.html',
                controller: 'SearchFlights',
                caseInsensitiveMatch:true
            });
        $routeProvider.when(
            '/event-sidebar-right',
            {
                templateUrl: '../eventon/event-sidebar-right.html',
                controller: 'FlightOneWay',
                caseInsensitiveMatch:true
            });
        $routeProvider.when(
            '/event-detail',
            {
                templateUrl: '../eventon/event-detail.html',
                controller: 'FlightStatus',
                caseInsensitiveMatch:true
            });
        $routeProvider.when(
            '/event-tv',
            {
                templateUrl: '../eventon/event-tv.html',
                controller: 'Profil',
                caseInsensitiveMatch:true

            });
        $routeProvider.when(
            '/event-blog',
            {
                templateUrl: '../eventon/event-blog.html',
                controller: 'InformationProfil',
                caseInsensitiveMatch:true

            });
        $routeProvider.when(
            '/event-single-blog',
            {
                templateUrl: '../eventon/event-single-blog.html',
                controller: 'LoginController',
                caseInsensitiveMatch:true

            });
        $routeProvider.when(
            '/gallery',
            {
                templateUrl: '../eventon/gallery.html',
                controller: 'History',
                caseInsensitiveMatch:true

            });
        $routeProvider.when(
            '/contact',
            {
                templateUrl: '../eventon/contact.html',
                controller: 'Contact',
                caseInsensitiveMatch:true


            });
        $routeProvider.when(
            '/payment',
            {
                templateUrl: '../eventon/payment.html',
                controller: 'payment',
                caseInsensitiveMatch:true


            });

        $routeProvider.when(
            '/login',
            {
                templateUrl: '../eventon/login.html',
                controller: 'login',
                caseInsensitiveMatch:true


            });

        $routeProvider.otherwise(
            {
                redirectTo: '/home'
            });
    }
    configFn.$inject=['$routeProvider'];
    
    angular.module("myApp").config(configFn);
})(angular);