angular.module('footer', [])
  .directive('footer', function(){
    return{
      scope:{
      },
      templateUrl: 'footer/footer.tpl.html',
      link: function($scope) {
      
      }
    };
  });
//To support image [object-fit: contain] for cross browsing;
angular.element(document).ready(function () {
    objectFitImages();
});