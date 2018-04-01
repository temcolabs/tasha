angular.module('header', [])
  .directive('header', function(){
    return{
      scope:{
      },
      templateUrl: 'header/header.tpl.html',
      link: function($scope) {
        var scene1 = new ScrollMagic.Scene({
          triggerElement: "#parallax1",
          offset:60
        }).setVelocity("#parallax1 .content", {opacity: 1.0,}, {duration: 400})
        //.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
        //.addIndicators()
          .addTo($scope.$parent.controller);

        var headerTransform = new ScrollMagic.Scene({
          triggerElement: "#headerTransform",
          offset:300
        }).setClassToggle(".navbar", "navbar-color")
        //.addIndicators()
          .addTo($scope.$parent.controller);
      }
    };
  });