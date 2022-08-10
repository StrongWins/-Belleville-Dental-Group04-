var app1 = angular.module("myApp", ["ngRoute"]);
app1.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/professional-education", {
        templateUrl : "professional-education.html"
    })
    .when("/patient-education", {
        templateUrl : "patient-education.html"
    })
    .when("/product", {
        templateUrl : "product.html"
    })
    .when("/faculty-resources", {
        templateUrl : "faculty-resources.html"
    })
    .when("/particular-research", {
        templateUrl : "particular-research.html"
    })
    .when("/related-courses", {
        templateUrl : "related-courses.html"
    })
    ;
});

     