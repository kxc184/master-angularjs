var weatherApp = angular.module("weatherApp", ["ngRoute"]);
const API_KEY = "8a0e793e3c26d69498b9ebff27bcd25e";
weatherApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/home.html",
      controller: "homeController",
    })
    .when("/forecast", {
      templateUrl: "pages/forecast.html",
      controller: "forecastController",
    });
});

weatherApp.controller("homeController", [
  "$scope",
  "cityService",
  function ($scope, cityService) {
    $scope.name = cityService.city;
    $scope.$watch("name", function () {
      cityService.city = $scope.name;
    });
  },
]);

weatherApp.controller("forecastController", [
  "$scope",
  "cityService",
  "$resource",
  function ($scope, cityService, $resource) {
    $scope.city = cityService.city;
    console.log($scope.city);
    $scope.weatherApi = $resource(
      "http://api.openweathermap.org/data/2.5/forecast/daily",
      { callback: "JSON_CALLBACK" },
      { get: { method: "JSONP" } }
    );

    $scope.weatherResult = $scope.weatherApi.get({ q: $scope.city, cnt: 2 });
  },
]);

weatherApp.service("cityService", function () {
  this.city = "Enter Your City";
});
