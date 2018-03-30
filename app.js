var app = angular.module('TashaApp', ['nav','bio','footer']);

app.controller('TashaCtrl', function ($scope, $timeout) {

  //nav

  function updateTop(mode){
    if(mode === 'dark'){
      $('#go_to_top img').attr('src','img/go_to_top_white@2x.png');
      $('#go_to_top_text').css('color','#fff');
    }
    else{
      $('#go_to_top img').attr('src','img/go_to_top@2x.png');
      $('#go_to_top_text').css('color','#202020');
    }
  }

  $scope.navClicked = function($event,linkId,noScroll){
    if(!noScroll){
      isLoaded = false;
      $("html, body").animate({scrollTop: $('a[name=' + linkId + ']').offset().top }, 500, function(){
        isLoaded = true;
        updateTop($scope.activeScene);
      });
    }
    $('.nav-item').removeClass('active');

    if(linkId === 'home') {
      return;
    }
    var target = $event ? $($event.currentTarget) : $('.nav-link[data=' + linkId + ']');
    target.parent().addClass('active');
  };

  $scope.$watch('activeScene', function(newValue) {
    console.warn(newValue);
    console.info(isLoaded);
    if (newValue && isLoaded) {
      updateTop(newValue);
      updateTop(newValue);
    }
  });

  $scope.$watch('activeNav', function(newValue){
    if(newValue && isLoaded){
      $scope.navClicked(undefined,newValue,true);
    }
  });

  //team members & advisors

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

  //position to activate navbar-color and go_to_top
  var headerTransform = new ScrollMagic.Scene({
    triggerElement: "#headerTransform",
    offset:450
  }).setClassToggle(".navbar", "navbar-color")
    //.addIndicators()
    .addTo(controller);

  var topTransform = new ScrollMagic.Scene({
    triggerElement: "#parallax2",
    triggerHook:1,
    offset:350
  }).setClassToggle("#go_to_top", "show")
    //.addIndicators()
    .addTo(controller);


  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#parallax1",
    offset:60
  }).setVelocity("#parallax1 .content", {opacity: 1.0,}, {duration: 400})
    //.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
    //.addIndicators()
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

  var sceneTop3 = new ScrollMagic.Scene({
    triggerElement: "#parallax3",
    triggerHook:1,
    offset:75
  })//.addIndicators()
    .addTo(controller);

  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#parallax4",
    offset:0
  }).setVelocity("#parallax4 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var sceneTop4 = new ScrollMagic.Scene({
    triggerElement: "#parallax4",
    triggerHook:1,
    offset:-325
  })//.addIndicators()
    .addTo(controller);

  var scene5 = new ScrollMagic.Scene({
    triggerElement: "#parallax5",
    offset:250
  }).setVelocity("#parallax5 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var sceneTop5 = new ScrollMagic.Scene({
    triggerElement: "#parallax5",
    triggerHook:1,
    offset:750
  })//.addIndicators()
    .addTo(controller);

  var scene6 = new ScrollMagic.Scene({
    triggerElement: "#parallax6",
    offset:300
  }).setVelocity("#parallax6 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var sceneTop6 = new ScrollMagic.Scene({
    triggerElement: "#parallax6",
    triggerHook:1,
    offset:200
  })//.addIndicators()
    .addTo(controller);

  var scene7 = new ScrollMagic.Scene({
    triggerElement: "#parallax7",
    offset:300
  }).setVelocity("#parallax7 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var sceneTop7 = new ScrollMagic.Scene({
    triggerElement: "#parallax7",
    triggerHook:1,
    offset:200
  })//.addIndicators()
    .addTo(controller);

  var scene8 = new ScrollMagic.Scene({
    triggerElement: "#parallax8",
    offset:0
  }).setVelocity("#parallax8 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var sceneTop8 = new ScrollMagic.Scene({
    triggerElement: "#parallax8",
    triggerHook:1,
    offset:-200
  })//.addIndicators()
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

  var sceneTop10 = new ScrollMagic.Scene({
    triggerElement: "#parallax10",
    triggerHook:1,
    offset:200
  })//.addIndicators()
    .addTo(controller);


  var scene11 = new ScrollMagic.Scene({
    triggerElement: "#parallax11",
    offset:0
  }).setVelocity("#parallax11 .content", {opacity: 1.0}, {duration: 400})
    //.addIndicators()
    .addTo(controller);

  var sceneTop11 = new ScrollMagic.Scene({
    triggerElement: "#parallax11",
    triggerHook:1,
    offset:-200
  })//.addIndicators()
    .addTo(controller);

  //scene events

  sceneTop3.on("enter", function (event) {
    $scope.activeScene = 'dark';
    $scope.$apply();
  });

  sceneTop3.on("leave", function (event) {
    $scope.activeScene = 'default';
    $scope.$apply();
  });

  sceneTop4.on("enter", function (event) {
    $scope.activeScene = 'default';
    $scope.$apply();
  });

  sceneTop4.on("leave", function (event) {
    $scope.activeScene = 'dark';
    $scope.$apply();
  });

  sceneTop5.on("enter", function (event) {
    $scope.activeScene = 'dark';
    $scope.$apply();
  });

  sceneTop5.on("leave", function (event) {
    $scope.activeScene = 'default';
    $scope.$apply();
  });

  sceneTop6.on("enter", function (event) {
    $scope.activeScene = 'default';
    $scope.$apply();
  });

  sceneTop6.on("leave", function (event) {
    $scope.activeScene = 'dark';
    $scope.$apply();
  });

  sceneTop7.on("enter", function (event) {
    $scope.activeScene = 'dark';
    $scope.$apply();
  });

  sceneTop7.on("leave", function (event) {
    $scope.activeScene = 'default';
    $scope.$apply();
  });

  sceneTop8.on("enter", function (event) {
    $scope.activeScene = 'default';
    $scope.$apply();
  });

  sceneTop8.on("leave", function (event) {
    $scope.activeScene = 'dark';
    $scope.$apply();
  });

  sceneTop10.on("enter", function (event) {
    $scope.activeScene = 'dark';
    $scope.$apply();
  });

  sceneTop10.on("leave", function (event) {
    $scope.activeScene = 'default';
    $scope.$apply();
  });

  sceneTop11.on("enter", function (event) {
    $scope.activeScene = 'default';
    $scope.$apply();
  });

  sceneTop11.on("leave", function (event) {
    $scope.activeScene = 'dark';
    $scope.$apply();
  });

  scene2.on("enter", function (event) {
    $scope.activeNav = 'about';
    $scope.$apply();
  });

  scene2.on("leave", function (event) {
    $scope.activeNav = 'home';
    $scope.$apply();
  });

  scene5.on("enter", function (event) {
    $scope.activeNav = 'whitepaper';
    $scope.$apply();
  });

  scene5.on("leave", function (event) {
    $scope.activeNav = 'about';
    $scope.$apply();
  });

  scene6.on("enter", function (event) {
    $scope.activeNav = 'technology';
    $scope.$apply();
  });

  scene6.on("leave", function (event) {
    $scope.activeNav = 'whitepaper';
    $scope.$apply();
  });

  scene7.on("enter", function (event) {
    $scope.activeNav = 'prototype';
    $scope.$apply();
  });

  scene7.on("leave", function (event) {
    $scope.activeNav = 'technology';
    $scope.$apply();
  });

  scene8.on("enter", function (event) {
    $scope.activeNav = 'token';
    $scope.$apply();
  });

  scene8.on("leave", function (event) {
    $scope.activeNav = 'prototype';
    $scope.$apply();
  });

  scene11.on("enter", function (event) {
    $scope.activeNav = 'team';
    $scope.$apply();
  });

  scene11.on("leave", function (event) {
    $scope.activeNav = 'prototype';
    $scope.$apply();
  });

  var isLoaded = false;
  $timeout(function(){
    isLoaded = true;
    if($scope.activeNav){
      var activeNav = $scope.activeNav;
      var activeScene = $scope.activeScene;
      $scope.activeNav = undefined;
      $scope.activeScene = undefined;
      $scope.$apply();
      $scope.activeNav = activeNav;
      $scope.activeScene = activeScene;
      $scope.$apply();
      $scope.navClicked(undefined,$scope.activeNav,true);
    }
  });
});