var app = angular.module("suggestions",['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'views/home.html'
    })
    .when('/posts/:postId', {
      controller: 'PostController',
      templateUrl: 'views/post.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
