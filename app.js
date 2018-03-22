
var app = angular.module('TashaApp', []);
app.controller('TashaCtrl', function ($scope) {

  //navbar
  $scope.navBars = [
    {
      title:'about'
    },
    {
      title:'whitepaper'
    },
    {
      title:'technology'
    },
    {
      title:'prototype'
    },
    {
      title:'token'
    },
    {
      title:'team'
    },
    {
      title:'notice'
    }
  ];

  $scope.navClicked = function($event,linkId){
    $("html, body").animate({scrollTop: $('a[name=' + linkId + ']').offset().top }, 500);
    $('.nav-item').removeClass('active');
    if(linkId === 'home'){
      return;
    }
    $($event.currentTarget).parent().addClass('active');
  };

  //language switcher
  $scope.lang = 'Eng';
  $scope.changeLang = function(lang){
    $scope.lang = lang;
  }

  //parallax

  // init controller
  var controller = new ScrollMagic.Controller();

  // build scenes

  var headerTransform = new ScrollMagic.Scene({
    triggerElement: "#headerTransform",
    offset:450
  }).setClassToggle(".navbar", "navbar-color")
    //.addIndicators()
    .addTo(controller);

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#parallax1",
    offset:60
  }).setVelocity("#parallax1 .content", {opacity: 1.0,}, {duration: 400})
    //.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
    ////.addIndicators()
    .addTo(controller);

  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#parallax2",
    offset:250
  }).setVelocity("#parallax2 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#parallax3",
    offset:0
  }).setVelocity("#parallax3 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#parallax4",
    offset:0
  }).setVelocity("#parallax4 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var scene5 = new ScrollMagic.Scene({
    triggerElement: "#parallax5",
    offset:250
  }).setVelocity("#parallax5 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var scene6 = new ScrollMagic.Scene({
    triggerElement: "#parallax6",
    offset:300
  }).setVelocity("#parallax6 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var scene7 = new ScrollMagic.Scene({
    triggerElement: "#parallax7",
    offset:300
  }).setVelocity("#parallax7 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var scene8 = new ScrollMagic.Scene({
    triggerElement: "#parallax8",
    offset:0
  }).setVelocity("#parallax8 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var scene9 = new ScrollMagic.Scene({
    triggerElement: "#parallax9",
    offset:150
  }).setVelocity("#parallax9 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var scene10 = new ScrollMagic.Scene({
    triggerElement: "#parallax10",
    offset:200
  }).setVelocity("#parallax10 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var scene11 = new ScrollMagic.Scene({
    triggerElement: "#parallax11",
    offset:0
  }).setVelocity("#parallax11 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

});