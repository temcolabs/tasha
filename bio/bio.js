angular.module('bio', [])
  .directive('bio', function($http){
    return{
      scope:{
        data:'@'
      },
      templateUrl: 'bio/bio.tpl.html',
      link: function($scope) {
        $http.get('bio/data/' + $scope.data + '.json')
          .then(function(resp){
            $scope.firstName = resp.data.firstName.toUpperCase();
            $scope.lastName = resp.data.lastName.toUpperCase();
            $scope.position = resp.data.position;
            $scope.bios = resp.data.bio;
          });
      }
    };
  });