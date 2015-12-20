parking.controller("parkingCtrl", function($scope) {
  $scope.appTitle = "[Packt] parking";
  $scope.alertTopic = "Something went wrong!";
  $scope.descriptionTopic = "You must inform the plate and the color of the car!"

  $scope.cars = [];
  $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];
  
  $scope.park = function(car) {
    car.entrance = new Date();
    $scope.cars.push(car);
    delete $scope.car;
  }
})