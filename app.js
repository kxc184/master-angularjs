var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {
  $routeProvider

    .when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
    })

    .when("/second", {
      templateUrl: "pages/second.html",
      controller: "secondController",
    })
    .when("/third", {
      templateUrl: "pages/third.html",
      controller: "thirdController",
    });
});

myApp.controller("mainController", [
  "$scope",
  "$log",
  function ($scope, $log) {
    $scope.name = "Main";
  },
]);

myApp.controller("secondController", [
  "$scope",
  "$log",
  function ($scope, $log) {
    $scope.name = "Second";
  },
]);

myApp.controller("thirdController", [
  "$scope",
  function ($scope) {
    $scope.name = "third";
  },
]);
