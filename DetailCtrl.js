app.controller("DetailCtrl", function($routeParams, $scope, overlay) {

  $scope.img = "big/" + $routeParams.big;

  $scope.$on("$destroy", function() {
    renderer.domElement.remove()
    overlay.hide();
  })

});