angular.module('token', [])
  .directive('token', function(){
    return{
      scope:{
      },
      templateUrl: 'token/token.tpl.html',
      link: function($scope) {

        var scene8 = new ScrollMagic.Scene({
          triggerElement: "#parallax8",
          offset:0
        }).setVelocity("#parallax8 .content", {opacity: 1.0}, {duration: 400})
        //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop8 = new ScrollMagic.Scene({
          triggerElement: "#parallax8",
          triggerHook:1,
          offset:-200
        })//.addIndicators()
          .addTo($scope.$parent.controller);

        var scene9 = new ScrollMagic.Scene({
          triggerElement: "#parallax9",
          offset:150
        }).setVelocity("#parallax9 .content", {opacity: 1.0}, {duration: 400})
        //.addIndicators()
          .addTo($scope.$parent.controller);

        var scene10 = new ScrollMagic.Scene({
          triggerElement: "#parallax10",
          offset:200
        }).setVelocity("#parallax10 .content", {opacity: 1.0}, {duration: 400})
        //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop10 = new ScrollMagic.Scene({
          triggerElement: "#parallax10",
          triggerHook:1,
          offset:200
        })//.addIndicators()
          .addTo($scope.$parent.controller);

        $scope.$parent.navLoaded.push('token');

        sceneTop8.on("enter", function (event) {
          $scope.$parent.activeScene = 'default';
          $scope.$parent.$apply();
        });

        sceneTop8.on("leave", function (event) {
          $scope.$parent.activeScene = 'dark';
          $scope.$parent.$apply();
        });

        sceneTop10.on("enter", function (event) {
          $scope.$parent.activeScene = 'dark';
          $scope.$parent.$apply();
        });

        sceneTop10.on("leave", function (event) {
          $scope.$parent.activeScene = 'default';
          $scope.$parent.$apply();
        });

        scene8.on("enter", function (event) {
          $scope.$parent.activeNav = 'token';
          $scope.$parent.$apply();
        });

        scene8.on("leave", function (event) {
          $scope.$parent.activeNav = 'prototype';
          $scope.$parent.$apply();
        });
        
      }
    };
  });