
var app = angular.module('TashaApp', []);
app.controller('TashaCtrl', function ($scope) {

  //navbar
  $scope.navBars = [
    {
      title:'about',
      href:'#'
    },
    {
      title:'whitepaper',
      href:'#'
    },
    {
      title:'technology',
      href:'#'
    },
    {
      title:'prototype',
      href:'#'
    },
    {
      title:'token',
      href:'#'
    },
    {
      title:'team',
      href:'#'
    },
    {
      title:'notice',
      href:'#'
    }
  ];

  $scope.navClicked = function($event){
    $('.nav-item').removeClass('active');
    $($event.currentTarget).parent().addClass('active');
  };

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
    offset:60
  }).setVelocity("#parallax1 h1", {opacity: 1.0}, {duration: 400})
    //.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
    .addIndicators()
    .addTo(controller);


  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#parallax2",
    offset:170
  }).setVelocity("#parallax2 h1", {opacity: 1.0}, {duration: 400})
    .setClassToggle(".navbar", "navbar-color")
    .addIndicators()
    .addTo(controller);

  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#parallax3",
    offset:90
  }).setVelocity("#parallax3 h1", {opacity: 1.0}, {duration: 400})
    .addIndicators()
    .addTo(controller);
/*
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
*/
});