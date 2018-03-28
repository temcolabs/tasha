
var app = angular.module('TashaApp', ['nav','bio','footer']);
app.controller('TashaCtrl', function ($scope, $timeout) {
  //nav
  var activeNav;
  $scope.navClicked = function($event,linkId,noScroll){
    console.info('nav clicked');
    if(!noScroll){
      isLoaded = false;
      $("html, body").animate({scrollTop: $('a[name=' + linkId + ']').offset().top }, 500, function(){
        isLoaded = true;
      });
    }
    $('.nav-item').removeClass('active');

    if(linkId === 'home') {
      return;
    }

    var target = $event ? $($event.currentTarget) : $('.nav-link[data=' + linkId + ']');
    target.parent().addClass('active');
  };

  //advisors
  $scope.advisors = [
    'advisor1',
    'advisor2',
    'advisor3'
  ];
  $scope.teamMembers = [
    'brian_lee',
    'jaeseob_yoon',
    'hongsub_lim',
    'saemi_hong',
    'natasha_woo',
    'sunha_hwang'
  ];

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

  /*
  scene5.on("leave", function (event) {
    console.log("Scene left.");
  });
  */
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

  scene2.on("enter", function (event) {
    activeNav = 'about';
    if(isLoaded){
      $scope.navClicked(undefined,activeNav,true);
    }
  });

  scene2.on("leave", function (event) {
    activeNav = 'home';
    if(isLoaded){
      $scope.navClicked(undefined,'home',true);
    }
  });

  scene5.on("enter", function (event) {
    activeNav = 'whitepaper';
    if(isLoaded){
      $scope.navClicked(undefined,activeNav,true);
    }
  });

  scene5.on("leave", function (event) {
    activeNav = 'about';
    if(isLoaded){
      $scope.navClicked(undefined,'about',true);
    }
  });

  scene6.on("enter", function (event) {
    activeNav = 'technology';
    if(isLoaded){
      $scope.navClicked(undefined,activeNav,true);
    }
  });

  scene6.on("leave", function (event) {
    activeNav = 'whitepaper';
    if(isLoaded){
      $scope.navClicked(undefined,'whitepaper',true);
    }
  });

  scene7.on("enter", function (event) {
    activeNav = 'prototype';
    if(isLoaded){
      $scope.navClicked(undefined,activeNav,true);
    }
  });

  scene7.on("leave", function (event) {
    activeNav = 'technology';
    if(isLoaded){
      $scope.navClicked(undefined,'technology',true);
    }
  });

  scene8.on("enter", function (event) {
    activeNav = 'token';
    if(isLoaded){
      $scope.navClicked(undefined,activeNav,true);
    }
  });

  scene8.on("leave", function (event) {
    activeNav = 'prototype';
    if(isLoaded){
      $scope.navClicked(undefined,'prototype',true);
    }
  });

  scene11.on("enter", function (event) {
    activeNav = 'team';
    if(isLoaded){
      $scope.navClicked(undefined,activeNav,true);
    }
  });

  scene11.on("leave", function (event) {
    activeNav = 'prototype';
    if(isLoaded){
      $scope.navClicked(undefined,'token',true);
    }
  });

  var isLoaded = false;
  $timeout(function(){
    isLoaded = true;
    if(activeNav){
      $scope.navClicked(undefined,activeNav,true);
    }
  });
});