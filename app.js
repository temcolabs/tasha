
var app = angular.module('TashaApp', []);
app.controller('TashaCtrl', function ($scope) {

  //language switcher
  $scope.lang = 'Eng';
  $scope.changeLang = function(lang){
    $scope.lang = lang;
  }

  //parallax
  // init controller
  var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

  // build scenes
  new ScrollMagic.Scene({triggerElement: "#parallax1"})
    .setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#parallax2"})
    .setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#parallax3"})
    .setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
    .addIndicators()
    .addTo(controller);
});