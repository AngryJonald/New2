angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    //$scope.detailedInfo = undefined;
    var list = undefined;
    // var alert = document.getElementById("wrongInput");
    // var success = document.getElementById("correctInput");
    // alert.style.visibility = 'hidden';
    // success.style.visibility = 'hidden';
    var signal =document.getElementById("glyph");
    var alert = document.getElementById("status");
    var button = document.getElementById("deleteButton");
    alert.style.visibility = 'hidden';
    button.style.visibility ='hidden';


    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      if ($scope.newCode != undefined && $scope.newName != undefined && $scope.newLatitude == undefined && $scope.newLongitude == undefined && $scope.newAddress == undefined ) {
        $scope.newListing = {
          "code": $scope.newCode, 
          "name": $scope.newName
        };
        $scope.listings.push($scope.newListing);
        $scope.message = "  Success! " + $scope.newName + " has been added to the directory!";
        alert.style.visibility = 'visible';
        alert.className = "alert alert-success";
        signal.className = "glyphicon glyphicon-ok-sign";

      } else if ($scope.newCode != undefined && $scope.newName != undefined && $scope.newLatitude != undefined && $scope.newLongitude != undefined && $scope.newAddress != undefined) {
        $scope.newListing = {
          "code": $scope.newCode, 
          "name": $scope.newName, 
          "coordinates": {
            "latitude": $scope.newLatitude, 
            "longitude": $scope.newLongitude
            }, 
          "address": $scope.newAddress
        };
        $scope.listings.push($scope.newListing);
        $scope.message = "  Success! " + $scope.newName + " has been added to the directory!";
        alert.style.visibility = 'visible';
        alert.className = "alert alert-success";
        signal.className = "glyphicon glyphicon-ok-sign";
      
      } else {
        $scope.message = "  Warning! Incorrect input, please try again!";
        alert.style.visibility = 'visible';
        alert.className = "alert alert-warning";
        signal.className = "glyphicon glyphicon-alert-sign";
      }

      $scope.newListing = undefined;
      $scope.newCode = undefined;
      $scope.newName = undefined;
      $scope.newLatitude = undefined;
      $scope.newLongitude= undefined;
      $scope.newAddress = undefined;

      //These 5 lines of code resets the values of each textbox, effectively clearing them
      document.getElementById("codeTB").value = "";
      document.getElementById("nameTB").value = "";
      document.getElementById("latTB").value = "";
      document.getElementById("longTB").value = "";
      document.getElementById("addTB").value = "";
    };
    $scope.deleteListing = function() {
      $scope.listings.splice(Listings.indexOf(list), 1);
      $scope.message = "  Directory Updated! " + $scope.name + " has been removed from the directory!";
      alert.style.visibility = 'visible';
      alert.className = "alert alert-info";
      signal.className = "glyphicon glyphicon-info-sign"
      $scope.code = undefined;
      $scope.name = undefined;
      $scope.latitude = undefined;
      $scope.longitude = undefined;
      $scope.address = undefined;
      button.style.visibility = 'hidden';
    };
    $scope.showDetails = function(listing) {
      list = listing;
      $scope.code = listing.code;
      $scope.name = listing.name;
      if (listing.coordinates == undefined) {
        $scope.latitude = undefined;
        $scope.longitude = undefined;
      } else {
        $scope.latitude = 'Latitude: ' + listing.coordinates.latitude;
        $scope.longitude = 'Longitude: ' + listing.coordinates.longitude;
      }
      if (listing.address == undefined) {
        $scope.address = undefined;
      } else {
        $scope.address = listing.address;
      }
      button.style.visibility = 'visible';
    };
  }
]);