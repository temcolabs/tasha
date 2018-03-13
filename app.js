
var app = angular.module('TashaApp', []);
app.controller('TashaCtrl', function ($scope) {

  //language switcher
  $scope.lang = 'Eng';
  $scope.changeLang = function(lang){
    $scope.lang = lang;
  }

  //parallax

  // init controller
  //var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
  var controller = new ScrollMagic.Controller();

  // build scenes

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#parallax1",
  })
    //.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
    .addIndicators()
    .addTo(controller);


  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#parallax2"
    //,offset:-100
  }).setVelocity("h1", {opacity: 1.0}, {duration: 400})
    .setClassToggle(".navbar", "navbar-color")
    .addIndicators()
    .addTo(controller);

  var scene3 = new ScrollMagic.Scene({triggerElement: "#parallax3"})
    //.setVelocity("#animate", {opacity: 0}, {duration: 400})
    .addIndicators()
    .addTo(controller);

  function changeNavBarBg(event) {
    console.info(event);
    if(event.type === 'enter'){
      $('nav.navbar').removeClass('transparent');
    }
    else{
      $('nav.navbar').addClass('transparent');
    }
  }
  // add listeners
  //scene2.on("enter leave", changeNavBarBg);

});