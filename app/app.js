angular.module("InvoiceParser", []).controller("AppCtrl", AppCtrl);

AppCtrl.$inject = ["$scope", "ParcerService"];

function AppCtrl($scope, ParcerService) {
  $scope.onFileSelect = function($fileContent) {
    $scope.invoice = $fileContent;

    var nums = $fileContent.split("\n\n");
    var parsedNums = [];
    nums.forEach(function(number) {
      if (number) {
        parsedNums.push(ParcerService.parseSevenSegmentASCII(number));
      }
    });
    $scope.parsed = parsedNums.join("\n");
    //console.log(parsedNums);
  };
}
